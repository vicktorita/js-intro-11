//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       31        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/
const no13 = (arr) =>  arr.map(i => i === 13 ? 0 : i);

console.log(no13([1, 2, 3 ,4]))
console.log(no13([13, 2, 3]))
console.log(no13([13, 13, 13 , 13, 13]))
console.log(no13([]))

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       32        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"]
*/
const removeDuplicates = (arr) => {
    let result = [];
  
    arr.forEach(i => {
      if(!result.includes(i)) result.push(i)
    })
  
    return result;
  }
  
  console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));  // [10, 20, 35, 60, 70]
  console.log(removeDuplicates([1, 2, 5, 2, 3]));  // [1, 2, 5, 3]
  console.log(removeDuplicates([0, -1, -2, -2, -1]));  // [0, -1, -2]
  console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));  // ["abc", "xyz", "123", "ab", "ABC"]
  console.log(removeDuplicates(["1", "2", "3", "2", "3"]));  // ["1", "2", "3"]

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       33        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/
const noDigit = (str) => str.split('').filter(i => i < '0' || i > '9').join('');

console.log(noDigit(""))
console.log(noDigit("Javascript"))
console.log(noDigit("123Hello"))
console.log(noDigit("123Hello World149"))
console.log(noDigit("123Tech456Global149"))

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       34        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/
const noVowel = (str) => str.split('').filter(i => !('aeiou'.includes(i.toLowerCase()))).join('');


console.log(noVowel("TechGlobal"))
console.log(noVowel("AEOxyz"))
console.log(noVowel("Javascript"))
console.log(noVowel(""))
console.log(noVowel("125$"))

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       35        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/

const sumOfDigits = (str) => str.split('').filter(i => i >= '0' && i <= '9').reduce((sum, num) => sum += Number(num), 0)

console.log(sumOfDigits("Javascript"));     
console.log(sumOfDigits("John's age is 29")); 
console.log(sumOfDigits("$125.0"));         
console.log(sumOfDigits("")); 

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       36        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []
*/
const arrFactorial = (arr) =>{
    return arr.map(num => {
        let fac = 1;
        for(let i = 2; i <= num; i++){
            fac *= i;
        }
        return fac;
    })
    
}

console.log(arrFactorial([1, 2, 3, 4])); 
console.log(arrFactorial([0, 5]));       
console.log(arrFactorial([5, 0, 6]));    
console.log(arrFactorial([]));