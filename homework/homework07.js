const CharacterHelper= require("./../utils/CharacterHelper.js");



console.log('                     Task - 1     \n');

/**
 * Requirement:
Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	-> false
hasUpperCase("") 		-> false
 */
function hasUpperCase(str ){
    if (str.length === 0) return false;

    for (let char of str){
    if ( char >='A' && char <= 'Z') return true;
}
  return false;
}
console.log(hasUpperCase("jHon"));


console.log('                     Task - 2     \n');

/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the 
original string​.
Examples:
noDigit("") 			-> ""
noDigit("Javascript") 		-> "Javascript"
noDigit("123Hello") 		-> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"
*/ 

function noDigit(str){
    let newstr ='';
    if (str.length === 0) return "";
    for (let char of str){
        if (!(char>= 0 && char <= 9))
        newstr +=char;
    
   else  continue;

   }
   return newstr;
}
console.log(noDigit("123Tech456Global149"));

console.log('                     Task - 3      \n');
/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from 
the original string​.
Examples:
noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	-> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	-> ""
noVowel("125$") 	-> "125$"

*/ 

function noVowel( str){
    let newStr ='';
if (str.length === 0) return '';
for (let char of str ){
    if(!(char.toLowerCase() === 'a' || char.toLowerCase()  === 'o' || char.toLowerCase()  === 'i' || char.toLowerCase() === 'e' || char.toLowerCase()  === 'u'))
    newStr +=char;
else continue;
}
return newStr;
}

console.log(noVowel("125$"));

console.log('                     Task - 4      \n');
/*
Requirement:
Write a function named no13() which takes an array of numbers as argument and return a new array
 with all 13s replaced with 0s. ​
Examples:
no13([1, 2, 3 ,4]) 		-> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		-> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 			-> []

*/ 
function no13(arr ){
return arr.map(x => x ===13 ? x = 0 : x)
}
console.log(no13([13, 2, 3]) );

console.log('                     Task - 5      \n');

/*
Requirement:
Write a function named middleInt() which takes three number arguments and return the middle number. ​
Examples:
middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10*/ 

function middleInt(num1, num2, num3){
return [num1, num2, num3].sort((a,b) => a-b)[1];
}
console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

console.log('                     Task - 6      \n');
/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​
Examples:
sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0

*/ 

function sumOfDigits(str ){
    let sumStr =0;
    if (str.length === 0) return 0;
    for (let char of str){
        if((char>= 0 && char <= 9))
        sumStr  +=Number(char);
    
   else  continue;

   }
   return sumStr;
}
console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John’s age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

console.log('                     Task - 7      \n');
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as argument and return the array
 with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []
*/ 

function arrFactorial(arr ){
    
function factorial(x){

 return x === 0 || x === 1 ? 1: x * factorial(x-1)
}
return arr.map(x => factorial(x));
}
console.log(arrFactorial([1, 2, 3, 4]));

console.log('                     Task - 8      \n');

/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as argument and return an array as 
letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]

*/ 
function categorizeCharacterss( str){
    const newArr = ['', '',''];
    for(char of str){
    if(CharacterHelper.isLetter(char)) newArr[0] += char;
    else if(CharacterHelper.isDigit(char)) newArr[1] += char;
    else if (CharacterHelper.isSpecial(char)) newArr[2] +=  char;
}
return newArr;
}
console.log(categorizeCharacterss("12ab$%3c%") );


function categorizeCharacters( str){
    const newArr = ['', '',''];
    for(const char of str){
    if(/[a-zA-Z]/.test(char)) newArr[0] += char;
    else if(/\d/.test(char)) newArr[1] += char;
    else if (/[^a-zA-Z0-9\s]/.test(char)) newArr[2] += char;
}
return newArr;
}
console.log(categorizeCharacters("12ab$%3c%") );
console.log(categorizeCharacters("1234"));