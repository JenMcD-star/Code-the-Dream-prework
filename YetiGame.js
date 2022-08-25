var snowX = 0;
var snowY = 0;
var cloudCover = 0;
var birdFlight = 31;
var snowball = 0;
var snowball2 = 0;
var userInput = null;
var sun = 0;

function setup() {
  createCanvas(1000, 1000);
}

function startGame() {
  userInput = prompt("do you want to play? Type yes or no.").toLowerCase();
  while (userInput !== "no" && userInput !== "yes") {
    userInput = prompt("You need to enter yes or no.");
  }
  if (userInput === "no") {
    alert("okay, bye then. Refresh the page if you change your mind.");
    background(1);
  }
}
//startGame is called outside of the draw function so if the user selects no the animation can't be seen.
startGame();

draw = function () {
  if (mouseX < 410) {
    background(61, 53, 102);
    letItSnow();
  } else {
    hereComesTheSun();
    makeBirds();
  }
  makeMountain();
  yetiAppears();
  makePerson(mouseX, mouseY);
  youDied();
};

function makeYeti() {
  //cave
  fill(15, 13, 13);
  ellipse(201, 347, 100, 100);
  //monster
  fill(232, 223, 223);
  ellipse(201, 347, 38, 33);
  ellipse(201, 387, 50, 50);
  fill(255, 0, 0);
  ellipse(201, 361, 19, 10);
  fill(47, 0, 255);
  ellipse(209, 349, 9, 7);
  ellipse(195, 349, 9, 7);
  fill(112, 53, 53);
  rect(163, 378, 18, 10);
  rect(221, 378, 18, 10);
  rect(232, 337, 9, 50);
  rect(161, 337, 9, 50);
  //snowballs
  fill(229, 240, 74);
  ellipse(245, snowball, 50, 50);
  ellipse(161, snowball, 50, 50);
}

function makeYeti2() {
  //monster
  fill(100);
  ellipse(501, 527, 68, 63);
  ellipse(501, 587, 80, 80);
  fill(255, 0, 0);
  ellipse(501, 530, 19, 10);
  fill(47, 0, 255);
  ellipse(490, 515, 9, 7);
  ellipse(510, 515, 9, 7);
  fill(112, 53, 53);
  rect(500, 580, 38, 10);
  rect(435, 558, 38, 10);
  //snowballs
  fill(229, 240, 74);
  ellipse(snowball2, 555, 70, 70);
}

function yetiAppears() {
  if (mouseX < 350 && mouseX > 80) {
    makeYeti();
  }
  if (mouseX > 0 && mouseX < 550) {
    makeYeti2();
  }
}
function youDied() {
  if (
    (mouseY === snowball && mouseX > 220 && mouseX < 270) ||
    (mouseY === snowball && mouseX > 136 && mouseX < 186)
  ) {
    snowball -= 0;
    background(255, 0, 0);
    fill(0, 26, 255);
    textSize(100);
    text("ouch!!", 200, 350);
  } else if (snowball === 0) {
    snowball = 337;
  } else {
    snowball -= 1;
  }

  if (mouseX === snowball2 && mouseY > 500 && mouseY < 600) {
    snowball2 -= 0;
    background(255, 0, 0);
    fill(0, 26, 255);
    textSize(100);
    text("ouch!!", 200, 350);
  } else if (snowball2 === 0) {
    snowball2 = 505;
  } else {
    snowball2 -= 1;
  }
}

function makeMountain() {
  fill(148, 140, 148);
  triangle(8, 400, 200, 50, 400, 400);

  fill(242, 237, 237);
  triangle(123, 192, 279, 188, 201, 51);
  //house
  rect(0, 400, 1000, 500);

  fill(180);
  rect(630, 250, 10, 100);

  fill(225, 225, 135);
  rect(550, 300, 100, 100);

  fill(153, 51, 51);
  triangle(550, 300, 650, 300, 600, 200);
  rect(583, 350, 30, 50);
  //windows
  fill(204, 102, 0);
  rect(620, 360, 20, 20);
  rect(555, 360, 20, 20);
  rect(620, 320, 20, 20);
  rect(555, 320, 20, 20);
}

function getRandom() {
  return Math.floor(Math.random() * 1000) + 1;
}

function makeSnow(snowX, snowY) {
  fill(245, 237, 237);
  ellipse(snowX, snowY, 10, 10);
}

function letItSnow() {
  makeSnow(getRandom(), getRandom());
  makeSnow(getRandom(), getRandom());
  makeSnow(getRandom(), getRandom());
  makeSnow(getRandom(), getRandom());
  makeSnow(getRandom(), getRandom());
  makeSnow(getRandom(), getRandom());
  makeSnow(getRandom(), getRandom());
  makeSnow(getRandom(), getRandom());
  makeSnow(getRandom(), getRandom());
  makeSnow(getRandom(), getRandom());
  makeClouds(112);
}

function makeBirds() {
  noStroke();
  fill(255, 0, 0);
  ellipse(birdFlight, 139, 22, 15);
  triangle(birdFlight - 17, 149, birdFlight - 11, 138, birdFlight - 17, 131);
  triangle(birdFlight - 14, 114, birdFlight - 8, 132, birdFlight + 12, 136);
  fill(235, 141, 141);
  triangle(birdFlight + 6, 141, birdFlight + 6, 134, birdFlight + 28, 137);

  if (birdFlight === 1000) {
    birdFlight = 31;
  } else {
    birdFlight += 2;
  }
}

function hereComesTheSun() {
  background(94, 165, 196);
  makeClouds(500);
  fill(255, 242, 0);
  ellipse(sun, 68, 134, 118);
  sun += 0.5;

  if (mouseX > 550) {
    background(224, 143, 224);
    textSize(50);
    fill(255, 0, 0);
    text("you made it!", 250, 137);
  }
}

function makeClouds(color) {
  fill(color);
  noStroke();
  for (cloudCover = 10; cloudCover < 1000; cloudCover += 100) {
    ellipse(cloudCover + 50, 25, 150, 97);
    ellipse(cloudCover, 54, 100, 100);
  }
}

function makePerson(mouseX, mouseY) {
  //face
  fill(240, 215, 88);
  ellipse(mouseX, mouseY, 15, 15);
  fill(255, 0, 0);
  //eyes and mouth
  ellipse(mouseX, mouseY + 2, 2, 2);
  fill(26, 24, 24);
  ellipse(mouseX - 4, mouseY - 1, 2, 2);
  ellipse(mouseX + 4, mouseY - 1, 2, 2);
  //body
  fill(214, 77, 214);
  rect(mouseX - 10, mouseY + 5, 20, 20);
  //legs
  fill(109, 78, 230);
  rect(mouseX - 10, mouseY + 20, 20, 20);
  //skis
  fill(15, 14, 14);
  rect(mouseX - 10, mouseY + 35, 30, 5);
  //arms
  fill(214, 77, 214);
  rect(mouseX - 10, mouseY + 5, 40, 5);
  //pole
  fill(26, 20, 20);
  rect(mouseX + 29, mouseY + 10, 5, 30, 10);
}
