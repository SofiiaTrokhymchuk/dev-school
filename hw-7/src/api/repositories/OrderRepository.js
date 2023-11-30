const DB = require('../../db/prisma');
const { NotFoundError } = require('../utils/custom-errors/HttpError');

class OrderRpository {
  constructor() {
    this.order = DB.prisma.order;
  }

  async getOrdersByCustomerId(id) {
    return this.order.findMany({ where: { customerId: id } });
  }

  async deleteOrderById(id) {
    const deleteOrder = this.order.delete({
      where: {
        id,
      },
    });

    const deleteProducts = DB.prisma.productsInOrders.deleteMany({
      where: {
        orderId: id,
      },
    });

    const [count, order] = await DB.prisma
      .$transaction([deleteProducts, deleteOrder])
      .then((data) => data)
      .catch((err) => {
        if (
          err instanceof DB.Prisma.PrismaClientKnownRequestError &&
          err.code === 'P2025'
        ) {
          throw new NotFoundError(`Order with ID ${id} not found`);
        }
        throw err;
      });

    return order;
  }
}

module.exports = new OrderRpository();
