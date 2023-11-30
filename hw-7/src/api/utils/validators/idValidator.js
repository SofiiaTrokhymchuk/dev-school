const { param } = require('express-validator');

const idValidator = [
  param('id').toInt().isInt().withMessage('Id must be an integer'),
];

module.exports = idValidator;
