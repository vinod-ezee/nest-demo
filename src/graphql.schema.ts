
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface StudentInput {
    _id?: Nullable<string>;
    FirstName?: Nullable<string>;
    LastName?: Nullable<string>;
    Standard?: Nullable<number>;
    FatherName?: Nullable<string>;
    MotherName?: Nullable<string>;
}

export interface Student {
    _id?: Nullable<string>;
    FirstName?: Nullable<string>;
    LastName?: Nullable<string>;
    Standard?: Nullable<number>;
    FatherName?: Nullable<string>;
    MotherName?: Nullable<string>;
}

export interface IQuery {
    getAllStudents(): Nullable<Nullable<Student>[]> | Promise<Nullable<Nullable<Student>[]>>;
    getStudentById(id?: Nullable<string>): Nullable<Student> | Promise<Nullable<Student>>;
}

export interface IMutation {
    create(student?: Nullable<StudentInput>): Nullable<Student> | Promise<Nullable<Student>>;
    update(id?: Nullable<string>, student?: Nullable<StudentInput>): Nullable<Student> | Promise<Nullable<Student>>;
    delete(id?: Nullable<string>): Nullable<Student> | Promise<Nullable<Student>>;
}

type Nullable<T> = T | null;
