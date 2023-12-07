import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeeExistsPipe } from 'src/common/pipes/employee-exists';
import { EmployeesRepository } from './employees.repository';
import { PrismaModule } from 'src/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeesRepository, EmployeeExistsPipe],
})
export class EmployeesModule {}
