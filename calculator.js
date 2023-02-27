// Aditya Srivastava

function squareNumber(number) {
  square = number * number;
  console.log(`The result of squaring the number ${number} is ${square}`);
  return square;
}

function halfNumber(number) {
  var result = number / 2;
  console.log(`Half of ${number} is ${result}`);
  return result;
}

function percentOf(number1, number2) {
  var percent = number1 / number2;
  console.log(`${number1} is ${percent * 100}% of ${number2}`);
  return percent;
}

function areaOfCircle(radius) {
  var area = Math.PI * (radius * radius);
  console.log(`The area for a circle with radius ${radius} is ${area}`);
  var bonus = area.toFixed(2);
  console.log(`Bonus: The area for a circle with radius ${radius} is ${bonus}`);
  return bonus;
}

function combinedFunction(number) {
  var half = halfNumber(number);
  var square = squareNumber(half);
  var area = areaOfCircle(square);
  var percent = percentOf(square, area);
  
  console.log(`The answer is ${percent}`);
}

combinedFunction(10);
