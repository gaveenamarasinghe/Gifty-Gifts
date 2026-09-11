import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { getProduct, useShop } from "@/context/ShopContext";
import { currency } from "@/lib/data";

export const Route = createFileRoute("/dashboard/orders/$id")({
  component: OrderDetails,
});

function OrderDetails() {
  const { id } = Route.useParams();
  const { orders } = useShop();
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div>
        <h1 className="font-display text-3xl font-bold">Order not found</h1>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/dashboard/orders">Back to orders</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Link to="/dashboard/orders" className="text-sm text-primary hover:underline">
        ← All orders
      </Link>
      <h1 className="mt-4 font-display text-3xl font-bold">Order {order.id}</h1>
      <p className="mt-1 text-muted-foreground">{order.status}</p>

      <div className="mt-8 rounded-3xl border border-border bg-card p-7 shadow-soft">
        <h2 className="font-display text-lg font-semibold">Items</h2>
        <ul className="mt-4 space-y-3">
          {order.lines.map((l) => {
            const p = getProduct(l.productId);
            if (!p) return null;
            return (
              <li key={l.productId} className="flex items-center gap-3 text-sm">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl gradient-soft text-xl"
                  aria-hidden
                >
                  {p.emoji}
                </span>
                <span className="flex-1">
                  {p.name} × {l.qty}{" "}
                  {l.giftWrap && <em className="text-primary">· gift wrapped</em>}
                </span>
                <span className="font-medium">{currency(p.price * l.qty)}</span>
              </li>
            );
          })}
        </ul>
        <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
          <Row k="Delivery" v={`${order.deliveryDate || "Next available"} · ${order.slot}`} />
          <Row k="Address" v={order.address} />
          <Row k="Payment" v={order.payment} />
          {order.message && <Row k="Gift note" v={order.message} />}
          <Row k="Total paid" v={currency(order.total)} />
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="hero" onClick={() => toast.success("Invoice PDF emailed to you")}>
            Download invoice
          </Button>
          <Button asChild variant="outline">
            <Link to="/track-order">Track this order</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-6">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right font-medium">{v}</dd>
    </div>
  );
}
