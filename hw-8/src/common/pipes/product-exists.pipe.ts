import { Injectable } from '@nestjs/common';
import { NotFoundException } from '../exceptions/not-found.exception';
import { ProductsRepository } from 'src/models/products/products.repository';

@Injectable()
export class ProductExistsPipe {
  constructor(private repository: ProductsRepository) {}

  async transform(id: number) {
    const product = await this.repository.getById(id);

    if (!product) throw new NotFoundException();

    return id;
  }
}
