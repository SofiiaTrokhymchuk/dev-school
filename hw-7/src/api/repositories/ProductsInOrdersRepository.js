const DB = require('../../db/prisma');

class ProductsInOrdersRepository {
  constructor() {
    this.productsInOrders = DB.prisma.productsInOrders;
  }

  async getProductsFromOrders(orders) {
    return this.productsInOrders.findMany({
      where: {
        orderId: {
          in: orders.map((o) => o.id),
        },
      },
      select: {
        product: {
          select: {
            price: true,
          },
        },
        amount: true,
      },
    });
  }
}

module.exports = new ProductsInOrdersRepository();
