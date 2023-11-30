const { body } = require('express-validator');

const employeeValidator = [
  body('firstName')
    .optional()
    .exists({ checkFalsy: true })
    .withMessage('First name is required')
    .isString()
    .trim()
    .isLength({ max: 50 })
    .withMessage('First name should be less or equal 50 characters'),
  body('lastName')
    .optional()
    .exists({ checkFalsy: true })
    .withMessage('Last name is required')
    .isString()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Last name should be less or equal 50 characters'),
  body('middleName')
    .optional()
    .isString()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Middle name should be less or equal 50 characters'),
  body('position')
    .optional()
    .exists({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ min: 2 })
    .withMessage('Position should be at least 2 characters'),
];

module.exports = employeeValidator;
