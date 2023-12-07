import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private repository: OrdersRepository) {}

  async remove(id) {
    return await this.repository.remove(id);
  }
}
