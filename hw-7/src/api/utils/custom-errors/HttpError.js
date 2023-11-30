class HttpError extends Error {
  constructor(statusCode, message, details) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}

class NotFoundError extends HttpError {
  constructor(message) {
    super(404, message);
    this.message = message;
  }
}

class InvalidInputError extends HttpError {
  constructor(details) {
    super(403, 'Fields must be filld in correctly', details);
    this.details = details;
  }
}

class InternalServerError extends HttpError {
  constructor() {
    super(500, 'Internal Server Error');
  }
}

module.exports = {
  HttpError,
  NotFoundError,
  InvalidInputError,
  InternalServerError,
};
