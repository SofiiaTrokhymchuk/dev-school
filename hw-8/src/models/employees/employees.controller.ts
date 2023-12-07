import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeExistsPipe } from 'src/common/pipes/employee-exists';
import { UpdateEmploeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe, EmployeeExistsPipe) id: number,
    @Body() employeeDto: UpdateEmploeeDto,
  ) {
    return this.employeesService.update(id, employeeDto);
  }
}
