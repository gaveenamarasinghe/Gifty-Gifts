/** Central error handler — never leaks stack traces in production. */
module.exports = function errorHandler(err, _req, res, _next) {
  const status = err.statusCode || err.status || 500;
  if (process.env.NODE_ENV !== "production") console.error(err);
  res.status(status).json({
    message: status === 500 ? "Something went wrong" : err.message,
    ...(process.env.NODE_ENV !== "production" ? { stack: err.stack } : {}),
  });
};
