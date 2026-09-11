import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { AuthShell } from "@/components/AuthShell";

import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      {
        title: "Sign in — Gifty",
      },

      {
        name: "description",
        content: "Sign in to your Gifty account to track orders and manage your wishlist.",
      },

      {
        property: "og:title",
        content: "Sign in — Gifty",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/login",
      },
    ],
  }),

  component: Login,
});

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),

  password: z.string().min(6, "Password must be at least 6 characters").max(72),
});

function Login() {
  const navigate = useNavigate();

  const {
    login,

    loginWithGoogle,

    loginWithFacebook,

    demoMode,
  } = useAuth();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),

    defaultValues: {
      email: "",

      password: "",
    },
  });

  async function run(action: () => Promise<void>) {
    try {
      await action();

      toast.success("Welcome back to Gifty");

      navigate({
        to: "/dashboard",
      });
    } catch (error: Error) {
      let message = "Could not sign in";

      switch ((error as { code?: string }).code) {
        case "auth/user-not-found":
          message = "No account found with this email";

          break;

        case "auth/wrong-password":
          message = "Incorrect password";

          break;

        case "auth/invalid-credential":
          message = "Invalid email or password";

          break;

        case "auth/popup-closed-by-user":
          message = "Login popup closed";

          break;

        case "auth/popup-blocked":
          message = "Popup blocked by browser";

          break;

        case "auth/network-request-failed":
          message = "Network error. Try again.";

          break;

        default:
          message = error.message || message;
      }

      toast.error(message);
    }
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to track orders, save gifts and check out faster."
      footer={
        <>
          New to Gifty?{" "}
          <Link to="/register" className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form
        noValidate
        className="space-y-4"
        onSubmit={form.handleSubmit((values) =>
          run(() =>
            login(
              values.email,

              values.password,
            ),
          ),
        )}
      >
        <div>
          <Label className="mb-2 block">Email</Label>

          <Input type="email" placeholder="you@example.com" {...form.register("email")} />

          {form.formState.errors.email && (
            <p className="mt-1 text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label>Password</Label>

            <Link to="/forgot-password" className="text-xs text-primary hover:underline">
              Forgot?
            </Link>
          </div>

          <Input type="password" placeholder="••••••••" {...form.register("password")} />

          {form.formState.errors.password && (
            <p className="mt-1 text-xs text-destructive">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          Sign in
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        or continue with
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button variant="outline" onClick={() => run(loginWithGoogle)}>
          Google
        </Button>

        <Button variant="outline" onClick={() => run(loginWithFacebook)}>
          Facebook
        </Button>
      </div>

      {demoMode && (
        <p className="mt-6 rounded-2xl bg-accent p-3 text-center text-xs text-accent-foreground">
          Demo mode enabled. Firebase keys are not configured.
        </p>
      )}
    </AuthShell>
  );
}
