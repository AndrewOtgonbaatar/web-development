// for (let a = 1; a < 101; a = a + 2) {
//   console.log(a);
// }

// const numbers = [1, 2, 3, 12, 24, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 1) {
//     console.log(numbers[i]);
//   }
// }

// console.log(numbers[4]);

// const names = [
//   "Alexander",
//   "Elizabeth",
//   "John",
//   "Jane",
//   "Jack",
//   "Jill",
//   "James",
// ];

// for (let i = 0; i < names.length; i++) {
//   if (names[i].length >= 5) {
//     console.log(names[i]);
//   }
// }
// const combinations = [1, "Alexander", true, 2, "Elizabeth", false];

// for (let i = 0; i < combinations.length; i++) {
//   if (typeof combinations[i] == "boolean") {
//     console.log(combinations[i]);
//   }
// }

// const names = ["Sam", "Lisa", "Micha", "Dave", "Wyatt", "Emma", "Sage"];

// for (i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

const list1 = [2, 3, 76, 4, 5, 7, 8, 9, 10];
console.log(list1);

const list2 = [];
for (i = 0; i < list1.length; i++) {
  let a = list1[i] * list1[i];
  list2.push(a);
}
console.log(list2);
