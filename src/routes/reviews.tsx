import { createFileRoute } from "@tanstack/react-router";
import { Star, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHeader, Section } from "@/components/PageHeader";
import { products } from "@/lib/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Gifty" },
      {
        name: "description",
        content: "Read verified reviews from Gifty customers across 22 countries.",
      },
      { property: "og:title", content: "Customer Reviews — Gifty" },
      { property: "og:description", content: "4.9/5 from thousands of verified gifters." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

const reviews = [
  {
    name: "Amara P.",
    rating: 5,
    product: products[0].name,
    text: "The hamper arrived in a box so beautiful my sister kept it. Delivery was to the minute.",
    likes: 24,
  },
  {
    name: "Diego R.",
    rating: 5,
    product: products[4].name,
    text: "Ordered the peony bouquet at 11pm for next-day. It looked exactly like the photo — maybe better.",
    likes: 18,
  },
  {
    name: "Sana K.",
    rating: 5,
    product: products[2].name,
    text: "The engraved necklace is genuinely luxury quality. Third order this year.",
    likes: 31,
  },
  {
    name: "Tom H.",
    rating: 4,
    product: products[6].name,
    text: "Cake was superb and clearly fresh. Would love a smaller size option.",
    likes: 7,
  },
  {
    name: "Nour A.",
    rating: 5,
    product: products[16].name,
    text: "The giant bear is enormous and unbelievably soft. My daughter refuses to let go.",
    likes: 42,
  },
  {
    name: "Mira L.",
    rating: 5,
    product: products[8].name,
    text: "Best chocolates I've sent anyone. The packaging feels like a jewellery box.",
    likes: 15,
  },
];

function Reviews() {
  const [liked, setLiked] = useState<string[]>([]);

  return (
    <>
      <PageHeader
        eyebrow="4.9 out of 5"
        title="Customer reviews"
        subtitle="Verified notes from people who actually sent the gift."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-3 text-xs uppercase tracking-widest text-primary">{r.product}</p>
              <blockquote className="mt-2 text-sm leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-5 flex items-center justify-between text-sm font-semibold">
                {r.name}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    setLiked((p) =>
                      p.includes(r.name) ? p.filter((n) => n !== r.name) : [...p, r.name],
                    )
                  }
                  aria-label={`Mark ${r.name}'s review helpful`}
                >
                  <ThumbsUp className={liked.includes(r.name) ? "fill-primary text-primary" : ""} />
                  {r.likes + (liked.includes(r.name) ? 1 : 0)}
                </Button>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
