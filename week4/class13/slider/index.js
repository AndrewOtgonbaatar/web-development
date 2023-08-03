document.getElementById("myRange").oninput = function () {
  const value = document.getElementById("myRange").value;
  document.getElementById("value-number").innerHTML = value;
  let penalty = (value - 70) / 5;

  if (value < 70) {
    document.getElementById("speedlimit").innerHTML = "Good, Safe Driving";
    document.getElementById("penalties").innerHTML = "0";
    document.getElementById("image1").src =
      "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/60301/thumb-up-emoji-clipart-xl.png";
  } else if (value > 71) {
    document.getElementById("speedlimit").innerHTML =
      "Speed Limit Crossed by Penalty Point";
    document.getElementById("penalties").innerHTML = "+" + penalty;
    document.getElementById("image1").src =
      "https://www.maxpixel.net/static/photo/640/Cop-Officer-Policeman-Uniform-Stop-Security-Guard-23796.png";
  }

  if (penalty == 10) {
    document.getElementById("speedlimit").innerHTML = "LICENSE SUSPENDED";
    document.getElementById("image1").src =
      "https://1000logos.net/wp-content/uploads/2023/05/Skull-Emoji.png";
  }
};
