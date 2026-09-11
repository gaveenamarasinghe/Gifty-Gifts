import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Package, Truck, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader, Section } from "@/components/PageHeader";
import { useShop } from "@/context/ShopContext";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/track-order")({
  head: () => ({
    meta: [
      { title: "Track Your Order — Gifty" },
      {
        name: "description",
        content: "Enter your Gifty order number to see live delivery status.",
      },
      { property: "og:title", content: "Track Your Order — Gifty" },
      { property: "og:description", content: "Live tracking for every Gifty delivery." },
      { property: "og:url", content: "/track-order" },
    ],
    links: [{ rel: "canonical", href: "/track-order" }],
  }),
  component: TrackOrder,
});

const steps = [
  { key: "Processing", icon: Check, label: "Order confirmed" },
  { key: "Packed", icon: Package, label: "Packed in studio" },
  { key: "Out for delivery", icon: Truck, label: "Out for delivery" },
  { key: "Delivered", icon: Home, label: "Delivered" },
];

function TrackOrder() {
  const { orders } = useShop();
  const [id, setId] = useState("");
  const [searched, setSearched] = useState(false);
  const order = orders.find((o) => o.id.toLowerCase() === id.trim().toLowerCase());
  const activeIndex = order
    ? Math.max(
        0,
        steps.findIndex((s) => s.key === order.status),
      )
    : 0;

  return (
    <>
      <PageHeader
        eyebrow="Where's my gift?"
        title="Track your order"
        subtitle="Enter the order number from your confirmation email."
      />
      <Section>
        <form
          className="mx-auto flex max-w-lg gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            setSearched(true);
          }}
        >
          <Input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="GFT-XXXXXX"
            aria-label="Order number"
            className="h-12 rounded-full"
          />
          <Button type="submit" variant="hero" size="lg">
            Track
          </Button>
        </form>

        {searched && !order && (
          <p className="mt-8 text-center text-muted-foreground">
            No order found with that number. Check your confirmation email.
          </p>
        )}

        {order && (
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-card">
            <p className="text-sm text-muted-foreground">Order {order.id}</p>
            <h2 className="font-display text-2xl font-bold">{order.status}</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <li key={s.key} className="flex items-center gap-4">
                  <span
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-full",
                      i <= activeIndex
                        ? "gradient-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className={i <= activeIndex ? "font-semibold" : "text-muted-foreground"}>
                    {s.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </Section>
    </>
  );
}
