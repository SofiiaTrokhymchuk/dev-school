import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './database/prisma/prisma.module';
import { ProductsModule } from './models/products/products.module';
import { CustomersModule } from './models/customers/customers.module';
import { EmployeesModule } from './models/employees/employees.module';
import { OrdersModule } from './models/orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    ProductsModule,
    CustomersModule,
    EmployeesModule,
    OrdersModule,
  ],
})
export class AppModule {}
