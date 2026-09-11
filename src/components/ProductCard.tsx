import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { currency, type Product } from "@/lib/data";
import { useShop } from "@/context/ShopContext";
import { cn } from "@/lib/utils";

export function ProductCard({ product, vendorName }: { product: Product; vendorName?: string }) {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const saved = wishlist.includes(product.id);
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-square overflow-hidden gradient-soft"
        aria-label={product.name}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-smooth group-hover:scale-110"
          />
        ) : (
          <span
            aria-hidden
            className="absolute inset-0 grid place-items-center text-7xl transition-smooth group-hover:scale-110"
          >
            {product.emoji}
          </span>
        )}
        {off > 0 && (
          <Badge className="absolute left-3 top-3 rounded-full gradient-primary text-primary-foreground">
            {off}% off
          </Badge>
        )}
      </Link>

      <Button
        variant="ghost"
        size="icon"
        aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        onClick={() => toggleWishlist(product.id)}
        className="absolute right-3 top-3 rounded-full bg-background/80 backdrop-blur"
      >
        <Heart className={cn("h-4 w-4", saved && "fill-primary text-primary")} />
      </Button>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
        <h3 className="mt-1.5 font-display text-base font-semibold leading-snug">
          <Link to="/product/$slug" params={{ slug: product.slug }}>
            {product.name}
          </Link>
        </h3>
        {(vendorName || product.vendorName) && (
          <p className="mt-1 text-xs text-muted-foreground">
            Sold by {vendorName || product.vendorName}
          </p>
        )}
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">{currency(product.price)}</span>
          <span className="text-sm text-muted-foreground line-through">
            {currency(product.mrp)}
          </span>
        </div>
        <Button
          variant="hero"
          className="mt-4 w-full"
          onClick={() => addToCart(product.id)}
          aria-label={`Add ${product.name} to basket`}
        >
          <ShoppingBag /> Add to basket
        </Button>
        <p className="mt-2 text-xs text-muted-foreground">
          {product.stock > 0 ? `${product.stock} available` : "Currently unavailable"}
        </p>
      </div>
    </article>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  if (items.length === 0) {
    return (
      <p className="rounded-3xl border border-dashed border-border p-12 text-center text-muted-foreground">
        No gifts match your filters just yet.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
