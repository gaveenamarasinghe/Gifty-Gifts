import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/dashboard/settings")({
  component: Settings,
});

function Settings() {
  const { logout } = useAuth();
  const [prefs, setPrefs] = useState({ email: true, sms: false, offers: true });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">Settings</h1>
        <p className="mt-1 text-muted-foreground">Notifications, password and account.</p>
      </div>

      <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
        <h2 className="font-display text-xl font-semibold">Notifications</h2>
        <div className="mt-5 space-y-4">
          {(
            [
              ["email", "Email order updates"],
              ["sms", "SMS delivery alerts"],
              ["offers", "Occasional offers and new arrivals"],
            ] as const
          ).map(([key, label]) => (
            <div key={key} className="flex items-center justify-between">
              <Label htmlFor={key} className="font-normal">
                {label}
              </Label>
              <Switch
                id={key}
                checked={prefs[key]}
                onCheckedChange={(v) => setPrefs((p) => ({ ...p, [key]: v }))}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
        <h2 className="font-display text-xl font-semibold">Change password</h2>
        <form
          className="mt-5 grid gap-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Password updated");
          }}
        >
          <div>
            <Label className="mb-2 block">Current password</Label>
            <Input type="password" required />
          </div>
          <div>
            <Label className="mb-2 block">New password</Label>
            <Input type="password" required minLength={6} />
          </div>
          <Button type="submit" variant="hero" className="sm:col-span-2 sm:w-fit">
            Update password
          </Button>
        </form>
      </section>

      <section className="rounded-3xl border border-destructive/30 bg-card p-7 shadow-soft">
        <h2 className="font-display text-xl font-semibold">Danger zone</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Deleting your account removes your orders, addresses and wishlist permanently.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => logout()}>
            Sign out everywhere
          </Button>
          <Button
            variant="destructive"
            onClick={() => toast.error("Account deletion requires email confirmation")}
          >
            Delete account
          </Button>
        </div>
      </section>
    </div>
  );
}
