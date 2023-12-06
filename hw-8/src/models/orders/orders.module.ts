import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersRepository } from './orders.repository';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { OrderExistsPipe } from 'src/common/pipes/order-exists.pipe';

@Module({
  imports: [PrismaModule],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository, OrderExistsPipe],
})
export class OrdersModule {}
