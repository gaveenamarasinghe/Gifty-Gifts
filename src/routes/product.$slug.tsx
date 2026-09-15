import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Minus, Plus, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, currency } from "@/lib/data";
import { fetchJson } from "@/lib/api";
import { useShop } from "@/context/ShopContext";
import { normalizeProduct, useProducts } from "@/context/ProductContext";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  loader: async ({ params }) => {
    const { response, data } = await fetchJson(`/api/products/${params.slug}`);
    if (!response.ok || !data?.product) throw notFound();
    return { product: normalizeProduct(data.product) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Gift not found — Gifty" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — Gifty` },
        { name: "description", content: p.description.slice(0, 155) },
        { property: "og:title", content: `${p.name} — Gifty` },
        { property: "og:description", content: p.description.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/product/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/product/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.description,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: p.rating,
              reviewCount: p.reviews,
            },
            offers: {
              "@type": "Offer",
              price: p.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { addToCart, toggleWishlist, wishlist, markViewed } = useShop();
  const [qty, setQty] = useState(1);
  const saved = wishlist.includes(product.id);
  const category = categories.find((c) => c.slug === product.category);
  const { products } = useProducts();
  const related = products.filter((p) => p.category === product.category && p.id !== product.id);

  useEffect(() => {
    markViewed(product.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.id]);

  return (
    <>
      <Section className="pb-8!">
        <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/shop" className="hover:text-primary">
            Shop
          </Link>{" "}
          /{" "}
          {category && (
            <Link
              to="/category/$slug"
              params={{ slug: category.slug }}
              className="hover:text-primary"
            >
              {category.name}
            </Link>
          )}{" "}
          / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="group relative aspect-square overflow-hidden rounded-[2.5rem] gradient-soft shadow-card">
            {product.image ? (
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            ) : (
              <span
                aria-hidden
                className="absolute inset-0 grid place-items-center text-[10rem] transition-smooth group-hover:scale-125"
              >
                {product.emoji}
              </span>
            )}
          </div>

          <div>
            <Badge variant="secondary" className="rounded-full">
              {category?.name}
            </Badge>
            <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="flex" aria-label={`Rated ${product.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < Math.round(product.rating) ? "fill-primary text-primary" : "text-border",
                    )}
                  />
                ))}
              </span>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-primary">
                {currency(product.price)}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                {currency(product.mrp)}
              </span>
              <Badge className="rounded-full gradient-primary text-primary-foreground">
                Save {currency(product.mrp - product.price)}
              </Badge>
            </div>

            <p className="mt-2 text-sm text-success">In stock — {product.stock} ready to ship</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center rounded-full border border-border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus />
                </Button>
                <span className="w-10 text-center font-semibold">{qty}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus />
                </Button>
              </div>
              <Button variant="hero" size="lg" onClick={() => addToCart(product.id, qty)}>
                <ShoppingBag /> Add to basket
              </Button>
              <Button variant="outline" size="lg" onClick={() => toggleWishlist(product.id)}>
                <Heart className={cn(saved && "fill-primary text-primary")} />
                {saved ? "Saved" : "Wishlist"}
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Perk icon={Truck} title="Same-day delivery" text="Order before 4pm" />
              <Perk icon={ShieldCheck} title="Perfect or replaced" text="48-hour guarantee" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-8!">
        <Tabs defaultValue="details">
          <TabsList className="rounded-full">
            <TabsTrigger value="details" className="rounded-full">
              Details
            </TabsTrigger>
            <TabsTrigger value="delivery" className="rounded-full">
              Delivery
            </TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-full">
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="details"
            className="mt-6 max-w-3xl leading-relaxed text-muted-foreground"
          >
            {product.description} Every Gifty order is finished by hand in our studio, wrapped in
            recycled tissue and sealed with a wax stamp. Add a handwritten note free at checkout.
          </TabsContent>
          <TabsContent
            value="delivery"
            className="mt-6 max-w-3xl leading-relaxed text-muted-foreground"
          >
            Same-day delivery in 40+ cities for orders placed before 4pm. Choose your delivery date
            and a two-hour slot at checkout. Free express shipping over $120.
          </TabsContent>
          <TabsContent value="reviews" className="mt-6 space-y-4">
            {[
              {
                n: "Rowan T.",
                r: 5,
                t: "Arrived exactly on time and looked even better in person.",
              },
              { n: "Priya M.", r: 5, t: "The packaging alone made my mum cry. Worth every penny." },
              {
                n: "Luca B.",
                r: 4,
                t: "Beautiful gift, though I wish there were more size options.",
              },
            ].map((rv) => (
              <div key={rv.n} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{rv.n}</span>
                  <span className="flex">
                    {Array.from({ length: rv.r }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{rv.t}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </Section>

      {related.length > 0 && (
        <Section className="pt-0!">
          <h2 className="mb-8 font-display text-3xl font-bold">You may also love</h2>
          <ProductGrid items={related.slice(0, 4)} />
        </Section>
      )}
    </>
  );
}

function Perk({ icon: Icon, title, text }: { icon: typeof Truck; title: string; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
      <Icon className="h-5 w-5 text-primary" />
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
