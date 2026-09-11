// firebase.js

import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnAi1nb2IjdTpKTJQZPSwBT8jDCiSar2M",

  authDomain: "giftlk-7a0af.firebaseapp.com",

  projectId: "giftlk-7a0af",

  storageBucket: "giftlk-7a0af.firebasestorage.app",

  messagingSenderId: "866418843452",

  appId: "1:866418843452:web:0f8dbccb6952f3acaf8839",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

// Backend API base URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ---------------------------------------------
// Providers
// ---------------------------------------------
// NOTE: register.tsx currently calls these as
// `googleProvider()` / `facebookProvider()`, i.e. as
// factory functions. Firebase's SDK actually wants
// provider *instances*, not calls. Below I export both
// styles so either usage works — but you should pick one
// and remove the other to avoid confusion:
//
//   Option A (recommended): use the instance directly
//     signInWithPopup(auth, googleProvider)
//
//   Option B: keep calling them as functions
//     signInWithPopup(auth, googleProvider())

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const facebookProvider = new FacebookAuthProvider();
facebookProvider.addScope("email");
facebookProvider.addScope("public_profile");

// Factory-style versions (Option B), if you'd rather keep
// register.tsx calling them as functions:
export function getGoogleProvider() {
  return googleProvider;
}

export function getFacebookProvider() {
  return facebookProvider;
}

// ---------------------------------------------
// Backend registration
// ---------------------------------------------

/**
 * Sends the newly created/authenticated user to your backend
 * so it can be persisted with a role (customer | vendor).
 * Throws if the backend call fails, so callers can handle
 * cleanup (e.g. deleting the Firebase user) if needed.
 */
export async function registerUserInBackend({ uid, email, name, role, vendor }) {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid,
      email,
      name,
      role,
      ...(vendor ? { vendor } : {}),
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Backend registration failed");
  }

  return result;
}

/**
 * Google popup sign-in + backend sync with the chosen role.
 * Use this from register.tsx instead of calling
 * signInWithPopup directly, so the role is always saved.
 */
export async function signInWithGoogleAndRegister(role) {
  const credential = await signInWithPopup(auth, googleProvider);

  const user = credential.user;

  await registerUserInBackend({
    uid: user.uid,
    email: user.email,
    name: user.displayName || "",
    role,
  });

  return user;
}

/**
 * Facebook popup sign-in + backend sync with the chosen role.
 */
export async function signInWithFacebookAndRegister(role) {
  const credential = await signInWithPopup(auth, facebookProvider);

  const user = credential.user;

  await registerUserInBackend({
    uid: user.uid,
    email: user.email,
    name: user.displayName || "",
    role,
  });

  return user;
}

// Compatibility helper for register.tsx
export function getFirebaseAuth() {
  return auth;
}

export default app;
