import {
  Controller,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderExistsPipe } from 'src/common/pipes/order-exists.pipe';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe, OrderExistsPipe) id: number) {
    this.ordersService.remove(id);
    return;
  }
}
