import { Injectable } from '@nestjs/common';
import { OrdersRepository } from 'src/models/orders/orders.repository';
import { NotFoundException } from '../exceptions/not-found.exception';

@Injectable()
export class OrderExistsPipe {
  constructor(private repository: OrdersRepository) {}

  async transform(id: number) {
    const order = await this.repository.getById(id);

    if (!order) throw new NotFoundException();

    return id;
  }
}
