// Problem 1: Print Array Elements
// Task: Create an array of your favorite fruits and use forEach to print each fruit to the console.

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

fruits.forEach((fruit) =>
console.log(fruit)
)


// Problem 2: Calculate the Length of Each String
// Task: Given an array of strings, use forEach to create a new array that contains the lengths of each string.
const words = ['hello', 'world', 'JavaScript', 'is', 'fun'];
const lengths = [];

words.forEach((word) =>
lengths.push(word.length)
)
console.log(lengths)

// Problem 3: Create an Array of Doubled Values
// Task: Given an array of numbers, use forEach to create a new array that contains each number doubled.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

numbers.forEach((number) =>
doubledNumbers.push(number * 2)
)
console.log(doubledNumbers)

// Your code here

// Problem 4: Filter Odd Numbers
// Task: Given an array of numbers, use forEach to log only the odd numbers to the console.
const nums = [10, 15, 20, 25, 30, 35];
const oddNums = []

nums.forEach((num) =>
num % 2 !== 0 ? oddNums.push(num) : null
)
console.log(oddNums)

// Problem 5: Format Full Names
// Task: Create an array of first and last names (as separate strings) and 
//use forEach to print each full name to the console in the format "First Last".
const names = [
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Smith' },
    { first: 'Alice', last: 'Johnson' },
];

names.forEach((name) =>
console.log(name.first, name.last)
)

// Problem 6
// You have an array of objects representing products, each with a name and price. 
// Your task is to create a new array of strings that describes each product in
// the format "Product Name: $Price" and log each description to the console.

const products = [
    { name: 'Laptop', price: 999.99 },
    { name: 'Smartphone', price: 499.99 },
    { name: 'Tablet', price: 299.99 },
    { name: 'Headphones', price: 199.99 },
];

const productDesc = []

products.forEach((product) => {
const description = `Product name: ${product.name}, Product Price:${product.price}`
productDesc.push(description)
})

console.log(productDesc)
