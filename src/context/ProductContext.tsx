import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { type Product } from "@/lib/data";
import { fetchJson } from "@/lib/api";

export type ProductContextValue = {
  products: Product[];
  reloadProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<Product>;
  updateProduct: (product: Product) => Promise<Product>;
  deleteProduct: (productId: string) => Promise<void>;
};

export function normalizeProduct(product: Product & { reviewCount?: number }): Product {
  return {
    ...product,
    mrp: product.mrp ?? product.price,
    reviews: product.reviews ?? product.reviewCount ?? 0,
    rating: product.rating ?? 0,
    emoji: product.emoji ?? "🎁",
    tags: product.tags ?? [],
  };
}

const ProductContext = createContext<ProductContextValue | null>(null);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  const reloadProducts = async () => {
    try {
      const { response, data } = await fetchJson("/api/products");
      if (!response.ok) throw new Error(data?.message || "Failed to load products");
      setProducts((data.products || []).map(normalizeProduct));
    } catch (error) {
      console.warn("Product reload failed", error);
      setProducts([]);
    }
  };

  const addProduct = async (product: Product) => {
    const { response, data } = await fetchJson("/api/products", {
      method: "POST",
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error(data?.message || "Failed to create product");
    const created = normalizeProduct(data.product);
    setProducts((prev) => [created, ...prev]);
    return created;
  };

  const updateProduct = async (product: Product) => {
    const { response, data } = await fetchJson(`/api/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error(data?.message || "Failed to update product");
    const updated = normalizeProduct(data.product);
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    return updated;
  };

  const deleteProduct = async (productId: string) => {
    const { response, data } = await fetchJson(`/api/products/${productId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(data?.message || "Failed to delete product");
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  useEffect(() => {
    void reloadProducts();
  }, []);

  const value = useMemo(
    () => ({ products, reloadProducts, addProduct, updateProduct, deleteProduct }),
    [products],
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function useProducts() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProducts must be used inside ProductProvider");
  return ctx;
}
