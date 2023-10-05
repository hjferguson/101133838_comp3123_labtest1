// Create a script with a function named lowerCaseWords that takes a mixed array as input.
// The function will do the following.
// return a promise that is resolved or rejected
// filter the non-strings and lower case the remaining words

function lowerCaseWords(array){
    return new Promise((resolve, reject) => {
        let cleanArray = []
        array.forEach(item => {
            if(typeof item === "string"){
                cleanArray.push(item.toLowerCase());
            }
        });

        if (cleanArray.length === 0){
            reject("Provided array not suitable. :c")
        } else{
            resolve(cleanArray);
        }

        
    });
}