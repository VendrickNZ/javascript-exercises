const palindromes = function (string) {
    string = compress(string).toLowerCase();
    stringLen = string.length;
    if (stringLen % 2 != 0) {
        half = Math.floor(stringLen / 2);
        tempArray = string.split('');
        firstHalf = tempArray.slice(0, half);
        secondHalf = tempArray.slice(half+1);

        return firstHalf.sort().join(',') == secondHalf.sort().join(',');
    }

    half = Math.ceil(stringLen/2);
    tempArray = string.split('');
    firstHalf = tempArray.slice(0, half-1);
    secondHalf = tempArray.slice(half+1);
    
    return firstHalf.sort().join(',') == secondHalf.sort().join(',');
};

function isWhiteSpace(char) {
    return " \t\n".includes(char);
}

function isPunct(char) {
    return ";:.,?!-'\"(){}".includes(char);
}

function compress(string) {
    return string
        .split("")
        .filter(char => !isWhiteSpace(char) && !isPunct(char))
        .join("");
}

// Do not edit below this line
module.exports = palindromes;
