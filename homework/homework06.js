console.log('                     Task - 1     \n');

/*
Requirement:
Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.
Examples:
noSpace("") 			->  ""
noSpace("Javascript") 		->  "Javascript"
noSpace("    Hello   ") 		-> "Hello"
noSpace(" Hello World   ") 	-> "HelloWorld”
noSpace("Tech Global") 		-> "TechGlobal"
*/ 

function noSpace(str ){
    return  str.trim().split(' ').join('');

}
console.log(noSpace("Tech Global"));

console.log('                     Task - 2     \n');

/*Requirement:
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") 		->  ""
replaceFirstLast("Hello") 		->  "oellH"
replaceFirstLast("Tech Global") 	-> "lech GlobaT"
replaceFirstLast("A") 		-> ""
replaceFirstLast("    A      ") 	-> ""
*/

function replaceFirstLast(str){
    if  (str.length < 2) return ""
    return str.at(-1) + str.slice(1, -1) + str.slice(0,1);

}
 console.log(replaceFirstLast('Hello'));
 // at task 2 the last  replaceFirstLast("    A      ") 	-> ""//// should be A bcz the length is more than 2


console.log('                     Task - 3     \n');
 /*
 Requirement:
Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string 
doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") 		-> false
hasVowel("Javascript") 		-> true
hasVowel("Tech Global") 		-> true
hasVowel("1234") 		-> false
hasVowel("ABC") 		-> true*/ 


