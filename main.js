var currentRotation = 0;

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
    currentRotation -= 90;
    turnLeft(currentRotation);
  }
  if (e.key === 'ArrowRight') {
    currentRotation += 90;
    turnRight(currentRotation);
  }
};
