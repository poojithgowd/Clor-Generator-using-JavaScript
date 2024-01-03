const redValues = [0, 51, 102, 153, 204, 255];
const greenValues = [0, 51, 102, 153, 204, 255];
const blueValues = [0, 51, 102, 153, 204, 255];
function generateColor() {
  const randomRed = redValues[Math.floor(Math.random() * redValues.length)];
  const randomGreen = greenValues[Math.floor(Math.random() * greenValues.length)];
  const randomBlue = blueValues[Math.floor(Math.random() * blueValues.length)];
  const button = document.getElementById('id1');
  button.style.background = `rgb(${randomRed},${randomGreen},${randomBlue})`;
}
