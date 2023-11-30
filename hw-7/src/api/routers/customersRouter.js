const express = require('express');
const CustomerController = require('../controllers/CustomerController');
const idValidator = require('../utils/validators/idValidator');
const customersRouter = express.Router();

customersRouter.get(
  '/:id/orders',
  idValidator,
  CustomerController.getCustomerOrders
);

module.exports = customersRouter;
