/** Customer profile, addresses and notifications. */
const { COLLECTIONS } = require("../firebase/firebaseAdmin");
const store = require("../services/firestoreService");
const { asyncHandler } = require("../utils/helpers");

/** PUT /api/users/me */
const updateProfile = asyncHandler(async (req, res) => {
  const { name, phone, photoURL } = req.body;
  res.json({
    user: await store.update(COLLECTIONS.users, req.user.uid, { name, phone, photoURL }),
  });
});

/** GET /api/users/me/addresses */
const listAddresses = asyncHandler(async (req, res) => {
  res.json({
    addresses: await store.findAll(COLLECTIONS.addresses, {
      where: [["userId", "==", req.user.uid]],
    }),
  });
});

/** POST /api/users/me/addresses */
const addAddress = asyncHandler(async (req, res) => {
  res.status(201).json({
    address: await store.create(COLLECTIONS.addresses, { ...req.body, userId: req.user.uid }),
  });
});

/** DELETE /api/users/me/addresses/:id */
const removeAddress = asyncHandler(async (req, res) => {
  const address = await store.findById(COLLECTIONS.addresses, req.params.id);
  if (!address || address.userId !== req.user.uid)
    return res.status(404).json({ message: "Address not found" });
  res.json(await store.remove(COLLECTIONS.addresses, req.params.id));
});

/** GET /api/users/me/notifications */
const listNotifications = asyncHandler(async (req, res) => {
  res.json({
    notifications: await store.findAll(COLLECTIONS.notifications, {
      where: [["userId", "==", req.user.uid]],
      orderBy: { field: "createdAt", direction: "desc" },
    }),
  });
});

/** GET /api/users — admin only. */
const listUsers = asyncHandler(async (_req, res) => {
  res.json({ users: await store.findAll(COLLECTIONS.users) });
});

module.exports = {
  updateProfile,
  listAddresses,
  addAddress,
  removeAddress,
  listNotifications,
  listUsers,
};
