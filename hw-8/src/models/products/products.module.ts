import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { ProductExistsPipe } from 'src/common/pipes/product-exists.pipe';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository, ProductExistsPipe],
})
export class ProductsModule {}
