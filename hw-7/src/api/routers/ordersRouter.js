const express = require('express');
const OrderController = require('../controllers/OrderController');
const idValidator = require('../utils/validators/idValidator');
const ordersRouter = express.Router();

ordersRouter.delete('/:id', idValidator, OrderController.deleteOrder);

module.exports = ordersRouter;
