import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get()
  getEmp() {
    return 'Employee Fetch successfully';
  }
}
