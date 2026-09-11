/**
 * Generic CRUD controller factory.
 * Used for the simple collections (categories, coupons, vendors, contacts)
 * so their route files stay declarative.
 */
const store = require("../services/firestoreService");
const { asyncHandler } = require("../utils/helpers");

module.exports = function crudController(collection) {
  return {
    list: asyncHandler(async (_req, res) => res.json({ items: await store.findAll(collection) })),

    get: asyncHandler(async (req, res) => {
      const item = await store.findById(collection, req.params.id);
      if (!item) return res.status(404).json({ message: "Not found" });
      res.json({ item });
    }),

    create: asyncHandler(async (req, res) =>
      res.status(201).json({ item: await store.create(collection, req.body) }),
    ),

    update: asyncHandler(async (req, res) =>
      res.json({ item: await store.update(collection, req.params.id, req.body) }),
    ),

    remove: asyncHandler(async (req, res) =>
      res.json(await store.remove(collection, req.params.id)),
    ),
  };
};
