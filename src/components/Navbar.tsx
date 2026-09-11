import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Gift, Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useShop } from "@/context/ShopContext";
import { useAuth } from "@/context/AuthContext";
import { categories } from "@/lib/data";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/categories", label: "Categories" },
  { to: "/new-arrivals", label: "New" },
  { to: "/best-sellers", label: "Best Sellers" },
  { to: "/offers", label: "Offers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { totals, wishlist } = useShop();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    navigate({ to: "/shop", search: { q: q || undefined } });
  }

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <nav className="mt-8 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-accent"
                >
                  {n.label}
                </Link>
              ))}
              <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Categories
              </p>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm hover:bg-accent"
                >
                  <span aria-hidden>{c.emoji}</span> {c.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link to="/" className="flex items-center gap-2" aria-label="Gifty home">
          <span className="grid h-9 w-9 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
            <Gift className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">Gifty</span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <form onSubmit={submit} className="ml-auto hidden max-w-xs flex-1 md:block" role="search">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search gifts…"
              aria-label="Search gifts"
              className="h-10 rounded-full border-border bg-background/70 pl-9"
            />
          </div>
        </form>

        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <Button asChild variant="ghost" size="icon" aria-label="Wishlist">
            <Link to="/wishlist" className="relative">
              <Heart />
              {wishlist.length > 0 && <Dot value={wishlist.length} />}
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Basket">
            <Link to="/cart" className="relative">
              <ShoppingBag />
              {totals.count > 0 && <Dot value={totals.count} />}
            </Link>
          </Button>
          <Button asChild variant={user ? "ghost" : "hero"} size={user ? "icon" : "sm"}>
            <Link to={user ? "/dashboard" : "/login"} aria-label="Account">
              {user ? <User /> : "Sign in"}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Dot({ value }: { value: number }) {
  return (
    <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
      {value}
    </span>
  );
}
