import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Package, Wallet } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useShop } from "@/context/ShopContext";
import { currency, products } from "@/lib/data";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

const spend = [
  { month: "Feb", total: 120 },
  { month: "Mar", total: 210 },
  { month: "Apr", total: 90 },
  { month: "May", total: 305 },
  { month: "Jun", total: 180 },
  { month: "Jul", total: 260 },
];

function DashboardHome() {
  const { user } = useAuth();
  const { orders, wishlist, recent } = useShop();
  const spent = orders.reduce((s, o) => s + o.total, 0);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-display text-3xl font-bold">
          Hello, {user?.name?.split(" ")[0] ?? "gifter"} 👋
        </h1>
        <p className="mt-1 text-muted-foreground">Here's what's happening with your gifts.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat icon={Package} label="Orders placed" value={String(orders.length)} />
        <Stat icon={Wallet} label="Total spent" value={currency(spent)} />
        <Stat icon={Heart} label="Wishlist items" value={String(wishlist.length)} />
      </div>

      <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
        <h2 className="font-display text-xl font-semibold">Gifting over time</h2>
        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={spend}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  border: "1px solid var(--border)",
                  background: "var(--card)",
                }}
              />
              <Bar dataKey="total" fill="var(--primary)" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold">Recent orders</h2>
          <Button asChild variant="outline" size="sm">
            <Link to="/dashboard/orders">View all</Link>
          </Button>
        </div>
        {orders.length === 0 ? (
          <p className="mt-5 text-sm text-muted-foreground">
            No orders yet — your first gift awaits.
          </p>
        ) : (
          <ul className="mt-5 space-y-3">
            {orders.slice(0, 3).map((o) => (
              <li
                key={o.id}
                className="flex items-center justify-between rounded-2xl gradient-soft p-4 text-sm"
              >
                <span className="font-medium">{o.id}</span>
                <span className="text-muted-foreground">{o.status}</span>
                <span className="font-semibold text-primary">{currency(o.total)}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {recent.length > 0 && (
        <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
          <h2 className="font-display text-xl font-semibold">Recently viewed</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {recent.map((id) => {
              const p = products.find((x) => x.id === id);
              if (!p) return null;
              return (
                <Link
                  key={id}
                  to="/product/$slug"
                  params={{ slug: p.slug }}
                  className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm transition-smooth hover:border-primary"
                >
                  <span aria-hidden>{p.emoji}</span> {p.name}
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Package;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <Icon className="h-5 w-5 text-primary" />
      <p className="mt-4 font-display text-3xl font-bold">{value}</p>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}
