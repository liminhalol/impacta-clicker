// |/=====[ COMPRAR BOLAS ]=====\|
const btnBuyBall = document.querySelector(".btn--buy-ball");
let x = 0;
let y = 0;

let dx = 20;
let dy = 20;

const ballsArray = [];

let ball;

function createBall(x, y, radius) {
  const ballEl = document.createElement("div");
  ballEl.classList.add("ball");

  Object.assign(ballEl.style, {
    top: `${x}px`,
    left: `${y}px`,
    width: `${radius}px`,
  });

  ballsArray.push(ballEl);
}

function drawBalls(ballEl) {
  for (ball of ballsArray) {
    document.body.appendChild(ball);
  }
}

function loop() {
  for (currentBall of ballsArray) {
    let x = parseInt(currentBall.style.top);
    let y = parseInt(currentBall.style.left);
    currentBall.style.top = `${(x += 2)}px`;
    currentBall.style.left = `${(y += 2)}px`;
  }

  setTimeout(loop, 10);
}

btnBuyBall.addEventListener("click", function (e) {
  createBall(randInt(0, 1300), randInt(0, 100), randInt(30, 80));
  drawBalls();
});

loop();
// loop();
