const getTheTitles = function(array) {
    let bookArray = [];
    for (let i = 0; i < array.length; i++) {
        bookArray.push(array[i].title)
    }

    return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
