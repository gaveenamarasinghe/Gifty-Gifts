import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useShop } from "@/context/ShopContext";
import { currency } from "@/lib/data";

export const Route = createFileRoute("/dashboard/orders")({
  component: Orders,
});

function Orders() {
  const { orders, cancelOrder } = useShop();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold">My orders</h1>
      <p className="mt-1 text-muted-foreground">Every gift you've sent with Gifty.</p>

      {orders.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-border p-14 text-center">
          <p className="text-muted-foreground">No orders yet.</p>
          <Button asChild variant="hero" className="mt-6">
            <Link to="/shop">Send your first gift</Link>
          </Button>
        </div>
      ) : (
        <ul className="mt-8 space-y-4">
          {orders.map((o) => (
            <li key={o.id} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold">{o.id}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(o.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <Badge
                  variant={o.status === "Cancelled" ? "destructive" : "secondary"}
                  className="rounded-full"
                >
                  {o.status}
                </Badge>
                <p className="font-semibold text-primary">{currency(o.total)}</p>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <Link to="/dashboard/orders/$id" params={{ id: o.id }}>
                      Details
                    </Link>
                  </Button>
                  {o.status !== "Cancelled" && o.status !== "Delivered" && (
                    <Button size="sm" variant="ghost" onClick={() => cancelOrder(o.id)}>
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
