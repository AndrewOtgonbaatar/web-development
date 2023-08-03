document.getElementById("input1").style.height = "30px";
document.getElementById("input1").style.width = "200px";
document.getElementById("input2").style.height = "30px";
document.getElementById("input2").style.width = "200px";

function findMax(Number1, Number2) {
  if (Number1 > Number2) {
    return Number1;
  } else if (Number2 > Number1) {
    return Number2;
  } else {
    return 0;
  }
}

document.getElementById("enter-button").addEventListener("click", function () {
  let Number1 = document.getElementById("input1").value;
  let Number2 = document.getElementById("input2").value;

  const max_number = findMax(Number(Number1), Number(Number2));
  document.getElementById("bottom-text").innerHTML =
    "The max value is " + max_number;
});

findMax(Number1, Number2);
