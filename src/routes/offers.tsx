import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductCard";
import { byTag, coupons } from "@/lib/data";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Coupons — Gifty" },
      {
        name: "description",
        content: "Current Gifty offers, discount codes and seasonal savings.",
      },
      { property: "og:title", content: "Offers & Coupons — Gifty" },
      { property: "og:description", content: "Save on luxury gifts with live Gifty coupon codes." },
      { property: "og:url", content: "/offers" },
    ],
    links: [{ rel: "canonical", href: "/offers" }],
  }),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHeader
        eyebrow="Save more"
        title="Offers & coupons"
        subtitle="Live codes you can use at checkout today."
      />
      <Section className="!pb-8">
        <div className="grid gap-5 md:grid-cols-3">
          {coupons.map((c) => (
            <div
              key={c.code}
              className="rounded-3xl border border-dashed border-primary/40 bg-card p-8 text-center shadow-soft"
            >
              <p className="font-display text-3xl font-bold text-gradient">{c.code}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.label}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="!pt-0">
        <h2 className="mb-8 font-display text-3xl font-bold">Gifts on offer</h2>
        <ProductGrid items={byTag("offer")} />
      </Section>
    </>
  );
}
