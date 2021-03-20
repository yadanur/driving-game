var currentRotation = 0;
var isMoving = 0;
var timeOutId;

function turnLeft(X) {
  var image = document.getElementById('race-car');
  image.style.transform = 'rotate(' + X + 'deg)';
}

function turnRight(X) {
  var image = document.getElementById('race-car');
  image.style.transform = 'rotate(' + X + 'deg)';
}

document.onkeydown = function (e) {
  if (e.key === 'ArrowLeft') {
    currentRotation = (currentRotation - 90) % 360; // Decrease the degree while preventing the value go less than -360 degrees
    turnLeft(currentRotation);
  }
  if (e.key === 'ArrowRight') {
    currentRotation = (currentRotation + 90) % 360; // Increase the degree while preventing the value go over 360 degrees
    turnRight(currentRotation);
  }
  // Stop and Restart the car
  if (e.key === 'ArrowDown' && isMoving === 1) {
    clearInterval(timeOutId);
    isMoving = 0;
  }
  if (e.key === 'ArrowUp' && isMoving === 0) {
    timeOutId = window.setInterval(moveCar, 10);
    isMoving = 1;
  }
};

function moveCar() {
  isMoving = 1;
  var x = document.getElementById('race-car').offsetLeft;
  var y = document.getElementById('race-car').offsetTop;

  if (currentRotation === 0) { // Facing to the right
    x += 1;
    document.getElementById('race-car').style.left = x + 'px';
  } else if (currentRotation === 90 || currentRotation === -270) { // Facing down
    y += 1;
    document.getElementById('race-car').style.top = y + 'px';
  } else if (currentRotation === 180 || currentRotation === -180) { // Facing to the left
    x -= 1;
    document.getElementById('race-car').style.left = x + 'px';
  } else if (currentRotation === 270 || currentRotation === -90) { // Facing up
    y -= 1;
    document.getElementById('race-car').style.top = y + 'px';
  }
}
