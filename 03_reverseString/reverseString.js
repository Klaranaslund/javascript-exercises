const reverseString = function(string) {

    const myArr = string.split("");
    const newStringArray = [];

    let count = -1;
    for(let i=myArr.length-1; i>=0; i--){
        count++;
        newStringArray[count] = myArr[i];
}

let reversedString = "";
for (let i = 0; i<newStringArray.length; i++){
    reversedString+=newStringArray[i];
}

return reversedString;
    
};

// Do not edit below this line
module.exports = reverseString;
