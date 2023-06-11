const student = {
    name: 'kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math;
// console.log(math)

const chemistry = student['marks']['chemistry'];
const subject = student.marks['chemistry'];
// console.log(chemistry);
console.log(subject);