console.log('XXXXXXXXXXXXXXXXX First Way XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

function hasVowel(str){
return str.toLowerCase().split('').some(x => x.includes('a') || x.includes('e') || x.includes('i') || x.includes('o') || x.includes('u') );
}
console.log(hasVowel("Javascript") );


console.log('XXXXXXXXXXXXXXXXX Second Way XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

function hasVowel1(str ){
    return str.toLowerCase().split('').some(char => /^[aeoui]$/i.test(char));
}
console.log(hasVowel1(""));


console.log('                     Task - 4     \n');

/*
Requirement:
Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth and returns a message below based 
on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/ 

function checkAge(yearOfBirth ){
    let currentYear = 2023

    let age = currentYear - yearOfBirth;
    if (age > 120 ||  yearOfBirth > currentYear) return "AGE IS NOT VALID";
    else if  (age >= 16  )  return "AGE IS ALLOWED";
    else if (age < 16) return"AGE IS NOT ALLOWED";

}
console.log(checkAge(1920));

console.log('                     Task - 5     \n');

/*
Requirement:
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.
Examples:
averageOfEdges(0, 0, 0) 		-> 0
averageOfEdges(0, 0, 6) 		-> 3
averageOfEdges(-2, -2, 10) 	-> 4
averageOfEdges(-3, 15, -3) 	-> 6
averageOfEdges(10, 13, 20) 	-> 15
*/ 

function averageOfEdges(num1, num2, num3){
let min = Math.min(num1, num2, num3);
let max = Math.max(num1, num2, num3);
return (max + min) /2
}
console.log(averageOfEdges(-2, -2, 10));


console.log('                     Task - 6     \n');

/*
Requirement:
Write a function named noA() which takes an array of strings as argument and will return a new array with all elements 
starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) 	->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) 	->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) 	-> ["###", "###", "###", "###", "###"]
*/ 


function noA(arr){

    return arr.map(word => (word.startsWith('a') || word.startsWith('A')) ? "###" : word);

}
console.log(noA(["javascript", "hello", "123", "xyz"]));


console.log('                     Task - 7     \n');

/*
Requirement:
Write a function named no3and5() which takes an array of integer numbers as argument and will return a new array with elements 
replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) 	-> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) 		-> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) 	-> [99, 11, 100, 13, 14, 101]
*/ 


function no3and5(arr ){
return arr.map(num => {
    if (num % 5 === 0 && num % 3 === 0) return 101
    else if( num % 5 ===0) return 99
    else if(num %  3 === 0) return 100
    else return num;
});
}
console.log(no3and5([10, 11, 12, 13, 14, 15]));


console.log('                     Task - 8     \n');

/*
Requirement:
Write a function named countPrimes() which takes an array of integer numbers as argument and will return the number of 
the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1]) 	-> 0
countPrimes([7, 4, 11, 23, 17]) 	-> 4
countPrimes([41, 53, 19, 47, 67]) 	-> 5

*/ 
function isPrime(num){
    if (num < 2 ) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
     if (num % i === 0) return false;
    }
    return true;
}
function countPrimes(arr){
    return arr.filter(num => isPrime(num)).length;

}

console.log(countPrimes([7, 4, 11, 23, 17]));


console.log('                     Task - 9     \n');

/*

Requirement:
Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) 		-> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) 			-> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) 			-> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) 	-> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) 		-> ["1", "2", "3"]*/

function removeDuplicates(arr){
return arr.reduce((acc, curr) => {
    if(!acc.includes(curr)){
        acc.push(curr);
    }
    return acc;
},[] )
}
console.log(removeDuplicates([0, -1, -2, -2, -1]));



console.log('                     Task - 10     \n');
/*
Requirement: 
Write a method named isDateFormatValid() that takes a string as an argument and returns true 
if the given date is valid 
or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>

Examples:
isDateFormatValid("") 			-> false
isDateFormatValid("15/30/2020") 		-> false
isDateFormatValid("10-30-2020 ") 		-> false
isDateFormatValid("10.30.2020") 		-> false
isDateFormatValid("5/30/2020") 		-> false
isDateFormatValid("05/30/2020 ") 		-> true
isDateFormatValid("10/2/2020") 		-> false
isDateFormatValid("10/02/2020") 		-> true
*/ 
function isDateFormatValid(str){
    if (!str.includes('/')) return false;
    let div = str.split('/');

    const month= Number(div[0]);
    const day = Number(div[1]);
    if (div[0].length !== 2 || div[1]. length !== 2 || div[2].length !== 4) return false;
    if  (month< 1 || month >12 ) return false;
    if  (day <1  || day >31 ) return false;
    return true;
    
}


console.log(isDateFormatValid("10/02/2020"));



console.log('                     Task - 11    \n');

/*
Requirement: 
Write a method named secondMax() takes an array argument and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.

Examples:
secondMax([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMax([3, 4, 5, 6]) 		-> 5
secondMax([10]) 		-> 10

*/ 

function secondMax(arr ){
    if (arr.length === 1) return arr[0];
   const removedDuplicates  = arr.reduce((acc, curr) => {
    if(!acc.includes(curr)) acc.push(curr)
        return acc;
   }, []);
    return removedDuplicates.sort((a, b) => a - b).at(-2);
  
}


console.log(secondMax([3, 4, 5, 6]));


console.log('                     Task - 12    \n');

/*
Requirement: 
Write a method named secondMin() takes an array argument and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.

Examples:
secondMin([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMin([3, 4, 5, 6]) 		-> 4
secondMin([10]) 		-> 10

*/ 

function secondMin(arr ){
    if (arr.length === 1) return arr[0];
   const removedDuplicates  = arr.reduce((acc, curr) => {
    if(!acc.includes(curr)) acc.push(curr)
        return acc;
   }, []);
    return removedDuplicates.sort((a, b) => a - b)[1];
  
}


console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));


console.log('                     Task - 13    \n');
 /*
 Requirement: 
Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			-> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
mostRepeated([10]) 					-> 10
mostRepeated(["TechGlobal"]) 				-> "TechGlobal"

 */ 

function mostRepeated(arr ){
    if(arr.length === 1) return arr[0]
    const sortedArray  = arr.sort ((a,b) => arr.filter(word => word === b).length - arr.filter(word => word === a).length);
   return sortedArray[0]; 

}
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(["TechGlobal"]));