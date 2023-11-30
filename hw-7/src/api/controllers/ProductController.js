const { validationResult } = require('express-validator');
const { InvalidInputError } = require('../utils/custom-errors/HttpError');
const ProductService = require('../services/ProductService');

class ProductController {
  async createProduct(req, res, next) {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      next(new InvalidInputError(validationErrors));
    }

    const productData = req.body;
    await ProductService.createProduct(productData)
      .then((data) => res.status(201).json(data))
      .catch((err) => next(err));
  }
}

module.exports = new ProductController();
