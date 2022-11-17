const sumAll = function(x, y) {
    // let it be known that i despise isNaN ignoring strings
    
    let sum = 0;
    //console.log(typeof(x), typeof(y), isNaN(x), isNaN(y))
    if ((x < 0 || y < 0) || (isNaN(x) || isNaN(y)) || (typeof(x) === 'string' || typeof(y) === 'string')) {
        return "ERROR";
    }
    
    if (x > y) {
        temp = y;
        y = x;
        x = temp;
    }

    for (x; x <= y; x++) {
        sum += x;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
