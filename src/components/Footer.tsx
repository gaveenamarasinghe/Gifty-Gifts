import { Link } from "@tanstack/react-router";
import { Gift, Instagram, Twitter, Facebook } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/lib/data";

const shopLinks = [
  { to: "/shop", label: "All Gifts" },
  { to: "/new-arrivals", label: "New Arrivals" },
  { to: "/featured", label: "Featured" },
  { to: "/best-sellers", label: "Best Sellers" },
  { to: "/offers", label: "Offers" },
];

const helpLinks = [
  { to: "/track-order", label: "Track Order" },
  { to: "/faqs", label: "FAQs" },
  { to: "/shipping-policy", label: "Shipping Policy" },
  { to: "/refund-policy", label: "Refund Policy" },
  { to: "/contact", label: "Contact" },
];

const legalLinks = [
  { to: "/about", label: "About Gifty" },
  { to: "/blog", label: "Journal" },
  { to: "/reviews", label: "Reviews" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-24 border-t border-border gradient-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-2xl gradient-primary text-primary-foreground">
                <Gift className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-bold">Gifty</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Send Love, Deliver Happiness. Hand-finished gifts, same-day delivery in 40+ cities.
            </p>
            <form
              className="mt-6 flex max-w-sm gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("You're on the list — 10% off is on its way.");
                setEmail("");
              }}
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="h-11 rounded-full"
              />
              <Button type="submit" variant="hero" className="h-11">
                Join
              </Button>
            </form>
            <div className="mt-6 flex gap-2">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <span
                  key={i}
                  className="grid h-9 w-9 place-items-center rounded-full bg-background text-primary shadow-soft"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <FooterCol title="Shop" links={shopLinks} />
          <FooterCol title="Help" links={helpLinks} />
          <FooterCol title="Company" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-8">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="rounded-full bg-background px-3 py-1.5 text-xs text-muted-foreground shadow-soft transition-smooth hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gifty. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-widest">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-sm text-muted-foreground transition-smooth hover:text-primary"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
