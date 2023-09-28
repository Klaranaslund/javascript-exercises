const removeFromArray = function(array, ...optionalArgs) {
    // Create a new array to store the elements to keep
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!optionalArgs.includes(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
