import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Gifty Journal — Gifting Ideas & Guides" },
      {
        name: "description",
        content:
          "Gifting guides from the Gifty studio: hampers, flower care and personalisation done well.",
      },
      { property: "og:title", content: "The Gifty Journal" },
      { property: "og:description", content: "Guides and ideas from our gift concierge." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Ideas & guides"
        subtitle="Written by the people tying the ribbons."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
            >
              <div className="grid aspect-[16/9] place-items-center gradient-soft text-6xl">
                <span aria-hidden className="transition-smooth group-hover:scale-110">
                  {p.emoji}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-primary">
                  {new Date(p.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {p.readingTime}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold leading-snug">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
