interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "fn1",
    lastName: "ln2",
    age: 1,
    location: "here",
}

const student2: Student = {
    firstName: "fn2",
    lastName: "ln2",
    age: 2,
    location: "there",
}

let studentsList: Student[] = [student1, student2];
