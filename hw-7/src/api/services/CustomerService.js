const CustomerRepository = require('../repositories/CustomerRepository');
const OrderRepository = require('../repositories/OrderRepository');
const ProductsInOrdersRepository = require('../repositories/ProductsInOrdersRepository');
const { NotFoundError } = require('../utils/custom-errors/HttpError');

class CustomerService {
  async getCustomerOrders(customerId) {
    const customer = await CustomerRepository.getCustomerById(customerId);
    if (!customer) {
      throw new NotFoundError(`Customer with ID ${customerId} not found`);
    }

    const orders = await OrderRepository.getOrdersByCustomerId(customerId);
    const productsInOrders =
      await ProductsInOrdersRepository.getProductsFromOrders(orders);

    const totalDeliveryCost = orders.reduce(
      (prev, curr) => prev + parseFloat(curr.deliveryCost),
      0
    );
    const totalCost = productsInOrders.reduce(
      (prev, curr) => prev + parseFloat(curr.product.price) * curr.amount,
      totalDeliveryCost
    );

    return { orders, totalCost };
  }
}

module.exports = new CustomerService();
