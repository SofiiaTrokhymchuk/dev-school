import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerExistsPipe } from 'src/common/pipes/customer-exists.pipe';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get(':id/orders')
  async getOrdersInfo(
    @Param('id', ParseIntPipe, CustomerExistsPipe) id: number,
  ) {
    return await this.customersService.getOrdersInfo(id);
  }
}
