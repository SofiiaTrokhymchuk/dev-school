const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');
const employeeValidator = require('../utils/validators/employeeValidator');
const idValidator = require('../utils/validators/idValidator');
const employeesRouter = express.Router();

employeesRouter.patch(
  '/:id',
  [idValidator, employeeValidator],
  EmployeeController.updateEmployee
);

module.exports = employeesRouter;
