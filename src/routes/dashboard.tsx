import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Bell,
  CreditCard,
  Heart,
  LayoutDashboard,
  LogOut,
  MapPin,
  Package,
  Settings,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/PageHeader";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Your Dashboard — Gifty" },
      {
        name: "description",
        content: "Manage your Gifty orders, addresses, payments and profile.",
      },
      { property: "og:title", content: "Your Dashboard — Gifty" },
      { property: "og:description", content: "Orders, addresses and profile in one place." },
      { property: "og:url", content: "/dashboard" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardLayout,
});

const links = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/orders", label: "My orders", icon: Package },
  { to: "/dashboard/addresses", label: "Addresses", icon: MapPin },
  { to: "/dashboard/payments", label: "Payment history", icon: CreditCard },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { to: "/dashboard/profile", label: "Profile", icon: User },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

function DashboardLayout() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  // Client-side route guard: unauthenticated visitors go to /login.
  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [loading, user, navigate]);

  if (loading || !user) {
    return (
      <Section>
        <p className="text-muted-foreground">Loading your dashboard…</p>
      </Section>
    );
  }

  return (
    <Section className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="h-fit rounded-3xl border border-border bg-card p-5 shadow-soft lg:sticky lg:top-24">
        <div className="flex items-center gap-3 rounded-2xl gradient-soft p-4">
          <span className="grid h-11 w-11 place-items-center rounded-full gradient-primary text-lg font-bold text-primary-foreground">
            {(user.name ?? user.email ?? "G").charAt(0).toUpperCase()}
          </span>
          <div className="min-w-0">
            <p className="truncate font-semibold">{user.name ?? "Gifty customer"}</p>
            <p className="truncate text-xs text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <nav className="mt-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-smooth hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
            >
              <l.icon className="h-4 w-4" /> {l.label}
            </Link>
          ))}
          <Link
            to="/wishlist"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-smooth hover:bg-accent hover:text-accent-foreground"
          >
            <Heart className="h-4 w-4" /> Wishlist
          </Link>
        </nav>

        <Button
          variant="outline"
          className="mt-4 w-full"
          onClick={async () => {
            await logout();
            navigate({ to: "/" });
          }}
        >
          <LogOut /> Sign out
        </Button>
      </aside>

      <div>
        <Outlet />
      </div>
    </Section>
  );
}
