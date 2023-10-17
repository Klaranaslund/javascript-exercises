const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

/** observera 1 ist för 0 pga multiplikation och inte addition */
const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(number, power) {
  return Math.pow(number, power);
};

/** Går också att lösa med rekursion */
const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let factorial = 1;
  for (let i = num; i>0; i--){
    factorial *= i;
  }
	
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
