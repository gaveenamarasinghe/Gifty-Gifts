/** Orders: placement, customer history, status transitions, tracking. */
const { COLLECTIONS } = require("../firebase/firebaseAdmin");
const store = require("../services/firestoreService");
const { asyncHandler, calculateTotals } = require("../utils/helpers");
const { sendOrderConfirmation, sendDeliveryUpdate } = require("../services/emailService");

const STATUSES = ["placed", "confirmed", "packed", "out-for-delivery", "delivered", "cancelled"];

/** POST /api/orders */
const createOrder = asyncHandler(async (req, res) => {
  const { items, address, deliveryDate, slot, paymentMethod, couponCode, giftMessage } = req.body;
  if (!items?.length) return res.status(400).json({ message: "Your cart is empty" });

  let discount = 0;
  if (couponCode) {
    const [coupon] = await store.findAll(COLLECTIONS.coupons, {
      where: [["code", "==", couponCode.toUpperCase()]],
    });
    if (coupon?.active) {
      const subtotal = items.reduce((s, l) => s + l.price * l.qty, 0);
      discount =
        coupon.type === "percent" ? Math.round((subtotal * coupon.value) / 100) : coupon.value;
    }
  }

  const totals = calculateTotals(items, {
    discount,
    giftWrapCount: items.filter((i) => i.giftWrap).length,
  });

  const order = await store.create(COLLECTIONS.orders, {
    userId: req.user.uid,
    items,
    address,
    deliveryDate,
    slot,
    paymentMethod,
    giftMessage: giftMessage || null,
    couponCode: couponCode || null,
    discount,
    ...totals,
    status: "placed",
    paymentStatus: paymentMethod === "cod" ? "pending" : "awaiting-payment",
    timeline: [{ status: "placed", at: new Date().toISOString() }],
  });

  await sendOrderConfirmation(req.user.email, order);
  res.status(201).json({ order });
});

/** GET /api/orders/mine */
const myOrders = asyncHandler(async (req, res) => {
  const orders = await store.findAll(COLLECTIONS.orders, {
    where: [["userId", "==", req.user.uid]],
    orderBy: { field: "createdAt", direction: "desc" },
  });
  res.json({ orders });
});

/** GET /api/orders/:id — owner, vendor or admin. */
const getOrder = asyncHandler(async (req, res) => {
  const order = await store.findById(COLLECTIONS.orders, req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.userId !== req.user.uid && !["admin", "vendor"].includes(req.user.role)) {
    return res.status(403).json({ message: "Not your order" });
  }
  res.json({ order });
});

/** PATCH /api/orders/:id/status — vendor or admin. */
const updateStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  if (!STATUSES.includes(status)) return res.status(400).json({ message: "Unknown status" });

  const order = await store.findById(COLLECTIONS.orders, req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });

  const updated = await store.update(COLLECTIONS.orders, req.params.id, {
    status,
    timeline: [...(order.timeline || []), { status, at: new Date().toISOString() }],
  });

  const customer = await store.findById(COLLECTIONS.users, order.userId);
  if (customer?.email) await sendDeliveryUpdate(customer.email, updated);

  res.json({ order: updated });
});

/** POST /api/orders/:id/cancel — customer, before dispatch. */
const cancelOrder = asyncHandler(async (req, res) => {
  const order = await store.findById(COLLECTIONS.orders, req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.userId !== req.user.uid) return res.status(403).json({ message: "Not your order" });
  if (["out-for-delivery", "delivered"].includes(order.status)) {
    return res.status(400).json({ message: "This order has already been dispatched" });
  }
  res.json({
    order: await store.update(COLLECTIONS.orders, req.params.id, { status: "cancelled" }),
  });
});

/** GET /api/orders/track/:id — public lookup by order id + email. */
const trackOrder = asyncHandler(async (req, res) => {
  const order = await store.findById(COLLECTIONS.orders, req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json({
    status: order.status,
    timeline: order.timeline,
    deliveryDate: order.deliveryDate,
    slot: order.slot,
  });
});

module.exports = { createOrder, myOrders, getOrder, updateStatus, cancelOrder, trackOrder };
