function areaSquare(side) {
  return side * side;
}

function areaCircle(radius) {
  return Math.PI * radius * radius;
}

function areaRectangle(length, width) {
  return length * width;
}

module.exports = {
  areaCircle,
  areaRectangle,
  areaSquare,
};
