import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductCard";
import { byTag } from "@/lib/data";

export const Route = createFileRoute("/featured")({
  head: () => ({
    meta: [
      { title: "Featured Gifts — Gifty" },
      { name: "description", content: "Our editors' picks: the Gifty gifts we send most often." },
      { property: "og:title", content: "Featured Gifts — Gifty" },
      { property: "og:description", content: "Handpicked luxury gifts from the Gifty studio." },
      { property: "og:url", content: "/featured" },
    ],
    links: [{ rel: "canonical", href: "/featured" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Editors' picks"
        title="Featured gifts"
        subtitle="The ones we send most often."
      />
      <Section>
        <ProductGrid items={byTag("featured")} />
      </Section>
    </>
  ),
});
