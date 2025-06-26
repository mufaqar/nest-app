import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  private employees = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Development',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Project Manager',
      department: 'Management',
      email: 'jane.smith@example.com',
    },
    {
      id: 3,
      name: 'Ahmed Khan',
      position: 'UI/UX Designer',
      department: 'Design',
      email: 'ahmed.khan@example.com',
    },
    {
      id: 4,
      name: 'Emily Chen',
      position: 'QA Analyst',
      department: 'Quality Assurance',
      email: 'emily.chen@example.com',
    },
    {
      id: 5,
      name: 'Carlos Ruiz',
      position: 'DevOps Engineer',
      department: 'Operations',
      email: 'carlos.ruiz@example.com',
    },
  ];

  getAllEmployee() {
    return this.employees;
  }
  getEmployeeById(id: number) {
    return this.employees.find((emp) => emp.id === id);
  }
  
}
