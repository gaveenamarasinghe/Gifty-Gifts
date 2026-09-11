import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PageHeader, Section } from "@/components/PageHeader";
import { getProduct, useShop } from "@/context/ShopContext";
import { currency } from "@/lib/data";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Basket — Gifty" },
      {
        name: "description",
        content: "Review your Gifty basket, add gift wrapping and apply coupons.",
      },
      { property: "og:title", content: "Your Basket — Gifty" },
      { property: "og:description", content: "Review your gifts before checkout." },
      { property: "og:url", content: "/cart" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/cart" }],
  }),
  component: Cart,
});

function Cart() {
  const {
    cart,
    setQty,
    removeFromCart,
    toggleGiftWrap,
    totals,
    applyCoupon,
    coupon,
    removeCoupon,
  } = useShop();
  const [code, setCode] = useState("");

  return (
    <>
      <PageHeader eyebrow="Almost there" title="Your basket" />
      <Section className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {cart.length === 0 && (
            <div className="rounded-3xl border border-dashed border-border p-16 text-center">
              <p className="text-5xl" aria-hidden>
                🛍️
              </p>
              <p className="mt-4 text-muted-foreground">Your basket is empty.</p>
              <Button asChild variant="hero" className="mt-6">
                <Link to="/shop">Start gifting</Link>
              </Button>
            </div>
          )}

          {cart.map((line) => {
            const p = getProduct(line.productId);
            if (!p) return null;
            return (
              <div
                key={line.productId}
                className="flex flex-wrap items-center gap-5 rounded-3xl border border-border bg-card p-5 shadow-soft"
              >
                <span
                  className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl gradient-soft text-4xl"
                  aria-hidden
                >
                  {p.emoji}
                </span>
                <div className="min-w-40 flex-1">
                  <Link
                    to="/product/$slug"
                    params={{ slug: p.slug }}
                    className="font-display text-lg font-semibold hover:text-primary"
                  >
                    {p.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">{currency(p.price)} each</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Checkbox
                      id={`wrap-${p.id}`}
                      checked={line.giftWrap}
                      onCheckedChange={() => toggleGiftWrap(p.id)}
                    />
                    <Label htmlFor={`wrap-${p.id}`} className="cursor-pointer text-xs font-normal">
                      Add luxury gift wrapping (+$6)
                    </Label>
                  </div>
                </div>
                <div className="flex items-center rounded-full border border-border">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQty(p.id, line.qty - 1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus />
                  </Button>
                  <span className="w-8 text-center text-sm font-semibold">{line.qty}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQty(p.id, line.qty + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus />
                  </Button>
                </div>
                <p className="w-20 text-right font-semibold">{currency(p.price * line.qty)}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromCart(p.id)}
                  aria-label={`Remove ${p.name}`}
                >
                  <Trash2 className="text-destructive" />
                </Button>
              </div>
            );
          })}
        </div>

        <aside className="h-fit rounded-3xl border border-border bg-card p-7 shadow-card lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-semibold">Order summary</h2>

          <div className="mt-5 flex gap-2">
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Coupon code"
              aria-label="Coupon code"
              className="rounded-full"
            />
            <Button variant="soft" onClick={() => applyCoupon(code)}>
              Apply
            </Button>
          </div>
          {coupon && (
            <button onClick={removeCoupon} className="mt-2 text-xs text-primary underline">
              Remove coupon {coupon}
            </button>
          )}

          <dl className="mt-6 space-y-3 text-sm">
            <Row label="Subtotal" value={currency(totals.subtotal)} />
            {totals.discount > 0 && (
              <Row label="Discount" value={`−${currency(totals.discount)}`} />
            )}
            {totals.wrap > 0 && <Row label="Gift wrapping" value={currency(totals.wrap)} />}
            <Row
              label="Shipping"
              value={totals.shipping === 0 ? "Free" : currency(totals.shipping)}
            />
            <Row label="Tax (5%)" value={currency(totals.tax)} />
            <div className="border-t border-border pt-3">
              <Row label="Total" value={currency(totals.total)} bold />
            </div>
          </dl>

          <Button
            asChild
            variant="hero"
            size="lg"
            className="mt-6 w-full"
            disabled={cart.length === 0}
          >
            <Link to="/checkout">Proceed to checkout</Link>
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Free express shipping over $120
          </p>
        </aside>
      </Section>
    </>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex justify-between">
      <dt className={bold ? "font-display text-lg font-semibold" : "text-muted-foreground"}>
        {label}
      </dt>
      <dd className={bold ? "font-display text-lg font-bold text-primary" : "font-medium"}>
        {value}
      </dd>
    </div>
  );
}
