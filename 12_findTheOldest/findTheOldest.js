// i think this got much longer than necessary, particularly with the number of variables perhaps
const findTheOldest = function(array) {
    let oldestIfDead = -Infinity;
    let oldestIfAlive = Infinity;
    let oldestPersonIfAlive;
    let oldestPersonIfDead;

    for (let i = 0; i < array.length; i++) {
        if (array[i].yearOfDeath === undefined) {
            if (array[i].yearOfBirth < oldestIfAlive) {
                oldestIfAlive = array[i].yearOfBirth
                oldestPersonIfAlive = array[i]
            }
        } else {
            let difference = (array[i].yearOfDeath - array[i].yearOfBirth)
            if (difference > oldestIfDead) {
                oldestIfDead = difference;
                oldestPersonIfDead = array[i]
            }
        }
    }
    if ((2022 - oldestIfAlive) > oldestIfDead) {
        return oldestPersonIfAlive
    }
    return oldestPersonIfDead;

};

// Do not edit below this line
module.exports = findTheOldest;
