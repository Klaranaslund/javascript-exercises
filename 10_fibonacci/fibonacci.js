const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    if (index === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;
    
    /**pekare som flyttas fram för varje varv */
    for (let i = 2; i <= index; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};

module.exports = fibonacci;
