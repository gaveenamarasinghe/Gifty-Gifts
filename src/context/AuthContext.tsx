import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";

import { auth, isFirebaseConfigured, googleProvider, facebookProvider } from "@/lib/firebase";

export type Role = "customer" | "vendor" | "admin";

export type GiftyUser = {
  uid: string;

  email: string | null;

  name: string | null;

  photoURL: string | null;

  emailVerified: boolean;

  role: Role;
};

type AuthContextValue = {
  user: GiftyUser | null;

  loading: boolean;

  demoMode: boolean;

  register(name: string, email: string, password: string): Promise<void>;

  login(email: string, password: string): Promise<void>;

  loginWithGoogle(): Promise<void>;

  loginWithFacebook(): Promise<void>;

  logout(): Promise<void>;

  forgotPassword(email: string): Promise<void>;

  resendVerification(): Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const API_URL = import.meta.env._API_URL || "http://localhost:5000";

const DEMO_KEY = "gifty.demo-user";

function mapUser(firebaseUser: User, role: Role = "customer"): GiftyUser {
  return {
    uid: firebaseUser.uid,

    email: firebaseUser.email,

    name: firebaseUser.displayName,

    photoURL: firebaseUser.photoURL,

    emailVerified: firebaseUser.emailVerified,

    role,
  };
}

async function loginBackend(firebaseUser: User): Promise<Role> {
  const idToken = await firebaseUser.getIdToken(true);

  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      idToken,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Backend login failed");
  }

  if (data.token) {
    localStorage.setItem("gifty_token", data.token);
  }

  if (data.user) {
    localStorage.setItem("gifty_user", JSON.stringify(data.user));

    return data.user.role || "customer";
  }

  return "customer";
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const demoMode = !isFirebaseConfigured;

  const [user, setUser] = useState<GiftyUser | null>(null);

  const [loading, setLoading] = useState(true);

  function setDemoUser(next: GiftyUser | null) {
    setUser(next);

    if (next) {
      localStorage.setItem(DEMO_KEY, JSON.stringify(next));
    } else {
      localStorage.removeItem(DEMO_KEY);
    }
  }

  useEffect(() => {
    if (demoMode) {
      const saved = localStorage.getItem(DEMO_KEY);

      if (saved) {
        setUser(JSON.parse(saved));
      }

      setLoading(false);

      return;
    }

    if (!auth) {
      setLoading(false);

      return;
    }

    return onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);

        setLoading(false);

        return;
      }

      try {
        const role = await loginBackend(firebaseUser);

        setUser(mapUser(firebaseUser, role));
      } catch (error) {
        console.error(error);

        setUser(mapUser(firebaseUser));
      }

      setLoading(false);
    });
  }, [demoMode]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,

      loading,

      demoMode,

      async register(name, email, password) {
        if (demoMode) {
          return setDemoUser({
            uid: "demo-" + Date.now(),

            email,

            name,

            photoURL: null,

            emailVerified: false,

            role: "customer",
          });
        }

        if (!auth) {
          throw new Error("Firebase not configured");
        }

        const credential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(credential.user, {
          displayName: name,
        });

        await sendEmailVerification(credential.user);

        const role = await loginBackend(credential.user);

        setUser(mapUser(credential.user, role));
      },

      async login(email, password) {
        if (demoMode) {
          return setDemoUser({
            uid: "demo-user",

            email,

            name: email.split("@")[0],

            photoURL: null,

            emailVerified: true,

            role: "customer",
          });
        }

        if (!auth) {
          throw new Error("Firebase not configured");
        }

        const credential = await signInWithEmailAndPassword(auth, email, password);

        const role = await loginBackend(credential.user);

        setUser(mapUser(credential.user, role));
      },

      async loginWithGoogle() {
        if (demoMode) {
          return setDemoUser({
            uid: "demo-google",

            email: "guest@gifty.shop",

            name: "Gifty Guest",

            photoURL: null,

            emailVerified: true,

            role: "customer",
          });
        }

        if (!auth) {
          throw new Error("Firebase not configured");
        }

        const credential = await signInWithPopup(auth, googleProvider());

        const role = await loginBackend(credential.user);

        setUser(mapUser(credential.user, role));
      },

      async loginWithFacebook() {
        if (demoMode) {
          return setDemoUser({
            uid: "demo-facebook",

            email: "guest@gifty.shop",

            name: "Gifty Guest",

            photoURL: null,

            emailVerified: true,

            role: "customer",
          });
        }

        if (!auth) {
          throw new Error("Firebase not configured");
        }

        const credential = await signInWithPopup(auth, facebookProvider());

        const role = await loginBackend(credential.user);

        setUser(mapUser(credential.user, role));
      },

      async logout() {
        if (demoMode) {
          return setDemoUser(null);
        }

        if (auth) {
          await signOut(auth);
        }

        localStorage.removeItem("gifty_token");

        localStorage.removeItem("gifty_user");

        setUser(null);
      },

      async forgotPassword(email) {
        if (demoMode) {
          return;
        }

        if (!auth) {
          throw new Error("Firebase not configured");
        }

        await sendPasswordResetEmail(auth, email, {
          url: window.location.origin + "/reset-password",
        });
      },

      async resendVerification() {
        if (demoMode) {
          return;
        }

        if (!auth?.currentUser) {
          throw new Error("No authenticated user");
        }

        await sendEmailVerification(auth.currentUser);
      },
    }),

    [user, loading, demoMode],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be inside AuthProvider");
  }

  return ctx;
}
