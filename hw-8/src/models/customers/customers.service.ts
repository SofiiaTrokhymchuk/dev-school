import { Injectable } from '@nestjs/common';
import { CustomersRepository } from './customers.repository';

@Injectable()
export class CustomersService {
  constructor(private repository: CustomersRepository) {}

  async getOrdersInfo(id: number) {
    const orders = await this.repository.getOrders(id);
    const products = await this.repository.getProductsFromOrders(orders);

    const totalDeliveryCost = orders.reduce(
      (prev, curr) => prev + curr.deliveryCost.toNumber(),
      0,
    );
    const totalCost = products
      .reduce(
        (prev, curr) => prev + curr.product.price.toNumber() * curr.amount,
        totalDeliveryCost,
      )
      .toFixed(2);

    return { orders, totalCost };
  }
}
