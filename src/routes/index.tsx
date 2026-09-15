import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Gift,
  Sparkles,
  Star,
  Truck,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Mail,
  Store,
} from "lucide-react";
import heroImage from "@/assets/hero-gifts.jpg";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductCard";
import { categories, testimonials } from "@/lib/data";
import { useProducts } from "@/context/ProductContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gifty — Luxury Gifts Delivered Same Day" },
      {
        name: "description",
        content:
          "Gift hampers, peonies, fresh cakes, chocolates and personalised keepsakes. Same-day delivery, handwritten notes, beautiful packaging.",
      },
      { property: "og:title", content: "Gifty — Luxury Gifts Delivered Same Day" },
      {
        property: "og:description",
        content: "Send Love, Deliver Happiness. Curated luxury gifts with same-day delivery.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const perks = [
  { icon: Truck, title: "Same-day delivery", text: "Order before 4pm in 40+ cities." },
  { icon: Sparkles, title: "Hand-finished", text: "Wrapped and ribboned by our studio." },
  { icon: ShieldCheck, title: "Perfect or replaced", text: "48-hour no-questions guarantee." },
  { icon: Clock, title: "Timed slots", text: "Pick the exact two-hour window." },
];

function Home() {
  const { products } = useProducts();
  const seller = (() => {
    if (typeof window === "undefined") return null;
    try {
      const storedUser = localStorage.getItem("gifty_user");
      const user = storedUser ? JSON.parse(storedUser) : null;
      return user?.role === "vendor" && user.vendor ? user : null;
    } catch {
      return null;
    }
  })();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-soft">
        <div className="absolute inset-0 gradient-glow" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              <Sparkles className="h-3.5 w-3.5" /> Send Love, Deliver Happiness
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Gifts that feel <span className="text-gradient">unforgettable</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Curated hampers, hand-tied peonies, same-morning cakes and personalised keepsakes —
              delivered in packaging they'll want to keep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/shop">
                  <Gift /> Shop all gifts
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/categories">Browse categories</Link>
              </Button>
            </div>
            <dl className="mt-10 flex flex-wrap gap-8">
              {[
                ["120k+", "Gifts delivered"],
                ["4.9/5", "Average rating"],
                ["40+", "Same-day cities"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-bold text-primary">{v}</dt>
                  <dd className="text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Pink luxury gift boxes tied with satin ribbon beside fresh peonies"
              width={1408}
              height={1104}
              className="w-full rounded-[2.5rem] shadow-card"
            />
            <div className="absolute -bottom-6 -left-4 hidden rounded-3xl glass p-4 shadow-card sm:block float-slow">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Delivered today
              </p>
              <p className="font-display text-lg font-bold">1,284 smiles 💕</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <Section className="py-12!">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-card"
            >
              <p.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section>
        <SectionHeading
          eyebrow="Shop by occasion"
          title="Every kind of happy"
          action={
            <Button asChild variant="outline">
              <Link to="/categories">See all</Link>
            </Button>
          }
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.slice(0, 10).map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
            >
              <span className="block text-4xl transition-smooth group-hover:scale-110" aria-hidden>
                {c.emoji}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured vendor products */}
      <Section>
        <SectionHeading
          eyebrow="From our sellers"
          title="Featured gifts"
          action={
            <Button asChild variant="outline">
              <Link to="/shop">View all</Link>
            </Button>
          }
        />
        <ProductGrid items={products.filter((product) => Boolean(product.vendorId)).slice(0, 8)} />
      </Section>

      {seller && (
        <Section className="pt-0!">
          <SectionHeading eyebrow="Meet the seller" title={seller.vendor.name || seller.name} />
          <div className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-soft md:grid-cols-[1fr_2fr] md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Store />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{seller.vendor.name}</h3>
                  <p className="text-sm text-muted-foreground">{seller.vendor.shopDescription}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {seller.vendor.location || seller.vendor.address}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                {seller.vendor.phone}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                {seller.vendor.email || seller.email}
              </span>
            </div>
          </div>
        </Section>
      )}

      {/* Testimonials */}
      <Section>
        <SectionHeading eyebrow="Real notes" title="What gifters say" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-5 text-sm font-semibold">
                {t.name} <span className="font-normal text-muted-foreground">· {t.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-24!">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-primary px-8 py-16 text-center text-primary-foreground shadow-glow">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Not sure what to send?</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-90">
            Tell us the occasion and budget — our gift concierge builds a bespoke hamper within an
            hour.
          </p>
          <Button asChild size="xl" variant="soft" className="mt-8">
            <Link to="/contact">Talk to a gift concierge</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
