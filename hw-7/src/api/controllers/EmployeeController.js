const EmployeeService = require('../services/EmployeeService');
const { validationResult } = require('express-validator');
const { InvalidInputError } = require('../utils/custom-errors/HttpError');

class EmployeeController {
  async updateEmployee(req, res, next) {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      next(new InvalidInputError(validationErrors));
    }

    const employeeId = Number(req.params.id);
    const employeeData = req.body;
    await EmployeeService.updateEmployee(employeeId, employeeData)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }
}

module.exports = new EmployeeController();
