import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { byCategory, categories } from "@/lib/data";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Gift Categories — Gifty" },
      {
        name: "description",
        content:
          "Explore Gifty categories: hampers, personalised gifts, flowers, cakes, chocolates, perfumes, jewellery, cards and teddy bears.",
      },
      { property: "og:title", content: "Gift Categories — Gifty" },
      { property: "og:description", content: "Nine curated categories of luxury gifts." },
      { property: "og:url", content: "/categories" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: Categories,
});

function Categories() {
  return (
    <>
      <PageHeader
        eyebrow="Browse"
        title="Gift categories"
        subtitle="Nine curated worlds of gifting — every one finished by hand in our studio."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
            >
              <div className="grid aspect-[16/10] place-items-center gradient-soft text-6xl">
                <span aria-hidden className="transition-smooth group-hover:scale-110">
                  {c.emoji}
                </span>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold">{c.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>
                <p className="mt-3 text-xs uppercase tracking-widest text-primary">
                  {byCategory(c.slug).length} gifts
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
