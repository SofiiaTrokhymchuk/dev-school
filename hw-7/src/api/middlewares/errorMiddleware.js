const {
  HttpError,
  InternalServerError,
} = require('../utils/custom-errors/HttpError');

const errorMiddleware = (err, req, res, next) => {
  console.error(err);
  if (err instanceof HttpError) {
    return res
      .status(err.statusCode)
      .json({ error: err.message, details: err.details });
  }
  const serverError = new InternalServerError();
  res.status(serverError.statusCode).json({ error: serverError.message });
};

module.exports = errorMiddleware;
