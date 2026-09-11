import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductCard";
import { byTag } from "@/lib/data";

export const Route = createFileRoute("/new-arrivals")({
  head: () => ({
    meta: [
      { title: "New Arrivals — Gifty" },
      { name: "description", content: "The newest Gifty gifts, fresh from our studio this month." },
      { property: "og:title", content: "New Arrivals — Gifty" },
      { property: "og:description", content: "Just landed: new hampers, keepsakes and blooms." },
      { property: "og:url", content: "/new-arrivals" },
    ],
    links: [{ rel: "canonical", href: "/new-arrivals" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Just landed"
        title="New arrivals"
        subtitle="Fresh from the studio this month."
      />
      <Section>
        <ProductGrid items={byTag("new")} />
      </Section>
    </>
  ),
});
