/*Sum of All Elements in an Array
Problem: Given an array of numbers, use .reduce() to calculate the sum of all the elements.
Example Input: [1, 2, 3, 4, 5]
Expected Output: 15*/

const arr = [1, 2, 3, 4, 5];
const sumOfArr = arr.reduce((acc, cur) => 
    acc + cur, 0);
console.log(sumOfArr)

/*2. Find the Maximum Value in an Array
Problem: Given an array of numbers, use .reduce() to find the maximum value in the array.
Example Input: [3, 7, 2, 5, 10]
Expected Output: 10*/

const arr1 = [3, 7, 2, 5, 10]
const initialValue = 3
const maxValue = arr1.reduce((acc, cur) => {
    if (cur > acc) 
        return cur
    else
        return acc
    }, initialValue
);
console.log(maxValue)

const maxValueTernary = arr1.reduce ((acc, cur) => {
    return cur > acc ? cur : acc;
});
console.log(maxValueTernary)

/*3. Count Occurrences of a Specific Element
Problem: Given an array and a specific value, use .reduce() to count how many times that value appears in the array.
Example Input: ['apple', 'banana', 'apple', 'orange', 'apple'], 'apple'
Expected Output: 3*/

const fruit = ['apple', 'banana', 'apple', 'orange', 'apple']
const highestOcc = fruit.reduce((acc, cur) =>
    cur === 'apple' ?  acc + 1 : acc,
0)
console.log(highestOcc)

/*4. Flatten a 2D Array into a 1D Array
Problem: Given a 2D array (an array of arrays), use .reduce() to flatten it into a 1D array.
Example Input: [[1, 2], [3, 4], [5, 6]]
Expected Output: [1, 2, 3, 4, 5, 6]*/

const twoD_Arr =  [[1, 2], [3, 4], [5, 6]]
const flattenArr = twoD_Arr.reduce((acc, cur) =>
    acc.concat(cur),[]    
)
console.log(flattenArr)





/*5. Calculate the Product of All Elements in an Array
Problem: Given an array of numbers, use .reduce() to calculate the product of all the elements.
Example Input: [1, 2, 3, 4]
Expected Output: 24*/

const arrNum = [1, 2, 3, 4]
const arrSum = arrNum.reduce((acc, cur) => 
    acc + cur, 0
)
console.log(arrSum)

