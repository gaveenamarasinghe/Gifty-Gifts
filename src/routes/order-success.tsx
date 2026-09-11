import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/PageHeader";
import { useShop } from "@/context/ShopContext";
import { currency } from "@/lib/data";

export const Route = createFileRoute("/order-success")({
  validateSearch: (s: Record<string, unknown>) => ({ id: typeof s.id === "string" ? s.id : "" }),
  head: () => ({
    meta: [
      { title: "Order Confirmed — Gifty" },
      { name: "description", content: "Your Gifty order is confirmed and on its way." },
      { property: "og:title", content: "Order Confirmed — Gifty" },
      { property: "og:description", content: "Thank you for gifting with Gifty." },
      { property: "og:url", content: "/order-success" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/order-success" }],
  }),
  component: OrderSuccess,
});

function OrderSuccess() {
  const { id } = Route.useSearch();
  const { orders } = useShop();
  const order = orders.find((o) => o.id === id);

  return (
    <Section className="!py-24">
      <div className="mx-auto max-w-xl rounded-[2.5rem] border border-border bg-card p-12 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-6 font-display text-4xl font-bold">Order confirmed</h1>
        <p className="mt-3 text-muted-foreground">
          A confirmation email is on its way. We'll text you when your gift is out for delivery.
        </p>
        {order && (
          <dl className="mt-8 space-y-2 rounded-3xl gradient-soft p-6 text-left text-sm">
            <Row k="Order number" v={order.id} />
            <Row k="Total paid" v={currency(order.total)} />
            <Row k="Delivery" v={`${order.deliveryDate || "Next available"} · ${order.slot}`} />
            <Row k="Address" v={order.address} />
          </dl>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero">
            <Link to="/track-order">Track my order</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/shop">Keep shopping</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right font-medium">{v}</dd>
    </div>
  );
}
