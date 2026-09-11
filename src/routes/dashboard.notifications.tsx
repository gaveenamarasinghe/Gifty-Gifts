import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Gift, Truck, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard/notifications")({
  component: Notifications,
});

const seed = [
  {
    id: "n1",
    icon: Truck,
    title: "Your order is out for delivery",
    time: "12 minutes ago",
    unread: true,
  },
  {
    id: "n2",
    icon: Tag,
    title: "GIFTY10 — 10% off this weekend only",
    time: "Yesterday",
    unread: true,
  },
  {
    id: "n3",
    icon: Gift,
    title: "Your wishlist item dropped in price",
    time: "3 days ago",
    unread: false,
  },
  {
    id: "n4",
    icon: Bell,
    title: "Delivery confirmed for 14 July, 11:00–13:00",
    time: "Last week",
    unread: false,
  },
];

function Notifications() {
  const [items, setItems] = useState(seed);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">Notifications</h1>
          <p className="mt-1 text-muted-foreground">Delivery updates and offers.</p>
        </div>
        <Button
          variant="outline"
          onClick={() => setItems((p) => p.map((n) => ({ ...n, unread: false })))}
        >
          Mark all read
        </Button>
      </div>

      <ul className="mt-8 space-y-3">
        {items.map((n) => (
          <li
            key={n.id}
            className={cn(
              "flex items-center gap-4 rounded-3xl border border-border p-5 shadow-soft transition-smooth",
              n.unread ? "bg-accent" : "bg-card",
            )}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full gradient-primary text-primary-foreground">
              <n.icon className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold">{n.title}</p>
              <p className="text-xs text-muted-foreground">{n.time}</p>
            </div>
            {n.unread && <span className="h-2 w-2 rounded-full bg-primary" aria-label="Unread" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
