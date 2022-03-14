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
  ];

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

  updateStudent(id: string, newStudent: any): Student {
    this.students.forEach((item, i) => {
      if (item._id == id) this.students[i] = { ...newStudent, _id: id };
    });
    return newStudent;
  }
}
