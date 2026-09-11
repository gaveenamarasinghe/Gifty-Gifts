import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/dashboard/profile")({
  component: Profile,
});

function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name ?? "");
  const [phone, setPhone] = useState("+1 555 0100");

  return (
    <div>
      <h1 className="font-display text-3xl font-bold">Profile</h1>
      <p className="mt-1 text-muted-foreground">How we address you and where we reach you.</p>

      <form
        className="mt-8 rounded-3xl border border-border bg-card p-7 shadow-soft"
        onSubmit={(e) => {
          e.preventDefault();
          // PUT /api/users/:id on the Express backend updates the Firestore profile.
          toast.success("Profile updated");
        }}
      >
        <div className="flex items-center gap-4">
          <span className="grid h-16 w-16 place-items-center rounded-full gradient-primary text-2xl font-bold text-primary-foreground">
            {(name || user?.email || "G").charAt(0).toUpperCase()}
          </span>
          <Button
            type="button"
            variant="outline"
            onClick={() => toast.message("Avatar upload goes to Cloudinary via /api/upload")}
          >
            Change avatar
          </Button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <Label className="mb-2 block">Full name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label className="mb-2 block">Email</Label>
            <Input value={user?.email ?? ""} readOnly className="bg-muted" />
          </div>
          <div>
            <Label className="mb-2 block">Phone</Label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <Label className="mb-2 block">Email verified</Label>
            <Input value={user?.emailVerified ? "Yes" : "Pending"} readOnly className="bg-muted" />
          </div>
        </div>

        <Button type="submit" variant="hero" className="mt-6">
          Save changes
        </Button>
      </form>
    </div>
  );
}
