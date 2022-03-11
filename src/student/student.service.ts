import { Student } from '../graphql.schema';

export class StudentService {
  students: Student[] = [
    {
      _id: 'abc1',
      FirstName: 'Naveen',
      LastName: 'Bommidi',
      Standard: 7,
      FatherName: 'Gopala Krishna',
      MotherName: 'Mallikasulamma',
    },
  ]; // while testing graphql api add more test data

  getAllStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: string): Student {
    const filteredStudent = this.students.filter((_) => _._id === id)[0];
    return filteredStudent;
  }

  createStudent(newStudent: any): Student {
    this.students.push(newStudent);
    return newStudent;
  }
}
