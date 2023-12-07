import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { CustomersRepository } from './customers.repository';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { CustomerExistsPipe } from 'src/common/pipes/customer-exists.pipe';

@Module({
  imports: [PrismaModule],
  controllers: [CustomersController],
  providers: [CustomersRepository, CustomersService, CustomerExistsPipe],
})
export class CustomersModule {}
