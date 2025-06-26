import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly EmpData: EmployeeService) {}

  @Get()
  getEmployee() {
    return this.EmpData.getAllEmployee();
  }
  @Get(':id')
  getEmployeeById(@Param('id') id: string) {
    return this.EmpData.getEmployeeById(Number(id));
  }
}
