import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UpdateEmploeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesRepository {
  constructor(private prisma: PrismaService) {}

  getById(id: number) {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  update(id: number, employeeDto: UpdateEmploeeDto) {
    return this.prisma.employee.update({
      where: { id },
      data: { ...employeeDto },
    });
  }
}
