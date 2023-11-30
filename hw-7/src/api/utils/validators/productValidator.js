const { body } = require('express-validator');

const productValidator = [
  body('name')
    .exists({ checkFalsy: true })
    .withMessage('Name is required')
    .isString(),
  body('category')
    .exists({ checkFalsy: true })
    .withMessage('Category is required')
    .isString(),
  body('amount')
    .exists({ checkFalsy: true })
    .toInt()
    .isInt()
    .withMessage('Amount must be an integer'),
  body('price')
    .exists({ checkFalsy: true })
    .toFloat()
    .isFloat()
    .withMessage('Price must be a floating number'),
];

module.exports = productValidator;
