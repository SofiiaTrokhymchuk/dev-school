import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class OrdersRepository {
  constructor(private prisma: PrismaService) {}

  getById(id: number) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  remove(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }
}
