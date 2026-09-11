import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthShell } from "@/components/AuthShell";
import { cn } from "@/lib/utils";

import { auth, googleProvider, facebookProvider } from "@/lib/firebase";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  deleteUser,
  sendEmailVerification,
} from "firebase/auth";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const Route = createFileRoute("/register")({
  component: Register,
});

/* =========================================================
   VALIDATION
========================================================= */

const accountSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),

  email: z.string().email("Enter a valid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(72, "Password must be less than 72 characters"),

  role: z.enum(["customer", "vendor"], {
    required_error: "Please select a role",
  }),
});

const vendorSchema = z.object({
  shopName: z
    .string()
    .min(2, "Shop name must be at least 2 characters")
    .max(100, "Shop name must be less than 100 characters"),

  shopDescription: z
    .string()
    .min(10, "Shop description must be at least 10 characters")
    .max(500, "Shop description must be less than 500 characters"),

  address: z.string().min(5, "Please enter your shop address").max(250, "Address is too long"),

  openHours: z
    .string()
    .min(3, "Please enter your opening hours")
    .max(100, "Opening hours are too long"),

  phone: z.string().min(7, "Please enter a valid phone number").max(20, "Phone number is too long"),

  website: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^https?:\/\/.+/.test(value), "Use a valid website URL"),
});

type AccountFormData = z.infer<typeof accountSchema>;
type VendorFormData = z.infer<typeof vendorSchema>;

