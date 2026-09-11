/** Cloudinary image uploads for product and avatar images. */
const { uploadBuffer } = require("../config/cloudinary");
const { asyncHandler } = require("../utils/helpers");

/** POST /api/upload — multipart field `images` (up to 6 files). */
const uploadImages = asyncHandler(async (req, res) => {
  if (!req.files?.length) return res.status(400).json({ message: "No images received" });
  const folder = req.body.folder === "avatars" ? "gifty/avatars" : "gifty/products";
  const results = await Promise.all(req.files.map((f) => uploadBuffer(f.buffer, folder)));
  res
    .status(201)
    .json({ images: results.map((r) => ({ url: r.secure_url, publicId: r.public_id })) });
});

module.exports = { uploadImages };
