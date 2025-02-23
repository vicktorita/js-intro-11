const { CharacterHelper } = require('./../utils/CharacterHelper.js');
const { getRandomNumber } = require('./../utils/MathHelper.js');
//console.log(CharacterHelper.isDigit('5'));
//console.log(CharacterHelper.isDigit('55'));


//let str = 'Alex';

//console.log(CharacterHelper.isVowel(str[0]));

console.log('                     Task - 1     \n');

let r1 = getRandomNumber(1, 100);
let r2 = getRandomNumber(1, 100);
let r3 = getRandomNumber(1, 100);

//console.log(r1, r2, r3);
console.log((r1 + r2 + r3) / 3 >=50);

console.log('\n                      Task - 2     \n');

let ran1 = getRandomNumber(1, 3);
let ran2 = getRandomNumber(1, 3);
let ran3 = getRandomNumber(1, 3);
//console.log(ran1, ran2, ran3);

if (ran1 === ran2 && ran2 === ran3) {
    console.log('TRIPLE MATCH')
} else if(ran1 === ran2 || ran1 === ran3 || ran2 === ran3){
    console.log('DOUBLE MATCH')
} else {
    console.log('NO MATCH')
}

console.log('\n                      Task - 3     \n');


function hasA(str ){
    return str.includes('a') || str.includes('A');
}
console.log(hasA('Apple'));

console.log('\n                      Task - 4     \n');

function doubleOrTripleWord( str ){
    if (str.length % 2 === 0) return str + str + str;
    return str + str;
}
console.log(doubleOrTripleWord('Apple'));


console.log('\n                      Task - 5     \n');

function firstWord (str ){
    return str.split(' ')[0];

}
console.log(firstWord ('I like JavaScript'));

console.log('\n                      Task - 6     \n');

function lastWord( str ) {
    let word = str.split(' ');
    return word[word.length-1];
}

console.log(lastWord('Hello'));

console.log('\n                      Task - 7     \n');

function firstLastWord( str ){
    return firstWord(str) + lastWord (str);
}
console.log(firstLastWord('Hello'));

console.log('\n                      Task - 8     \n');


function hasVowel( word) {
 return CharacterHelper.isVowel(word[0]);
}

console.log(hasVowel('orange'));

console.log('\n                      Task - 9     \n');

function swap4( str){
    if (str.length<8){
        return '';
    } else{
        return str.slice(-4) + str.slice(4, -4) + str.slice(0,4);
    }
}

console.log(swap4('TechGlobal'));

console.log('\n                      Task - 10     \n');

function swapFirstLastWord( str ){
     
    if (str.split(' ').length < 2) return str;
    else{
    let first = str.slice(0, str.indexOf(' '));
    let last = str.slice(str.lastIndexOf(' ') + 1);
    let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
    return last + middle + first;
}
}

console.log(swapFirstLastWord('Hello')); 

