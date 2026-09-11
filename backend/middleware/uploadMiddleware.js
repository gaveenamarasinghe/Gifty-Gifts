/**
 * Multer upload middleware — memory storage so buffers stream straight to
 * Cloudinary without touching disk (Render's filesystem is ephemeral).
 */
const multer = require("multer");

const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/avif"];

module.exports = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 6 },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED.includes(file.mimetype)) return cb(new Error("Unsupported image type"));
    cb(null, true);
  },
});
