const DB = require('../../db/prisma');

class CustomerRepository {
  constructor() {
    this.customer = DB.prisma.customer;
  }

  async getCustomerById(id) {
    return this.customer.findUnique({
      where: {
        id,
      },
    });
  }
}

module.exports = new CustomerRepository();
