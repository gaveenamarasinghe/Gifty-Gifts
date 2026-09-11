import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { useShop } from "@/context/ShopContext";
import { currency } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/dashboard/payments")({
  component: Payments,
});

function Payments() {
  const { orders } = useShop();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold">Payment history</h1>
      <p className="mt-1 text-muted-foreground">Every transaction on your Gifty account.</p>

      <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">
                  No payments yet.
                </TableCell>
              </TableRow>
            )}
            {orders.map((o) => (
              <TableRow key={o.id}>
                <TableCell className="font-medium">{o.id}</TableCell>
                <TableCell>{new Date(o.date).toLocaleDateString("en-GB")}</TableCell>
                <TableCell className="capitalize">{o.payment}</TableCell>
                <TableCell>
                  <Badge
                    variant={o.status === "Cancelled" ? "destructive" : "secondary"}
                    className="rounded-full"
                  >
                    {o.status === "Cancelled" ? "Refunded" : "Paid"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold text-primary">
                  {currency(o.total)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
