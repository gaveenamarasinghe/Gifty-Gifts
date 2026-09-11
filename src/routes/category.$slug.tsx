import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductCard";
import { categories } from "@/lib/data";
import { useProducts } from "@/context/ProductContext";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found — Gifty" }, { name: "robots", content: "noindex" }],
      };
    }
    const c = loaderData.category;
    return {
      meta: [
        { title: `${c.name} Gifts — Gifty` },
        { name: "description", content: `${c.name}: ${c.blurb}. Same-day delivery from Gifty.` },
        { property: "og:title", content: `${c.name} Gifts — Gifty` },
        { property: "og:description", content: `${c.name}: ${c.blurb}.` },
        { property: "og:url", content: `/category/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/category/${params.slug}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const { products } = useProducts();
  return (
    <>
      <PageHeader eyebrow={category.emoji} title={category.name} subtitle={category.blurb} />
      <Section>
        <ProductGrid items={products.filter((p) => p.category === category.slug)} />
      </Section>
    </>
  );
}
