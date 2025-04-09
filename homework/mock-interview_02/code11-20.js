
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       11        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.

NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/

function getMultipleOf5(num1, num2){
    let divisibleBy5 = []

    for(let i = Math.max(num1, num2); i >= Math.min(num1, num2); i--){
        if(i % 5 === 0) divisibleBy5.push(i)
    }

    if(num1 > num2) return divisibleBy5.reverse()
    return divisibleBy5
}

console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       12        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named countPNeg() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 

Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 1
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 2
countPos([0, -1, -2, -3])  -> 3
*/
const countNeg = (arr) =>  arr.filter(num => num < 0).length

// Second way of doing it (Filter function)
// const countNeg = (arr) => {
//     let count = 0;

//     for(num of arr){
//         if(num < 0) count++;
//     }

//     return count;
// }
console.log(countNeg([-45, 0, 0, 34, 5, 67]))
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]))
console.log(countNeg([0, -1, -2, -3]))

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       13        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress")  -> 0
*/

const countA = (str) => str.split('').filter(letter => letter.toLowerCase() === 'a').length

// Second way of doing it
// const countA = (str) => {
//     let count = 0;

//     for(letter of str){
//         if(letter.toLowerCase() === 'a') count++;
//     }

//     return count;
// }

console.log(countA("TechGlobal is a QA bootcamp"))
console.log(countA("QA stands for Quality Assurance"))
console.log(countA("Cypress"))
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       14        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.
Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") -> 6 
countWords("1 2 3 4") -> 4
*/

const countWords2 = (str) => str.trim().split(' ').length

/*
SECOND WAY:
const countWords = (str) => {
    str = str.trim();
    let spaces = 0;

    for(character of str){
        if(character === ' ') spaces++;
    }

    return spaces + 1;
}
*/

console.log(countWords2("     Javascript is fun       "))
console.log(countWords2("Cypress is an UI automation tool.    "))
console.log(countWords2("1234"))
console.log(countWords2("     Javascript is fun       "));
console.log(countWords2("Cypress is an UI automation tool.    "));
console.log(countWords2("1 2 3 4"));
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       15        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.

Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/


//fac(5) -> 5 * fac(4) -> 5*24 = 120
//fac(4) -> 4 * fac(3) -> 4*6 = 24
//fac(3) -> 3 * fac(2) => 3*2 = 6
//fac(2) -> 2 * fac(1) -> 2*1 = 2
//fac(1) -> 1
const factorial = (n) => n === 0 || n === 1? 1: n * factorial(n-1)
    
/*
SECOND WAY:
const factorial = (num) => {
    let total = 1;

    for(let i = 2; i <= num; i++){
        total *= i;
    }
    return total;
}
*/

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(1))

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       16        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")

*/

const count3OrLess = (str) => str.trim().split(' ').filter(word => word.length > 0 && word.length <= 3).length

//way2:
    // let count = 0;
    // const strAsArr = str.trim().split(' ');

    // strAsArr.forEach(word => {
    //     if( word.length > 0 && word.length <= 3) count++;
    // })
    // return count
console.log(count3OrLess("Hello"))//0
console.log(count3OrLess("Hi John"))//1
console.log(count3OrLess("JavaScript is fun"))//2
console.log(count3OrLess("My name is John Doe"))//3
console.log(count3OrLess(""))//0
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       17        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello World" 
removeExtraSpaces("     JavaScript is          fun")  -> "JavaScript is fun”
removeExtraSpaces("")  -> ""
*/

const removeExtraSpaces = (str) => str.trim().split(' ').filter(s => s.length > 0).join(' ');

//WAY 2:  
    //let result = ''
    // for(s of strAsArr){
    //     if(s !== '') result += `${s} `
    // }
    // return result.slice(0,-1)
console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       18        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/
const middleInt = (num1, num2, num3) =>  [num1, num2, num3].sort((a, b) => a - b)[1]

//    if(num1 >= num2 && num1 <= num3) return num1
//    else if(num2 >= num1 && num2 <= num3) return num2
//    else return num3;
console.log(middleInt(1, 2, 2))
console.log(middleInt(5, 5, 8))
console.log(middleInt(5, 3, 5))
console.log(middleInt(1, 1, 1))
console.log(middleInt(-1, 25, 10))
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       19        XXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.

NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -> -1
*/

function firstDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]) return arr[i];
        }
    }
    return -1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(firstDuplicate([ 1, 2, 3]))
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       20        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.

NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ]
*/

// function getDuplicates(arr){
//     let duplicates = [];

//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] === arr[j] && !duplicates.includes(arr[i])) duplicates.push(arr[i])
//         }
//     }
//     return duplicates;
// }

function getDuplicates(arr){
    let container = [];
    let allDuplicates = [];

    for(let obj of arr){
        if(container.includes(obj) && !allDuplicates.includes(obj)) allDuplicates.push(obj)
        else container.push(obj)
    }
    return allDuplicates;
}


console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))