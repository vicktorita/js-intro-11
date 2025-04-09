//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       21        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i

Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0
*/

const countVowels = (word) => {
    let vowelCounter = 0;
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

    for(letter of word){
        if(vowels.includes(letter)) vowelCounter++;
    }
    return vowelCounter;
}

console.log(countVowels("Hello"))// 2
console.log(countVowels("Hello World"))// 3
console.log(countVowels("JavaScript is fun"))// 5
console.log(countVowels(""))// 0

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       22        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""
reverseStringWords("    ")  -> ""
*/

function reverseStringWords(str){
    let strAsArr = str.trim().split(' ')
    
    for(let i = 0; i < strAsArr.length; i++){
        strAsArr[i] =  strAsArr[i].split('').reverse().join('')
    }
    return strAsArr.join(' ');
}

console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords(""))
console.log(reverseStringWords("    "))

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       23        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement: 
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.

Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0
*/

const countConsonants = (word) => {
    let counter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for(letter of word){
        letter = letter.toLowerCase()
        if(!(vowels.includes(letter))) counter++;
    }
    return counter;
}

console.log(countConsonants("Hello"))
console.log(countConsonants("Hello World"))
console.log(countConsonants("JavaScript is fun"))
console.log(countConsonants(""))

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       24        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after 
the array element.

Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])  -> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])  -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) -> 4
countMultipleWords([ ]) -> 0
*/

const countMultipleWords = (arr) => arr.reduce((count, str) => str.trim().includes(' ')? count + 1 : count, 0)

//way 2:
    // let count = 0;

    // arr.forEach(e => {
    //     if(e.trim().includes(' ')) count++;
    // });

    // return count;
console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"])); // 1
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "])); // 0
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "])); // 4
console.log(countMultipleWords([])); // 0

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       25        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
FizzBuzz
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
•	You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
•	You will need to convert numbers divisible by 3 to 'Fizz'
•	You will need to convert numbers divisible by 5 to 'Buzz'
•	You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
•	The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers. Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" 
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"
*/ 
const fizzBuzz = (num1, num2) => {
    const arr = [];
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        let str = '';
        if (i % 3 === 0) {
            str += 'Fizz';
        }
        if (i % 5 === 0) {
            str += 'Buzz';
        }
        if (str === '') {
            str = i.toString();
        }
        arr.push(str);
    }
    console.log(arr.join(' | '));
}
fizzBuzz(13, 18);
fizzBuzz(12, 5);
fizzBuzz(5, 5);
fizzBuzz(9, 6);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       26        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity

Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/

const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

//Second way:
    // str = str.toLowerCase()
    // let start = 0;
    // let end = str.length - 1

    // while(start < end){
    //     if(str[start] !== str[end]) return false

    //     start++;
    //     end--;
    // }
    // return true

// Third way:
    // for(let i = 0; i < str.length; i++){
    //     if(str[i] !== str[end]) return false
    //     end--;

    //     if(i >= end) return true;
    // }
    // return true

console.log(isPalindrome("Hello"))//false
console.log(isPalindrome("Kayak"))//true
console.log(isPalindrome("civic"))//true
console.log(isPalindrome("abba"))//true
console.log(isPalindrome("ab  a"))//false
console.log(isPalindrome("A"))//true
console.log(isPalindrome(""))//true
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       27        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/

const isPrime = (num) => {
    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let d = 5;
    while(d < num){
        if(num % d === 0) return false;
        d+=2;
    }

    return true;

}

console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       28        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be 
different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9, 3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]
*/

const add = (arr1, arr2) => {
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    return arr1.map((value, i) => value + (arr2[i] || 0))
}

/*
if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    for(let i = 0; i < arr2.length; i++){
        arr1[i] += arr2[i];
    }

    return arr1
*/

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));  // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));  // [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));  // [0, 0, 0, 0]

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       29        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) -> ["###", "###", "###", "###", "###"]
*/
const noA = (arr) => arr.map(i =>  i.toLowerCase()[0] === 'a' ? '###' : i)


console.log(noA(["javascript", "hello", "123", "xyz"]))
console.log(noA(["apple", "123", "ABC", "javascript"]))
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       30        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]
*/
const no3Or5 = (arr) => {
    return arr.map(num => {
      if(num % 3 === 0 && num % 5 === 0) return 101;
      else if(num % 3 === 0) return 100;
      else if(num % 5 === 0) return 99;
      return num;
    })
  }
  
  console.log(no3Or5([7, 4, 11, 23, 17]))
  console.log(no3Or5([3, 4, 5, 6]))
  console.log(no3Or5([10, 11, 12, 13, 14, 15]))

