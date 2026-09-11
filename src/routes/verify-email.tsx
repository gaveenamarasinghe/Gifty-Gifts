import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { MailCheck, CheckCircle } from "lucide-react";
import { AuthShell } from "@/components/AuthShell";

export const Route = createFileRoute("/verify-email")({
  component: VerifyEmail,
});

const REDIRECT_DELAY_MS = 2500;

function VerifyEmail() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/verify-email" });
  const isVerified = search.status === "success";

  useEffect(() => {
    if (!isVerified) return;

    const timeout = setTimeout(() => {
      navigate({ to: "/" });
    }, REDIRECT_DELAY_MS);

    return () => clearTimeout(timeout);
  }, [isVerified, navigate]);

  return (
    <AuthShell
      title={isVerified ? "Email verified 🎉" : "Check your inbox"}
      subtitle={
        isVerified ? "Your Gifty account is now active." : "We've sent you a verification link."
      }
      footer={
        <Link to="/" className="font-semibold text-primary hover:underline">
          Go home
        </Link>
      }
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full transition-colors ${
            isVerified ? "bg-green-500/10" : "bg-primary/10"
          }`}
        >
          {isVerified ? (
            <CheckCircle className="h-9 w-9 text-green-500" />
          ) : (
            <MailCheck className="h-9 w-9 text-primary" />
          )}
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          {isVerified
            ? "Redirecting you to Gifty home..."
            : "Click the verification link in your email to activate your account."}
        </p>
      </div>
    </AuthShell>
  );
}
