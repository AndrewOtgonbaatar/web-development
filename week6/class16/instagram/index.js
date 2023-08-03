var body = document.getElementsByTagName("body")[0];
body.style.height = "100vh";
body.style.width = "100vw";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignitems = "center";

const box = document.createElement("div");
box.style.height = "442px";
box.style.width = "350px";
box.style.border = "2px solid gray";
box.style.display = "flex";
box.style.alignItems = "center";
box.style.flexDirection = "column";

const logo = document.createElement("img");
logo.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
);
logo.style.width = "200px";
logo.style.marginTop = "40px";
logo.style.marginBottom = "40px";

const input1 = document.createElement("input");
const input2 = document.createElement("input");
input1.style.marginBottom = "15px";
const button = document.createElement("button");
button.innerHTML = "Submit";
button.style.height = "32px";
button.style.backgroundColor = "#0095F6";
button.style.color = "white";
input1.placeholder = "Phone number, username, email...";
input1.style.height = "36px";
input1.style.width = "258px";

input2.placeholder = "Password...";
input2.style.height = "36px";
input2.style.width = "258px";
input2.style.marginBottom = "40px";

box.appendChild(logo);
box.appendChild(input1);
box.appendChild(input2);
box.appendChild(button);

body.appendChild(box);
