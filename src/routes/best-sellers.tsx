import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductCard";
import { byTag } from "@/lib/data";

export const Route = createFileRoute("/best-sellers")({
  head: () => ({
    meta: [
      { title: "Best Sellers — Gifty" },
      {
        name: "description",
        content: "The most loved Gifty gifts, ranked by thousands of reviews.",
      },
      { property: "og:title", content: "Best Sellers — Gifty" },
      { property: "og:description", content: "Top-rated hampers, bouquets and keepsakes." },
      { property: "og:url", content: "/best-sellers" },
    ],
    links: [{ rel: "canonical", href: "/best-sellers" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Loved most"
        title="Best sellers"
        subtitle="Ranked by thousands of gifters."
      />
      <Section>
        <ProductGrid items={byTag("bestseller")} />
      </Section>
    </>
  ),
});
