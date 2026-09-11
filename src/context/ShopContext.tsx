/**
 * ShopContext — cart, wishlist, recently viewed and orders.
 * Persisted to localStorage so the basket survives refreshes; the Express API
 * mirrors the same shape in the `carts`, `wishlists` and `orders` collections.
 */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { coupons, type Product } from "@/lib/data";
import { useProducts } from "@/context/ProductContext";

let productCache = new Map<string, Product>();
export const getProduct = (id: string): Product | undefined => productCache.get(id);

export type CartLine = { productId: string; qty: number; giftWrap: boolean };

export type Order = {
  id: string;
  date: string;
  status: "Processing" | "Packed" | "Out for delivery" | "Delivered" | "Cancelled";
  total: number;
  lines: CartLine[];
  address: string;
  deliveryDate: string;
  slot: string;
  message: string;
  payment: string;
};

type ShopContextValue = {
  cart: CartLine[];
  wishlist: string[];
  orders: Order[];
  recent: string[];
  coupon: string | null;
  addToCart: (productId: string, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  toggleGiftWrap: (productId: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  markViewed: (productId: string) => void;
  placeOrder: (o: Omit<Order, "id" | "date" | "status" | "lines" | "total">) => Order;
  cancelOrder: (id: string) => void;
  totals: {
    subtotal: number;
    discount: number;
    wrap: number;
    shipping: number;
    tax: number;
    total: number;
    count: number;
  };
};

const ShopContext = createContext<ShopContextValue | null>(null);
const KEY = "gifty.shop";
const GIFT_WRAP_PRICE = 6;

export function ShopProvider({ children }: { children: ReactNode }) {
  const { products } = useProducts();
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [recent, setRecent] = useState<string[]>([]);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Read persisted state after hydration to avoid SSR mismatches.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const s = JSON.parse(raw);
        setCart(s.cart ?? []);
        setWishlist(s.wishlist ?? []);
        setOrders(s.orders ?? []);
        setRecent(s.recent ?? []);
        setCoupon(s.coupon ?? null);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(KEY, JSON.stringify({ cart, wishlist, orders, recent, coupon }));
  }, [cart, wishlist, orders, recent, coupon, hydrated]);

  useEffect(() => {
    productCache = new Map(products.map((p) => [p.id, p]));
  }, [products]);

  const totals = useMemo(() => {
    const subtotal = cart.reduce((s, l) => s + (getProduct(l.productId)?.price ?? 0) * l.qty, 0);
    const wrap = cart.filter((l) => l.giftWrap).length * GIFT_WRAP_PRICE;
    const c = coupons.find((x) => x.code === coupon);
    let discount = 0;
    let freeShip = false;
    if (c) {
      if (c.type === "percent") discount = Math.round((subtotal * c.value) / 100);
      if (c.type === "flat" && subtotal >= (c.min ?? 0)) discount = c.value;
      if (c.type === "shipping") freeShip = true;
    }
    const shipping = subtotal === 0 || subtotal > 120 || freeShip ? 0 : 9;
    const tax = Math.round((subtotal - discount) * 0.05);
    return {
      subtotal,
      discount,
      wrap,
      shipping,
      tax,
      total: Math.max(0, subtotal - discount + wrap + shipping + tax),
      count: cart.reduce((s, l) => s + l.qty, 0),
    };
  }, [cart, coupon]);

  const value = useMemo<ShopContextValue>(
    () => ({
      cart,
      wishlist,
      orders,
      recent,
      coupon,
      totals,
      addToCart(productId, qty = 1) {
        setCart((prev) => {
          const found = prev.find((l) => l.productId === productId);
          if (found)
            return prev.map((l) => (l.productId === productId ? { ...l, qty: l.qty + qty } : l));
          return [...prev, { productId, qty, giftWrap: false }];
        });
        toast.success(`${getProduct(productId)?.name ?? "Item"} added to your basket`);
      },
      removeFromCart(productId) {
        setCart((prev) => prev.filter((l) => l.productId !== productId));
      },
      setQty(productId, qty) {
        setCart((prev) =>
          qty <= 0
            ? prev.filter((l) => l.productId !== productId)
            : prev.map((l) => (l.productId === productId ? { ...l, qty } : l)),
        );
      },
      toggleGiftWrap(productId) {
        setCart((prev) =>
          prev.map((l) => (l.productId === productId ? { ...l, giftWrap: !l.giftWrap } : l)),
        );
      },
      clearCart() {
        setCart([]);
        setCoupon(null);
      },
      toggleWishlist(productId) {
        setWishlist((prev) => {
          const has = prev.includes(productId);
          toast[has ? "message" : "success"](has ? "Removed from wishlist" : "Saved to wishlist");
          return has ? prev.filter((x) => x !== productId) : [...prev, productId];
        });
      },
      applyCoupon(code) {
        const found = coupons.find((c) => c.code.toLowerCase() === code.trim().toLowerCase());
        if (!found) {
          toast.error("That coupon code isn't valid");
          return false;
        }
        setCoupon(found.code);
        toast.success(found.label + " applied");
        return true;
      },
      removeCoupon() {
        setCoupon(null);
      },
      markViewed(productId) {
        setRecent((prev) => [productId, ...prev.filter((x) => x !== productId)].slice(0, 8));
      },
      placeOrder(details) {
        const order: Order = {
          ...details,
          id: "GFT-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
          date: new Date().toISOString(),
          status: "Processing",
          lines: cart,
          total: totals.total,
        };
        setOrders((prev) => [order, ...prev]);
        setCart([]);
        setCoupon(null);
        return order;
      },
      cancelOrder(id) {
        setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: "Cancelled" } : o)));
        toast.success("Order cancelled — refund issued within 3 days");
      },
    }),
    [cart, wishlist, orders, recent, coupon, totals],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside <ShopProvider>");
  return ctx;
}
