const fibonacci = function(n) {

    if (n < 0) {
        return "OOPS"
    }
    
    if (n <= 2) {
        return 1;
    }

    let firstN = 1;
    let secondN = 1;
    let currentN = 0;

    for (let i = 2; i < n; i++) {
        currentN = firstN + secondN;
        firstN = secondN;
        secondN = currentN;
    }

    return currentN;
};

// Do not edit below this line
module.exports = fibonacci;
