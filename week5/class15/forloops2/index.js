const student_details = [
  { name: "John", age: 14, gender: "male", course: "history", grade: 90 },
  { name: "Sarah", age: 13, gender: "female", course: "history", grade: 50 },
  { name: "Bob", age: 14, gender: "male", course: "biology", grade: 95 },
  { name: "Noah", age: 13, gender: "male", course: "history", grade: 75 },
  { name: "joe", age: 14, gender: "male", course: "math", grade: 85 },
];

// for (let i = 0; i < student_details.length; i++) {
//   if (student_details[i].grade > 80) {
//     console.log(
//       student_details[i].name +
//         "---COngrats on passing " +
//         student_details[i].course +
//         " test"
//     );
//   } else {
//     console.log(
//       student_details[i].name +
//         "---Sorry, but you suck at " +
//         student_details[i].course
//     );
//   }
// }

for (i = 0; i < student_details.length; i++) {
  student_details[i].course = "music";
}
console.log(student_details);

// for (let i = 0; i < students.length; i++) {
//   for (let props in students[i]) {
//     console.log(students[i][props]);
//   }
// }
