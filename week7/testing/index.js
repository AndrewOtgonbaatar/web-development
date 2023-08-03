// Game Board
let board_height = 400;
let board_width = 800;

// Sonic
let sonicWidth = 50;
let sonicHeight = 50;
let sonicX = 0;
let sonicY = board_height - sonicHeight;
let sonic = {
  x: sonicX,
  y: sonicY,
  width: sonicWidth,
  height: sonicHeight,
};

// Obstacle
let obstacleArray = [];
let obstacleWidth = 50;
let obstacleHeight = 50;
let obstacleX = 800;
let obstacleY = board_height - obstacleHeight;
let obstacle_image;

//rings
let ringsArray = [];
let ringsWidth = 50;
let ringsHeight = 50;
let ringsX = 800;
let ringsY = board_height - ringsHeight;
let obstacle_image2;

// Game physics
let velocityX = -8;
let velocityY = 0;
let gravity = 0.4;

let gameOver = false;
let startGame = false;

// Score
let score = 0;

//ring counter
let ring_counter = 0;

function start() {
  startGame = true;
  requestAnimationFrame(update);
}

window.onload = function () {
  const myCanvas = document.getElementById("board");
  const board = myCanvas.getContext("2d");
  board.fillStyle = "grey";
  board.fillRect(0, 0, board_width, board_height);

  const sonic_canvas = myCanvas.getContext("2d");
  sonic_image = new Image();
  sonic_image.src =
    "https://i.pinimg.com/originals/f6/4c/a7/f64ca7d4beb9865d2ed5145d120f0c56.gif";

  sonic_image.onload = function () {
    sonic_canvas.drawImage(
      sonic_image,
      sonic.x,
      sonic.y,
      sonic.width,
      sonic.height
    );
  };

  obstacle_image = new Image();
  obstacle_image.src = "./images/image.webp";

  obstacle_image2 = new Image();
  obstacle_image2.src = "./images/ring.png";

  requestAnimationFrame(update);
  setInterval(placeObstacle, 1000);

  document.addEventListener("keydown", moveSonic);
};

function update() {
  if (gameOver) {
    return;
  }

  if (!startGame) {
    return;
  }

  requestAnimationFrame(update);

  const sonic_canvas = document.getElementById("board").getContext("2d");
  sonic_canvas.clearRect(0, 0, board_width, board_height);

  velocityY += gravity;
  sonic.y = Math.min(sonic.y + velocityY, sonicY);

  sonic_canvas.drawImage(
    sonic_image,
    sonic.x,
    sonic.y,
    sonic.width,
    sonic.height
  );

  for (let i = 0; i < obstacleArray.length; i++) {
    let obstacle = obstacleArray[i];
    obstacle.x += velocityX;
    sonic_canvas.drawImage(
      obstacle.img,
      obstacle.x,
      obstacle.y,
      obstacle.width,
      obstacle.height
    );

    if (detectCollision(sonic, obstacle)) {
      gameOver = true;
      sonic_image.src = "./images/sonicdead.webp";
      sonic_image.onload = function () {
        sonic_canvas.drawImage(
          sonic_image,
          sonic.x,
          sonic.y,
          sonic.width,
          sonic.height
        );
      };
    }
  }

  for (let i = 0; i < obstacle2Array.length; i++) {
    let obstacle2 = obstacle2Array[i];
    obstacle2.x += velocityX;
    sonic_canvas.drawImage(
      obstacle2.img,
      obstacle2.x,
      obstacle2.y,
      obstacle2.width,
      obstacle2.height
    );

    if (detectCollision(sonic, obstacle2)) {
      ring_counter = ring_counter + 1;
    }
  }

  // Score
  sonic_canvas.fillStyle = "black";
  sonic_canvas.font = "20px courier";
  score++;
  sonic_canvas.fillText(score, 5, 20);

  sonic_canvas.fillStyle = "black";
  sonic_canvas.font = "20px courier";
  sonic_canvas.fillText(ring_counter, 20, 20);
}

function moveSonic(e) {
  if (gameOver) {
    return;
  }

  console.log(e.code);

  const rollInterval = 500;

  if (e.code === "ArrowDown") {
    roll();
    setTimeout(unroll, rollInterval);
  } else if (
    (e.code === "Space" || e.code === "ArrowUp") &&
    sonic.y === sonicY
  ) {
    velocityY = -8;
  }
}

//placing obstacle

function placeObstacle() {
  if (gameOver) {
    return;
  }

  let obstacle = {
    img: null,
    x: obstacleX,
    y: obstacleY,
    width: null,
    height: obstacleHeight,
  };

  let placeObstacleChance = Math.random();

  if (placeObstacleChance < 0.85) {
    obstacle.img = obstacle_image;
    obstacle.width = obstacleWidth;
    obstacleArray.push(obstacle);
  }

  if (obstacleArray.length > 5) {
    obstacleArray.shift();
  }
}

//placing rings

function placeObstacle2() {
  if (gameOver) {
    return;
  }

  let obstacle2 = {
    img: null,
    x: obstacle2X,
    y: obstacle2Y,
    width: null,
    height: obstacle2Height,
  };

  let placeObstacle2Chance = Math.random();

  if (placeObstacle2Chance < 0.85) {
    obstacle2.img = obstacle_image2;
    obstacle2.width = obstacle2Width;
    obstacle2Array.push(obstacle2);
  }

  if (obstacle2Array.length > 5) {
    obstacle2Array.shift();
  }
}

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function roll() {
  sonic_image.src = "./images/roll.gif";
  const sonic_canvas = document.getElementById("board").getContext("2d");
  sonic_canvas.drawImage(
    sonic_image,
    sonic.x,
    sonic.y,
    sonic.width,
    sonic.height
  );
}

function unroll() {
  sonic_image.src =
    "https://i.pinimg.com/originals/f6/4c/a7/f64ca7d4beb9865d2ed5145d120f0c56.gif";
  const sonic_canvas = document.getElementById("board").getContext("2d");
  sonic_canvas.drawImage(
    sonic_image,
    sonic.x,
    sonic.y,
    sonic.width,
    sonic.height
  );
}
