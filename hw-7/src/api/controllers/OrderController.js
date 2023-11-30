const { validationResult } = require('express-validator');
const OrderService = require('../services/OrderService');
const { InvalidInputError } = require('../utils/custom-errors/HttpError');

class OrderController {
  async deleteOrder(req, res, next) {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      next(new InvalidInputError(validationErrors));
    }

    const orderId = Number(req.params.id);
    await OrderService.deleteOrder(orderId)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }
}

module.exports = new OrderController();
