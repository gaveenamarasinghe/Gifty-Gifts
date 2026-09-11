/** Products CRUD, search, filters and stock handling. */
const { COLLECTIONS } = require("../firebase/firebaseAdmin");
const store = require("../services/firestoreService");
const { asyncHandler, slugify } = require("../utils/helpers");

/** GET /api/products?category=&search=&min=&max=&sort=&page=&limit= */
const listProducts = asyncHandler(async (req, res) => {
  const { category, vendorId, search, min, max, sort = "newest", page = 1, limit = 24 } = req.query;

  const where = [];
  if (category) where.push(["category", "==", category]);
  if (vendorId) where.push(["vendorId", "==", vendorId]);

  let rows = await store.findAll(COLLECTIONS.products, { where });

  if (search) {
    const q = String(search).toLowerCase();
    rows = rows.filter((p) =>
      `${p.name} ${p.description} ${(p.tags || []).join(" ")}`.toLowerCase().includes(q),
    );
  }
  if (min) rows = rows.filter((p) => p.price >= Number(min));
  if (max) rows = rows.filter((p) => p.price <= Number(max));

  const sorters = {
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating,
    newest: (a, b) => String(b.createdAt).localeCompare(String(a.createdAt)),
  };
  rows.sort(sorters[sort] || sorters.newest);

  const start = (Number(page) - 1) * Number(limit);
  res.json({
    total: rows.length,
    page: Number(page),
    products: rows.slice(start, start + Number(limit)),
  });
});

/** GET /api/products/:slug */
const getProduct = asyncHandler(async (req, res) => {
  const [product] = await store.findAll(COLLECTIONS.products, {
    where: [["slug", "==", req.params.slug]],
  });
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json({ product });
});

/** POST /api/products — vendor or admin. */
const createProduct = asyncHandler(async (req, res) => {
  const owner = await store.findById(COLLECTIONS.users, req.user.uid);
  const body = {
    ...req.body,
    slug: slugify(req.body.name),
    vendorId: req.user.uid,
    vendorName: owner?.vendor?.name || owner?.name || null,
    rating: 0,
    reviewCount: 0,
  };
  res.status(201).json({ product: await store.create(COLLECTIONS.products, body) });
});

/** PUT /api/products/:id — vendor owner or admin. */
const updateProduct = asyncHandler(async (req, res) => {
  const existing = await store.findById(COLLECTIONS.products, req.params.id);
  if (!existing) return res.status(404).json({ message: "Product not found" });
  if (req.user.role !== "admin" && existing.vendorId !== req.user.uid) {
    return res.status(403).json({ message: "Not your product" });
  }
  const patch = req.body.name ? { ...req.body, slug: slugify(req.body.name) } : req.body;
  res.json({ product: await store.update(COLLECTIONS.products, req.params.id, patch) });
});

/** DELETE /api/products/:id */
const deleteProduct = asyncHandler(async (req, res) => {
  const existing = await store.findById(COLLECTIONS.products, req.params.id);
  if (!existing) return res.status(404).json({ message: "Product not found" });
  if (req.user.role !== "admin" && existing.vendorId !== req.user.uid) {
    return res.status(403).json({ message: "Not your product" });
  }
  res.json(await store.remove(COLLECTIONS.products, req.params.id));
});

module.exports = { listProducts, getProduct, createProduct, updateProduct, deleteProduct };
