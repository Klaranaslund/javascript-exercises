const findTheOldest = function(persons) {
    persons.sort(function(a, b) {
        const ageA = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
        const ageB = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
        return ageA > ageB ? -1 : 1;
    });

    return persons[0];
};


// Do not edit below this line
module.exports = findTheOldest;
