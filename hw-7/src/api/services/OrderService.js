const OrderRepository = require('../repositories/OrderRepository');

class OrderService {
  async deleteOrder(orderId) {
    const order = await OrderRepository.deleteOrderById(orderId);

    return order;
  }
}

module.exports = new OrderService();
