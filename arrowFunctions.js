// Sum of Two Numbers:
let a = 10;
let b = 5;

function add (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b

console.log(add(a,b))
console.log(addArrow(a,b))

// Find Maximum:
const array = [1, 2, 3, 4, 5]
function findMax(arr) {
    return Math.max(...arr);
}

const findMaxArr = (arr) => Math.max(...arr)

console.log(findMax(array))
console.log(findMaxArr(array))

// Check Even or Odd:

const numbers = [1, 2, 3, 4, 5]
function isEven(num) {
    return num % 2 === 0;
}

const isEvenArrow = (num) => num % 2 === 0;

console.log(numbers.map(isEven))
console.log(numbers.map(isEvenArrow))


// Get Square of a Number:

const number = 10
function square(num) {
    return num * num;
}

const squareArrow = (num) => num * num

console.log(square(number))
console.log(squareArrow(number))

// Concatenate Strings:

const string1 = 'black'
const string2 = 'hat'

const array1 = ['black', 'blue', 'pink']
const array2 = ['hat', 'cat', 'bat']
function concatenate(str1, str2) {
    return str1 + str2
};


concatArrow = (str1, str2) => str1 + str2;
concatArrayArrow = (arr1, arr2) => array1.concat(array2);

console.log(concatArrayArrow(array1, array2))
console.log(concatenate(string1, string2))
console.log(concatArrow(string1, string2))
