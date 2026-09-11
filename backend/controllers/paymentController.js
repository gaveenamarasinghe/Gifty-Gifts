/** Stripe checkout sessions and webhook reconciliation. */
const stripe = require("../config/stripe");
const { COLLECTIONS } = require("../firebase/firebaseAdmin");
const store = require("../services/firestoreService");
const { asyncHandler } = require("../utils/helpers");

/** POST /api/payments/create-session */
const createCheckoutSession = asyncHandler(async (req, res) => {
  const { orderId } = req.body;
  const order = await store.findById(COLLECTIONS.orders, orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.userId !== req.user.uid) return res.status(403).json({ message: "Not your order" });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: req.user.email,
    line_items: order.items.map((item) => ({
      quantity: item.qty,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(item.price * 100),
        product_data: { name: item.name, images: item.image ? [item.image] : [] },
      },
    })),
    metadata: { orderId },
    success_url: `${process.env.CLIENT_URL}/order-success?order=${orderId}`,
    cancel_url: `${process.env.CLIENT_URL}/checkout`,
  });

  await store.update(COLLECTIONS.orders, orderId, { stripeSessionId: session.id });
  res.json({ url: session.url, id: session.id });
});

/** POST /api/payments/webhook — raw body, signature verified. */
const webhook = asyncHandler(async (req, res) => {
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      req.headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    return res.status(400).send(`Webhook signature verification failed: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const orderId = session.metadata?.orderId;
    if (orderId) {
      await store.update(COLLECTIONS.orders, orderId, {
        paymentStatus: "paid",
        status: "confirmed",
      });
      await store.create(COLLECTIONS.payments, {
        orderId,
        amount: session.amount_total / 100,
        currency: session.currency,
        provider: "stripe",
        reference: session.payment_intent,
        status: "succeeded",
      });
    }
  }

  res.json({ received: true });
});

/** GET /api/payments/mine */
const myPayments = asyncHandler(async (req, res) => {
  const orders = await store.findAll(COLLECTIONS.orders, {
    where: [["userId", "==", req.user.uid]],
  });
  const ids = orders.map((o) => o.id);
  const payments = (await store.findAll(COLLECTIONS.payments)).filter((p) =>
    ids.includes(p.orderId),
  );
  res.json({ payments });
});

module.exports = { createCheckoutSession, webhook, myPayments };
