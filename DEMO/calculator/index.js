let answer = "";
let hidden_operation = "";
function appendToTheString(x) {
  answer = answer + x;
  hidden_operation = hidden_operation + x;
  document.getElementById("numbers").innerHTML = answer;
}

function calculate() {
  const final_answer = eval(hidden_operation);
  answer = eval(answer);
  hidden_operation = eval(hidden_operation);
  document.getElementById("numbers").innerHTML = final_answer;
}

function remove() {
  answer = "";
  hidden_operation = "";
  document.getElementById("numbers").innerHTML = "0";
}

function dell() {
  answer = answer.substring(0, answer.length - 1);
  document.getElementById("numbers").innerHTML = answer;
  if (answer <= 0) {
    document.getElementById("numbers").innerHTML = "0";
  }
}

function percentages() {
  answer = answer + "%";
  hidden_operation = hidden_operation + "/" + "100";
  document.getElementById("numbers").innerHTML = answer;
}
