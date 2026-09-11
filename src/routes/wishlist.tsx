import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader, Section } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductCard";
import { useShop } from "@/context/ShopContext";
import { products } from "@/lib/data";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Your Wishlist — Gifty" },
      { name: "description", content: "Gifts you've saved for later at Gifty." },
      { property: "og:title", content: "Your Wishlist — Gifty" },
      { property: "og:description", content: "Saved gifts, ready when you are." },
      { property: "og:url", content: "/wishlist" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/wishlist" }],
  }),
  component: Wishlist,
});

function Wishlist() {
  const { wishlist } = useShop();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <>
      <PageHeader eyebrow="Saved" title="Your wishlist" subtitle="Gifts you've kept an eye on." />
      <Section>
        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-16 text-center">
            <p className="text-5xl" aria-hidden>
              💝
            </p>
            <p className="mt-4 text-muted-foreground">Nothing saved yet.</p>
            <Button asChild variant="hero" className="mt-6">
              <Link to="/shop">Find something lovely</Link>
            </Button>
          </div>
        ) : (
          <ProductGrid items={items} />
        )}
      </Section>
    </>
  );
}
