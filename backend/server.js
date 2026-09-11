/**
 * Gifty API Server
 */

require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const notFound = require("./middleware/notFoundMiddleware");
const errorHandler = require("./middleware/errorMiddleware");

// Initialize Firebase Admin
require("./config/firebaseAdmin");

const app = express();

/* ---------------------------------------------------
 * Security
 * --------------------------------------------------- */

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

/* ---------------------------------------------------
 * CORS
 * --------------------------------------------------- */

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:8082",
  "http://127.0.0.1:8082",
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (
        allowedOrigins.includes(origin) ||
        origin.startsWith("http://localhost:") ||
        origin.startsWith("http://127.0.0.1:")
      ) {
        return callback(null, true);
      }

      console.log("Blocked Origin:", origin);

      callback(new Error("Not allowed by CORS"));
    },

    credentials: true,

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

/* ---------------------------------------------------
 * Rate Limit
 * --------------------------------------------------- */

app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

/* ---------------------------------------------------
 * Body Parser
 * --------------------------------------------------- */

app.use(
  "/api/payments/webhook",
  express.raw({
    type: "application/json",
  }),
);

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

/* ---------------------------------------------------
 * Health
 * --------------------------------------------------- */

app.get("/health", (req, res) => {
  res.json({
    success: true,
    service: "gifty-api",
    firebase: true,
    email: true,
  });
});

/* ---------------------------------------------------
 * API Routes
 * --------------------------------------------------- */

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/coupons", require("./routes/couponRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/vendors", require("./routes/vendorRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/wishlists", require("./routes/wishlistRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));

/* ---------------------------------------------------
 * 404
 * --------------------------------------------------- */

app.use("/api/*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

/* ---------------------------------------------------
 * Error Handlers
 * --------------------------------------------------- */

app.use(notFound);
app.use(errorHandler);

/* ---------------------------------------------------
 * Start Server
 * --------------------------------------------------- */

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  const server = app.listen(PORT, () => {
    console.log("=================================");
    console.log(`🎁 Gifty API running on port ${PORT}`);
    console.log("Allowed Origins:");
    console.log(allowedOrigins);
    console.log("=================================");
  });

  server.on("error", (error) => {
    if (error && typeof error === "object" && "code" in error && error.code === "EADDRINUSE") {
      console.error(
        `Port ${PORT} is already in use. Please stop the existing process and try again.`,
      );
      process.exit(1);
    }

    throw error;
  });
}

module.exports = app;
