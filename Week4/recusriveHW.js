const flattenArr = (arr) => {
    // example: [1, 2, 3, [4, 5]] = [1, 2, 3, 4, 5]

    let outputArr = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            flattenArr(element).forEach(x => {
                outputArr.push(x);
            })
        } else {
            outputArr.push(element);
        }
    });

    return outputArr;
}
// console.log(flattenArr([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); 


const capitalizeWords = (array, index = 0) => {
    // let words = ['tony', 'kim']; 
    // capitalizedAllLetters(words); // ['TONY', 'KIM']
    if (index === array.length) {
        return;
    }

    // checks if element is string
    if (typeof array[index] === 'string'){
        array[index] = array[index].toUpperCase();
        capitalizeWords(array, index += 1);
        return array;
    } 
}
// console.log(capitalizeWords(['tony', 'kim', 2]));



function factorial(x) {
    // e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1
    if (x <= 1) {
        return x;
    }

    return x * factorial(x - 1);
}
// console.log(factorial(10));



function collectStrings(obj, index) {
    if (obj = {}) {
        return;
    }

    const answer = [];
    // const keys = Object.keys(obj);
Object.keys()
    return answer;
}

console.log(collectStrings({ a: "string", b: 2, c: "three"}));