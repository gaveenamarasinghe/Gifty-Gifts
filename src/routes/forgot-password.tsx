import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthShell } from "@/components/AuthShell";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset your Gifty password" },
      {
        name: "description",
        content: "Send yourself a secure password reset link for your Gifty account.",
      },
      { property: "og:title", content: "Reset your Gifty password" },
      { property: "og:description", content: "We'll email you a secure reset link." },
      { property: "og:url", content: "/forgot-password" },
    ],
    links: [{ rel: "canonical", href: "/forgot-password" }],
  }),
  component: ForgotPassword,
});

function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <AuthShell
      title="Forgot password"
      subtitle="We'll email you a secure link to choose a new one."
      footer={
        <Link to="/login" className="font-semibold text-primary hover:underline">
          Back to sign in
        </Link>
      }
    >
      {sent ? (
        <p className="rounded-2xl bg-accent p-4 text-sm text-accent-foreground">
          If an account exists for {email}, a reset link is on its way.
        </p>
      ) : (
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await forgotPassword(email);
            } finally {
              setSent(true);
              toast.success("Reset link sent");
            }
          }}
        >
          <div>
            <Label className="mb-2 block">Email</Label>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">
            Send reset link
          </Button>
        </form>
      )}
    </AuthShell>
  );
}
