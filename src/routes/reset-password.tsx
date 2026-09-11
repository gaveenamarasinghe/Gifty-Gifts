import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthShell } from "@/components/AuthShell";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Choose a new password — Gifty" },
      { name: "description", content: "Set a new password for your Gifty account." },
      { property: "og:title", content: "Choose a new password — Gifty" },
      { property: "og:description", content: "Set a new password for your Gifty account." },
      { property: "og:url", content: "/reset-password" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/reset-password" }],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [code, setCode] = useState<string | null>(null);

  // Firebase appends ?oobCode=... to the reset link.
  useEffect(() => {
    const oob = new URLSearchParams(window.location.search).get("oobCode");
    setCode(oob);
    const auth = getFirebaseAuth();
    if (oob && auth)
      verifyPasswordResetCode(auth, oob).catch(() => toast.error("This reset link has expired"));
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 6) return toast.error("Password must be at least 6 characters");
    if (password !== confirm) return toast.error("Passwords don't match");
    const auth = getFirebaseAuth();
    if (isFirebaseConfigured && auth && code) {
      try {
        await confirmPasswordReset(auth, code, password);
      } catch {
        return toast.error("Could not reset password — request a new link");
      }
    }
    toast.success("Password updated — please sign in");
    navigate({ to: "/login" });
  }

  return (
    <AuthShell title="New password" subtitle="Choose something you haven't used before.">
      <form className="space-y-4" onSubmit={submit}>
        <div>
          <Label className="mb-2 block">New password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Label className="mb-2 block">Confirm password</Label>
          <Input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>
        <Button type="submit" variant="hero" size="lg" className="w-full">
          Update password
        </Button>
      </form>
    </AuthShell>
  );
}
