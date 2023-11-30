const express = require('express');
const productValidator = require('../utils/validators/productValidator');
const ProductController = require('../controllers/ProductController');
const productsRouter = express.Router();

productsRouter.post('/', productValidator, ProductController.createProduct);

module.exports = productsRouter;
