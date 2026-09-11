import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader, Section } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Gifty — Our Story" },
      {
        name: "description",
        content:
          "Gifty is a small studio obsessed with the moment a gift is opened. Meet the makers.",
      },
      { property: "og:title", content: "About Gifty — Our Story" },
      {
        property: "og:description",
        content: "A studio obsessed with the moment a gift is opened.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: Heart,
    title: "Made with care",
    text: "Every ribbon tied by hand in our Shoreditch studio.",
  },
  {
    icon: Leaf,
    title: "Kinder materials",
    text: "Recycled tissue, FSC card, zero plastic filler.",
  },
  {
    icon: Sparkles,
    title: "Obsessive detail",
    text: "Wax seals, handwritten notes, scented paper.",
  },
  { icon: Users, title: "Small team", text: "Twenty-two people who genuinely love gifting." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="We design the moment it's opened"
        subtitle="Gifty started in 2019 with one hamper, one kitchen table and a lot of ribbon. Today we deliver in 22 countries — still finishing every box by hand."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <v.icon className="h-6 w-6 text-primary" />
              <h2 className="mt-4 font-display text-lg font-semibold">{v.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="!pt-0">
        <div className="grid gap-10 rounded-[2.5rem] gradient-soft p-10 lg:grid-cols-2 lg:p-16">
          <div>
            <h2 className="font-display text-3xl font-bold">Built on one belief</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A gift isn't the object — it's the ten seconds when someone realises you paid
              attention. We design backwards from that moment: the weight of the box, the sound of
              the ribbon, the scent when the lid lifts.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That's why we bake cakes the same morning, source peonies from three partner growers,
              and hand-write every note in real ink.
            </p>
            <Button asChild variant="hero" className="mt-8">
              <Link to="/shop">Explore the collection</Link>
            </Button>
          </div>
          <dl className="grid grid-cols-2 gap-6 self-center">
            {[
              ["2019", "Founded"],
              ["120k+", "Gifts sent"],
              ["22", "Countries"],
              ["4.9/5", "Rating"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-3xl bg-background p-6 text-center shadow-soft">
                <dt className="font-display text-3xl font-bold text-primary">{v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </>
  );
}
