import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from './employees.repository';
import { UpdateEmploeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private repository: EmployeesRepository) {}

  async update(id: number, employeeDto: UpdateEmploeeDto) {
    return await this.repository.update(id, employeeDto);
  }
}
