/** 404 handler for unmatched API routes. */
module.exports = function notFound(req, res) {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
};
