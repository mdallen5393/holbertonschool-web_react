/// <reference path='./subjects/Cpp.ts' />
/// <reference path='./subjects/React.ts' />
/// <reference path='./subjects/Java.ts' />
/// <reference path='./subjects/Subject.ts' />
/// <reference path='./subjects/Teacher.ts' />

export const cpp = new Subjects.Cpp();
export const react = new Subjects.React();
export const java = new Subjects.Java();

export const cTeacher: Subjects.Teacher = {
    experienceTeachingC: 10
};

cpp.teacher = cTeacher;
console.log('C++');
console.log('\tgetRequirements: ', cpp.getRequirements());
console.log('\tgetAvailableTeacher: ', cpp.getAvailableTeacher());
react.teacher = cTeacher;
console.log('React');
console.log('\tgetRequirements: ', react.getRequirements());
console.log('\tgetAvailableTeacher: ', react.getAvailableTeacher());
java.teacher = cTeacher;
console.log('Java');
console.log('\tgetRequirements: ', java.getRequirements());
console.log('\tgetAvailableTeacher: ', java.getAvailableTeacher());
