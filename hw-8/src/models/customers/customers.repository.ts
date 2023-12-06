import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class CustomersRepository {
  constructor(private prisma: PrismaService) {}

  getById(id: number) {
    return this.prisma.customer.findUnique({ where: { id } });
  }

  getOrders(id: number) {
    return this.prisma.order.findMany({ where: { customerId: id } });
  }

  getProductsFromOrders(orders: Order[]) {
    return this.prisma.productsInOrders.findMany({
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
