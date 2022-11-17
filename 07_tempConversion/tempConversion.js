const ftoc = function(temperature) {
    return +((temperature - 32) * (5/9)).toFixed(1)
};

const ctof = function(temperature) {
    return +((temperature * 9/5) + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
