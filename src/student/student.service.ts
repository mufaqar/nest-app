import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Ali Raza',
      age: 20,
    },
    {
      id: 2,
      name: 'Sara Khan',
      age: 19,
    },
    {
      id: 3,
      name: 'Usman Ahmed',
      age: 21,
    },
  ];

  getAllStudent() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((stu) => stu.id === id);
    if (!student) throw new NotFoundException('Student Not Found');
    return student;
  }

  // Post Student

  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }
  // Put
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((stu) => stu.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found');
    this.students[index] = { id, ...data };
    return this.students[index];
  }
  // Patch

  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }

  // Delete

  deleteStudent(id: number) {
    const index = this.students.findIndex((stu) => stu.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found');
    const deleted = this.students.splice(index, 1);
    return { message: 'Student Deleted', student: deleted[0] };
  }
}