const ROLE_OPTIONS: {
  value: "customer" | "vendor";
  label: string;
  description: string;
}[] = [
  {
    value: "customer",
    label: "Customer",
    description: "Browse and buy gifts",
  },
  {
    value: "vendor",
    label: "Vendor",
    description: "Sell products on Gifty",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function Register() {
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2>(1);

  /* -------------------------------------------------------
     ACCOUNT FORM
  ------------------------------------------------------- */

  const accountForm = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "customer",
    },
  });

  /* -------------------------------------------------------
     VENDOR FORM
  ------------------------------------------------------- */

  const vendorForm = useForm<VendorFormData>({
    resolver: zodResolver(vendorSchema),
    defaultValues: {
      shopName: "",
      shopDescription: "",
      address: "",
      openHours: "",
      phone: "",
      website: "",
    },
  });

  const selectedRole = accountForm.watch("role");

  /* =========================================================
     NEXT BUTTON
  ========================================================= */

  async function handleNext() {
    const isValid = await accountForm.trigger(["name", "email", "password", "role"]);

    if (!isValid) return;

    if (selectedRole === "vendor") {
      setStep(2);
      return;
    }

    await registerCustomer();
  }

  /* =========================================================
     CUSTOMER REGISTRATION
  ========================================================= */

  async function registerCustomer() {
    const data = accountForm.getValues();

    let firebaseUser = null;

    try {
      const credential = await createUserWithEmailAndPassword(auth, data.email, data.password);

      firebaseUser = credential.user;

      await updateProfile(credential.user, {
        displayName: data.name,
      });

      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: credential.user.uid,
          email: data.email,
          name: data.name,
          role: "customer",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Backend registration failed");
      }

      try {
        await sendEmailVerification(credential.user);
      } catch (verificationError) {
        console.error("Firebase verification email failed:", verificationError);
      }

      toast.success("Account created! Please verify your email.");

      navigate({
        to: "/verify-email",
      });
    } catch (error: Error) {
      if (firebaseUser) {
        await deleteUser(firebaseUser).catch(() => {});
      }

      throw error;
    }
  }

  /* =========================================================
     VENDOR REGISTRATION
  ========================================================= */

  async function registerVendor(data: VendorFormData) {
    const accountData = accountForm.getValues();

    let firebaseUser = null;

    try {
      /* Create Firebase account */

      const credential = await createUserWithEmailAndPassword(
        auth,
        accountData.email,
        accountData.password,
      );

      firebaseUser = credential.user;

      /* Update Firebase profile */

      await updateProfile(credential.user, {
        displayName: accountData.name,
      });

      /* Send everything to backend */

      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          uid: credential.user.uid,

          email: accountData.email,

          name: accountData.name,

          role: "vendor",

          vendor: {
            shopName: data.shopName,
            shopDescription: data.shopDescription,
            address: data.address,
            openHours: data.openHours,
            phone: data.phone,
            website: data.website,
            name: data.shopName,
            location: data.address,
            hours: data.openHours,
            email: accountData.email,
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Vendor registration failed");
      }

      if (result.token) {
        localStorage.setItem("gifty_token", result.token);
      }

      if (result.user) {
        localStorage.setItem("gifty_user", JSON.stringify(result.user));
      }

      /* Email verification */

      try {
        await sendEmailVerification(credential.user);
      } catch (verificationError) {
        console.error("Firebase verification email failed:", verificationError);
      }

      toast.success("Vendor account created successfully.");

      navigate({
        to: "/vendor",
      });
    } catch (error: Error) {
      /* Delete Firebase user if backend fails */

      if (firebaseUser) {
        await deleteUser(firebaseUser).catch(() => {});
      }

      throw error;
    }
  }

  /* =========================================================
     GOOGLE
  ========================================================= */

  async function registerGoogle() {
    await signInWithPopup(auth, googleProvider());

    toast.success("Google registration successful");

    navigate({
      to: "/dashboard",
    });
  }

  /* =========================================================
     FACEBOOK
  ========================================================= */

  async function registerFacebook() {
    await signInWithPopup(auth, facebookProvider());

    toast.success("Facebook registration successful");

    navigate({
      to: "/dashboard",
    });
  }

  /* =========================================================
     ERROR HANDLER
  ========================================================= */

  async function run(callback: () => Promise<void>) {
    try {
      await callback();
    } catch (error: Error) {
      let message = "Registration failed";

      switch ((error as { code?: string }).code) {
        case "auth/email-already-in-use":
          message = "This email already has an account";
          break;

        case "auth/invalid-email":
          message = "Invalid email address";
          break;

        case "auth/weak-password":
          message = "Password is too weak";
          break;

        case "auth/popup-closed-by-user":
          message = "Popup closed";
          break;

        default:
          message = error.message || message;
      }

      toast.error(message);
    }
  }

  /* =========================================================
     STEP 2 - VENDOR DETAILS
  ========================================================= */

  if (step === 2 && selectedRole === "vendor") {
    return (
      <AuthShell
        title="Set up your shop"
        subtitle="Tell us about your shop so customers can discover your products."
        footer={
          <>
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Sign in
            </Link>
          </>
        }
      >
        <form
          className="space-y-4"
          noValidate
          onSubmit={vendorForm.handleSubmit((data) => run(() => registerVendor(data)))}
        >
          {/* Progress */}

          <div className="mb-6 flex items-center gap-2">
            <div className="h-1 flex-1 rounded-full bg-primary" />
            <div className="h-1 flex-1 rounded-full bg-primary" />
          </div>

          <div className="mb-5">
            <p className="text-xs font-medium text-muted-foreground">STEP 2 OF 2</p>

            <h3 className="mt-1 text-sm font-semibold">Shop Information</h3>
          </div>

          {/* Shop Name */}

          <div>
            <Label>Shop Name</Label>

            <Input placeholder="Gifty Creations" {...vendorForm.register("shopName")} />

            {vendorForm.formState.errors.shopName && (
              <p className="mt-1 text-xs text-destructive">
                {vendorForm.formState.errors.shopName.message}
              </p>
            )}
          </div>

          {/* Shop Description */}

          <div>
            <Label>Shop Description</Label>

            <textarea
              placeholder="Tell customers about your shop and products..."
              rows={4}
              className={cn(
                "flex w-full rounded-md border border-input",
                "bg-background px-3 py-2 text-sm",
                "ring-offset-background",
                "placeholder:text-muted-foreground",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-ring",
              )}
              {...vendorForm.register("shopDescription")}
            />

            {vendorForm.formState.errors.shopDescription && (
              <p className="mt-1 text-xs text-destructive">
                {vendorForm.formState.errors.shopDescription.message}
              </p>
            )}
          </div>

          {/* Address */}

          <div>
            <Label>Shop Address</Label>

            <Input placeholder="123 Main Street, Colombo" {...vendorForm.register("address")} />

            {vendorForm.formState.errors.address && (
              <p className="mt-1 text-xs text-destructive">
                {vendorForm.formState.errors.address.message}
              </p>
            )}
          </div>

          {/* Phone */}

          <div>
            <Label>Contact Number</Label>

            <Input type="tel" placeholder="+94 77 123 4567" {...vendorForm.register("phone")} />

            {vendorForm.formState.errors.phone && (
              <p className="mt-1 text-xs text-destructive">
                {vendorForm.formState.errors.phone.message}
              </p>
            )}
          </div>

          {/* Opening Hours */}

          <div>
            <Label>Opening Hours</Label>

            <Input
              placeholder="Mon - Sat: 9:00 AM - 6:00 PM"
              {...vendorForm.register("openHours")}
            />

            {vendorForm.formState.errors.openHours && (
              <p className="mt-1 text-xs text-destructive">
                {vendorForm.formState.errors.openHours.message}
              </p>
            )}
          </div>

          {/* Website */}

          <div>
            <Label>Website (optional)</Label>

            <Input
              type="url"
              placeholder="https://yourshop.com"
              {...vendorForm.register("website")}
            />

            {vendorForm.formState.errors.website && (
              <p className="mt-1 text-xs text-destructive">
                {vendorForm.formState.errors.website.message}
              </p>
            )}
          </div>

          {/* Buttons */}

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(1)}
              disabled={vendorForm.formState.isSubmitting}
            >
              Back
            </Button>

            <Button type="submit" disabled={vendorForm.formState.isSubmitting}>
              {vendorForm.formState.isSubmitting ? "Creating..." : "Create Vendor Account"}
            </Button>
          </div>
        </form>
      </AuthShell>
    );
  }

  /* =========================================================
     STEP 1 - ACCOUNT DETAILS
  ========================================================= */

  return (
    <AuthShell
      title="Create your account"
      subtitle="Join Gifty and manage gifts, orders and wishlist."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form className="space-y-4" noValidate onSubmit={accountForm.handleSubmit(handleNext)}>
        {/* Progress */}

        {selectedRole === "vendor" && (
          <div className="mb-6 flex items-center gap-2">
            <div className="h-1 flex-1 rounded-full bg-primary" />
            <div className="h-1 flex-1 rounded-full bg-muted" />
          </div>
        )}

        {/* Role */}

        <div>
          <Label>I want to register as</Label>

          <div className="mt-2 grid grid-cols-2 gap-3">
            {ROLE_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={cn(
                  "cursor-pointer rounded-lg border p-3 text-sm transition-colors",
                  selectedRole === option.value
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border hover:border-primary/50",
                )}
              >
                <input
                  type="radio"
                  value={option.value}
                  className="sr-only"
                  {...accountForm.register("role")}
                />

                <span className="block font-semibold">{option.label}</span>

                <span className="block text-xs text-muted-foreground">{option.description}</span>
              </label>
            ))}
          </div>

          {accountForm.formState.errors.role && (
            <p className="mt-1 text-xs text-destructive">
              {accountForm.formState.errors.role.message}
            </p>
          )}
        </div>

        {/* Full Name */}

        <div>
          <Label>Full Name</Label>

          <Input placeholder="John Smith" {...accountForm.register("name")} />

          {accountForm.formState.errors.name && (
            <p className="mt-1 text-xs text-destructive">
              {accountForm.formState.errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <Label>Email</Label>

          <Input type="email" placeholder="you@example.com" {...accountForm.register("email")} />

          {accountForm.formState.errors.email && (
            <p className="mt-1 text-xs text-destructive">
              {accountForm.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}

        <div>
          <Label>Password</Label>

          <Input type="password" placeholder="••••••••" {...accountForm.register("password")} />

          {accountForm.formState.errors.password && (
            <p className="mt-1 text-xs text-destructive">
              {accountForm.formState.errors.password.message}
            </p>
          )}
        </div>

        {/* Main Action */}

        <Button type="submit" className="w-full" disabled={accountForm.formState.isSubmitting}>
          {accountForm.formState.isSubmitting
            ? "Please wait..."
            : selectedRole === "vendor"
              ? "Next"
              : "Create Account"}
        </Button>
      </form>

      {/* Social Registration */}

      <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        or continue with
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button type="button" variant="outline" onClick={() => run(registerGoogle)}>
          Google
        </Button>

        <Button type="button" variant="outline" onClick={() => run(registerFacebook)}>
          Facebook
        </Button>
      </div>
    </AuthShell>
  );
}
