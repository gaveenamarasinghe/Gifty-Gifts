import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, Section } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/data";
import { useProducts } from "@/context/ProductContext";

type Search = { q?: string; category?: string };

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    q: typeof search.q === "string" && search.q ? search.q : undefined,
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop All Gifts — Gifty" },
      {
        name: "description",
        content:
          "Browse every Gifty gift: hampers, flowers, cakes, chocolates, jewellery and more.",
      },
      { property: "og:title", content: "Shop All Gifts — Gifty" },
      {
        property: "og:description",
        content: "Filter by category, price, rating and availability.",
      },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

const PER_PAGE = 8;

function Shop() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { products } = useProducts();
  const [q, setQ] = useState(search.q ?? "");
  const [cats, setCats] = useState<string[]>(search.category ? [search.category] : []);
  const [maxPrice, setMaxPrice] = useState(150);
  const [minRating, setMinRating] = useState(0);
  const [inStock, setInStock] = useState(false);
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (q === "" || (p.name + p.description).toLowerCase().includes(q.toLowerCase())) &&
        (cats.length === 0 || cats.includes(p.category)) &&
        p.price <= maxPrice &&
        p.rating >= minRating &&
        (!inStock || p.stock > 0),
    );
    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews;
    });
    return list;
  }, [products, q, cats, maxPrice, minRating, inStock, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function toggleCat(slug: string) {
    setPage(1);
    setCats((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  return (
    <>
      <PageHeader
        eyebrow="The collection"
        title="Shop all gifts"
        subtitle="Eighteen studio-finished gifts, filtered exactly how you like them."
      />
      <Section className="grid gap-10 lg:grid-cols-[280px_1fr]">
        {/* Filters */}
        <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-soft lg:sticky lg:top-24">
          <h2 className="font-display text-lg font-semibold">Filters</h2>

          <div className="mt-5">
            <Label htmlFor="shop-search">Search</Label>
            <Input
              id="shop-search"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setPage(1);
                navigate({
                  to: "/shop",
                  search: { q: e.target.value || undefined },
                  replace: true,
                });
              }}
              placeholder="Peonies, teddy, perfume…"
              className="mt-2 rounded-full"
            />
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold">Category</legend>
            <div className="mt-3 space-y-2.5">
              {categories.map((c) => (
                <div key={c.slug} className="flex items-center gap-2">
                  <Checkbox
                    id={`cat-${c.slug}`}
                    checked={cats.includes(c.slug)}
                    onCheckedChange={() => toggleCat(c.slug)}
                  />
                  <Label htmlFor={`cat-${c.slug}`} className="cursor-pointer text-sm font-normal">
                    {c.emoji} {c.name}
                  </Label>
                </div>
              ))}
            </div>
          </fieldset>

          <div className="mt-6">
            <Label>Max price: ${maxPrice}</Label>
            <Slider
              value={[maxPrice]}
              min={10}
              max={150}
              step={5}
              onValueChange={([v]) => {
                setMaxPrice(v);
                setPage(1);
              }}
              className="mt-3"
            />
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold">Minimum rating</legend>
            <div className="mt-3 flex gap-2">
              {[0, 4.5, 4.7, 4.8].map((r) => (
                <Button
                  key={r}
                  size="sm"
                  variant={minRating === r ? "hero" : "outline"}
                  onClick={() => {
                    setMinRating(r);
                    setPage(1);
                  }}
                >
                  {r === 0 ? "Any" : `${r}+`}
                </Button>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex items-center gap-2">
            <Checkbox
              id="in-stock"
              checked={inStock}
              onCheckedChange={(v) => setInStock(Boolean(v))}
            />
            <Label htmlFor="in-stock" className="cursor-pointer text-sm font-normal">
              In stock only
            </Label>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">{filtered.length} gifts</p>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-52 rounded-full">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most popular</SelectItem>
                <SelectItem value="rating">Highest rated</SelectItem>
                <SelectItem value="price-asc">Price: low to high</SelectItem>
                <SelectItem value="price-desc">Price: high to low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ProductGrid items={current} />

          {pages > 1 && (
            <nav className="mt-10 flex justify-center gap-2" aria-label="Pagination">
              {Array.from({ length: pages }).map((_, i) => (
                <Button
                  key={i}
                  size="icon"
                  variant={page === i + 1 ? "hero" : "outline"}
                  onClick={() => setPage(i + 1)}
                  aria-current={page === i + 1 ? "page" : undefined}
                >
                  {i + 1}
                </Button>
              ))}
            </nav>
          )}
        </div>
      </Section>
    </>
  );
}
