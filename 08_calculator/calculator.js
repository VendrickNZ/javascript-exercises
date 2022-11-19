const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numberArray) {
    let sum = 0;
	for (let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i]
    }
    return sum;
};

const multiply = function(numberArray) {
    let total = numberArray[0];
    for (let i = 1; i < numberArray.length; i++) {
        total *= numberArray[i]
    }

    return total;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
    if (x == 0) {
        return 1;
    }
	let total = 0;
    for (let i = 1; i <= x; i++) {
        total == 0 ? total += i : total *= i;
    }
    return total;
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
