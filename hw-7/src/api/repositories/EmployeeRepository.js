const DB = require('../../db/prisma');
const {
  NotFoundError,
  InvalidInputError,
} = require('../utils/custom-errors/HttpError');

class EmployeeRepository {
  constructor() {
    this.employee = DB.prisma.employee;
  }

  async updateEmployee(id, data) {
    return this.employee
      .update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      })
      .then((data) => data)
      .catch((err) => {
        if (
          err instanceof DB.Prisma.PrismaClientKnownRequestError &&
          err.code === 'P2025'
        ) {
          throw new NotFoundError(`Employee with ID ${id} not found`);
        }

        if (err instanceof DB.Prisma.PrismaClientValidationError) {
          throw new InvalidInputError();
        }
        throw err;
      });
  }
}

module.exports = new EmployeeRepository();
