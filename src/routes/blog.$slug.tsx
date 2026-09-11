import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/PageHeader";
import { findPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — Gifty" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — Gifty Journal` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            author: { "@type": "Organization", name: "Gifty" },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <Section className="!max-w-3xl">
      <Link to="/blog" className="text-sm text-primary hover:underline">
        ← Back to the journal
      </Link>
      <p className="mt-8 text-6xl" aria-hidden>
        {post.emoji}
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">{post.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {new Date(post.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        · {post.readingTime} read
      </p>
      <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
        {(post.body as string[]).map((para: string, i: number) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </Section>
  );
}
