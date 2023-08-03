const fruits = ["apple", "orange", "cherry"];
const colors = ["red", "orange", "brown"];

const ordered_list = document.createElement("ul");

// for (let i = 0; i < fruits.length; i++) {
//   const list_items = document.createElement("li");
//   list_items.innerHTML = fruits[i];
//   list_items.style.backgroundColor = colors[i];
//   ordered_list.appendChild(list_items);
// }

fruits.forEach((fruitName, index) => {
  const list_items = document.createElement("li");
  list_items.innerHTML = fruitName;
  list_items.style.backgroundColor = colors[index];
  ordered_list.appendChild(list_items);
});

const main = document.createElement("div");
main.appendChild(ordered_list);

const body = document.getElementsByTagName("body")[0];
body.appendChild(main);

// let i = 0;
// while (i <= 30) {
//   console.log(i);
//   i = i + 2;
// }

// function interval() {
//   for (let a = 0; a <= 100; a = a + 2) {
//     console.log(a);
//   }
// }

// interval();

const intervals = (a, b) => {
  for (let i = 0; i <= a; i = i + b) {
    console.log(i);
  }
};

intervals(100, 5);
