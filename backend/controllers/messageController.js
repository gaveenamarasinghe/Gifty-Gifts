/** Messages controller for vendor/customer conversations. */
const { COLLECTIONS } = require("../config/firebaseAdmin");
const store = require("../services/firestoreService");
const { asyncHandler } = require("../utils/helpers");

const listConversations = asyncHandler(async (req, res) => {
  const uid = req.user.uid;
  const conversations = await store.findAll(COLLECTIONS.messages, {
    where: [["participants", "array-contains", uid]],
    orderBy: { field: "updatedAt", direction: "desc" },
  });
  res.json({ conversations });
});

const getConversation = asyncHandler(async (req, res) => {
  const conversation = await store.findById(COLLECTIONS.messages, req.params.id);
  if (!conversation) return res.status(404).json({ message: "Conversation not found" });
  if (!conversation.participants?.includes(req.user.uid) && req.user.role !== "admin") {
    return res.status(403).json({ message: "Not in this conversation" });
  }
  res.json({ conversation });
});

const createConversation = asyncHandler(async (req, res) => {
  const { customerId, clientName, orderId, text } = req.body;
  if (!customerId || !clientName || !text) {
    return res.status(400).json({ message: "Missing required conversation fields" });
  }

  const vendorId = req.user.role === "vendor" ? req.user.uid : req.body.vendorId;
  if (!vendorId) {
    return res.status(403).json({ message: "Vendor access required" });
  }

  const now = new Date().toISOString();
  const conversation = await store.create(COLLECTIONS.messages, {
    participants: [vendorId, customerId],
    vendorId,
    customerId,
    clientName,
    orderId: orderId || null,
    lastMessage: text,
    time: now,
    unreadForVendor: 0,
    unreadForCustomer: 1,
    messages: [
      {
        from: req.user.role === "vendor" ? "vendor" : "customer",
        senderId: req.user.uid,
        text,
        time: now,
      },
    ],
    createdAt: now,
    updatedAt: now,
  });

  res.status(201).json({ conversation });
});

const sendMessage = asyncHandler(async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Message text is required" });
  }

  const existing = await store.findById(COLLECTIONS.messages, req.params.id);
  if (!existing) return res.status(404).json({ message: "Conversation not found" });
  if (!existing.participants?.includes(req.user.uid) && req.user.role !== "admin") {
    return res.status(403).json({ message: "Not in this conversation" });
  }

  const now = new Date().toISOString();
  const from = req.user.role === "vendor" ? "vendor" : "customer";
  const updated = await store.update(COLLECTIONS.messages, req.params.id, {
    messages: [...(existing.messages || []), { from, senderId: req.user.uid, text, time: now }],
    lastMessage: text,
    time: now,
    updatedAt: now,
    unreadForVendor: from === "customer" ? (existing.unreadForVendor || 0) + 1 : 0,
    unreadForCustomer: from === "vendor" ? (existing.unreadForCustomer || 0) + 1 : 0,
  });

  res.json({ conversation: updated });
});

module.exports = {
  listConversations,
  getConversation,
  createConversation,
  sendMessage,
};
