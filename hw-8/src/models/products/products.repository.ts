import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsRepository {
  constructor(private prisma: PrismaService) {}

  getById(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  create(productDto: CreateProductDto) {
    return this.prisma.product.create({ data: { ...productDto } });
  }
}
