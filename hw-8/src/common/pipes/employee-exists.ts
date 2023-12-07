import { Injectable, PipeTransform } from '@nestjs/common';
import { EmployeesRepository } from 'src/models/employees/employees.repository';
import { NotFoundException } from '../exceptions/not-found.exception';

@Injectable()
export class EmployeeExistsPipe implements PipeTransform {
  constructor(private repository: EmployeesRepository) {}

  async transform(id: number) {
    const employee = await this.repository.getById(id);

    if (!employee) throw new NotFoundException();

    return id;
  }
}
