const sumAll = function(min, max) {
  if (min > max) {
  const temp = min;
  min = max;
  max = temp;
  }
  let sum = 0;
    for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll(123, 1)

// Do not edit below this line
module.exports = sumAll;
