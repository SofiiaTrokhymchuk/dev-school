import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private repository: ProductsRepository) {}

  async create(productDto: CreateProductDto) {
    return await this.repository.create(productDto);
  }
}
