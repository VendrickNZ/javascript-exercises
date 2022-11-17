const removeFromArray = function(array, ...toRemove) {
    let toRemoveArray = [];
    for (let i = 0; i < toRemove.length; i++) {
        toRemoveArray.push(toRemove[i])
    }
    const arrayToReturn =  array.filter(function (number) {
        return !(toRemoveArray.includes(number));
    });

    return arrayToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
