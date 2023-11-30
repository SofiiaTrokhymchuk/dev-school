const { validationResult } = require('express-validator');
const CustomerService = require('../services/CustomerService');
const { InvalidInputError } = require('../utils/custom-errors/HttpError');

class CustomerController {
  async getCustomerOrders(req, res, next) {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      next(new InvalidInputError(validationErrors));
    }

    const customerId = Number(req.params.id);
    await CustomerService.getCustomerOrders(customerId)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }
}

module.exports = new CustomerController();
