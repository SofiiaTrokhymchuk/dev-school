const EmployeeRepository = require('../repositories/EmployeeRepository');

class EmployeeService {
  async updateEmployee(employeeId, employeeData) {
    const employee = await EmployeeRepository.updateEmployee(
      employeeId,
      employeeData
    );

    return employee;
  }
}

module.exports = new EmployeeService();
