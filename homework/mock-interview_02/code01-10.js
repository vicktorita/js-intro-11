
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      1       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
/*
Requirement:
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"
*/
const doubleOrTripleWord = (str) => {
    if(str.length % 2 === 0) return `${str}${str}${str}`
    else return `${str}${str}`
    /*
      WAY2: 
      if(str.length % 2 === 0) return str.padStart(str.length * 3, str)
      else return str.padStart(str.length * 2, str)
  */
  }
  
  console.log(doubleOrTripleWord("Tech"));
  console.log(doubleOrTripleWord("Apple"));
  console.log(doubleOrTripleWord(""));
  console.log(doubleOrTripleWord(" "));
  console.log(doubleOrTripleWord("1"));
  console.log(doubleOrTripleWord("22"));

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      2       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxx

/*
Requirement: 
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.

Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""
*/

function firstlastWord(str){
    //  str = str.trim().split(' ');
    //  return str[0] + str[str.length - 1];

    str = str.trim();
    if(str.includes(' ')) return str.slice(0, str.indexOf(' ')) + str.slice(str.lastIndexOf(' ') + 1)
    else return str + str;
}

console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord("   "));


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       3       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxx

/*
Requirement:
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")  -> false
hasVowel("Javascript")  -> true
hasVowel("Tech Global")  -> true
hasVowel("1234")  -> false
hasVowel("ABC")  -> true
*/
const hasVowel = (str) => str.split('').filter(c => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(c)).length > 0

   // str = str.toLowerCase();
   // return str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o')|| str.includes('u')
console.log(hasVowel(""))//false
console.log(hasVowel("JavaScript"))//true
console.log(hasVowel("Tech Global"))//true
console.log(hasVowel("1234"))//false
console.log(hasVowel("ABC"))//true


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       4       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxx

/*
Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/

function startVowel(str){
    // str = str.toLowerCase()
    // if(str.startsWith('a')) return true;
    // else if(str.startsWith('e'))return true;
    // else if(str.startsWith('i'))return true;
    // else if(str.startsWith('o'))return true;
    // else if(str.startsWith('u'))return true;
    // return false;

    return 'aeiouAEIOU'.includes(str[0])
    
}
// const startVowel = (str) =>{
//     str = str.toLowerCase();
//     return  (str.startsWith('a') || str.startsWith('e') || str.startsWith('i') || str.startsWith('o') || str.startsWith('u')) ? true : false
//    //return /^[aeiou]/.test(str);
// }

console.log(startVowel("Hello"));// false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange"));// true
console.log(startVowel("")); //false
console.log(startVowel("    "));//false
console.log(startVowel("123") );//false


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       5       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/
const averageOfEdges = (num1, num2, num3) => (Math.max(num1, num2, num3) + Math.min(num1, num2, num3))/2;


console.log(averageOfEdges(0, 0, 0))
console.log(averageOfEdges(0, 0, 6))
console.log(averageOfEdges(-2, -2, 10))
console.log(averageOfEdges(-3, 15, -3))
console.log(averageOfEdges(10, 13, 20))


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX        6        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx

/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and
 last characters replaced.
NOTE: If the length is less than 2, return an empty string. NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("")	-> ""
replaceFirstLast("Hello")	-> "oellH" 
replaceFirstLast("Tech Global")	-> "lech GlobaT" 
replaceFirstLast("A")	-> ""
replaceFirstLast("	A	")	-> ""
*/

const replaceFirstLast = (str) => {
   str = str.trim();
   // ask abt last replace
    if(str.length < 2) return '';
    return str.at(-1) + str.slice(1,-1) + str [0];
}
console.log(replaceFirstLast(""));	
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));	 
console.log(replaceFirstLast("A"));	
console.log(replaceFirstLast("	A	"));	

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       7        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function swap4(str){
    if(str.length < 8) return "";
    
    let first4 = str.slice(0, 4);
    let middle = str.slice(4 , -4);
    let last4 = str.slice(-4); 

    return last4 + middle + first4
}
// const swap4 = (str ) => {
//     if (str.length < 8) return '';
//     return str.slice(-4) + str.slice(4, -4) + str.slice(0,4);
    
// }
console.log(swap4("abc"));
console.log(swap4("Javascript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("   "));
console.log(swap4("Apple"));


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       8        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back 
with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
swapFirstLastWord("Hello World")	-> "World Hello" 
swapFirstLastWord("I like JavaScript")	-> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")	-> "bar bar foo foo" 
swapFirstLastWord("")	-> ""
swapFirstLastWord(" ")	-> ""
swapFirstLastWord("Hello")	-> ""
swapFirstLastWord("Hello ")	-> ""
*/

const swapFirstLastWord = (str ) => {
    str = str.trim();
    let words = str.split(' ');
    if(words.length<2) return '';
    const firstWord = words[0];
    const lastWords = words[words.length-1];
    words[0]= lastWords;
    words[words.length - 1 ] = firstWord;
    return words.join(' ')
}

// const swapFirstLastWord = (str) => {
//     str = str.trim();

//     if(str.includes(' ')){
//         let firstWord = str.slice(0, str.indexOf(' '));
//         let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
//         let lastWord = str.slice(str.lastIndexOf(' ') + 1);

//         return lastWord + middle + firstWord
//     }

//     return "";

// }

console.log(swapFirstLastWord("Hello World"));	
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));	
console.log(swapFirstLastWord(""));	
console.log(swapFirstLastWord(" "));	
console.log(swapFirstLastWord("Hello"));	
console.log(swapFirstLastWord("Hello "));	

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       9        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Requirement:
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 

Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/

const countPos = (arr) =>  arr.filter(num => num > 0).length

// Second way of doing it (Filter function)
// const countPos = (arr) => {
//     let count = 0;

//     for(num of arr){
//         if(num > 0) count++;
//     }

//     return count;
// }
console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos([0, -1, -2, -3]))


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       10        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*
Find Even Numbers
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest
 even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.

Examples:
 

getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]
*/

function getEvens(num1, num2){
    let evens = [];
    let greaterNumber = Math.max(num1, num2);
    let smallerNumber = Math.min(num1, num2);

    for(let i = smallerNumber; i <= greaterNumber; i++){
        if(i % 2 === 0) evens.push(i)
    }

    return evens;
}

console.log(getEvens(2, 7))
console.log(getEvens(17, 5))
console.log(getEvens(4, 4))
console.log(getEvens(3, 3))