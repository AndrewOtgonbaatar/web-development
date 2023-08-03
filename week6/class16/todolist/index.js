const tasks = ["Buy Cheese, Do Laundry, Homework Due Tomorrow, etc..."];

const ulist = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

document.getElementById("add-button").addEventListener("click", function () {
  for (i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
  }
  const update = input.value;

  document.getElementById("unordered").innerHTML = tasks + update;
});

console.log(tasks);
