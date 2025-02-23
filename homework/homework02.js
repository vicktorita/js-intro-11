console.log('                     Task - 1     \n');
let str1 = '5';
let str2 = '2';

str1  = parseInt(str1);
str2 = parseInt(str2);
 
console.log(`The sum of ${str1} and ${str2} is = ${str1 + str2}`);
console.log(`The product of ${str1} and ${str2} is = ${str1 * str2}`);
console.log(`The division of ${str1} and ${str2} is = ${str1 / str2}`);
console.log(`The substraction of ${str1} and ${str2} is = ${str1 - str2}`);
console.log(`The remainder of ${str1} and ${str2} is = ${str1 % str2}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${str1 ** str2}`);

console.log('\n                      Task - 2     \n');

let s1 = '200';
let s2 = '-50';

s1 = parseInt(s1);
s2 = parseInt(s2);
console.log(`The greatest value is = ${Math.max(s1, s2)}`);
console.log(`The smallest value is = ${Math.min(s1, s2)}`);
console.log(`The average is = ${(s1 + s2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(s1 - s2)}`);


console.log('\n                      Task - 3     \n');


let r1 = Math.floor(Math.random() * (50 - 1 + 1)) +1;
let r2 = Math.floor(Math.random() * (50 - 1 + 1)) +1;
//console.log( r1, r2)
console.log(`The absolute difference between numbers is ${Math.abs(r1 - r2)}`);

console.log('\n                      Task - 4     \n');

let rand1 = Math.floor(Math.random() * (50 - 1 + 1)) +1;
let rand2 = Math.floor(Math.random() * (50 - 1 + 1)) +1;
let rand3 = Math.floor(Math.random() * (50 - 1 + 1)) +1;
let rand4 = Math.floor(Math.random() * (50 - 1 + 1)) +1;
let rand5 = Math.floor(Math.random() * (50 - 1 + 1)) +1;
//console.log(rand1, rand2, rand3, rand4, rand5);

console.log(`The max value = ${Math.max(rand1, rand2, rand3, rand4, rand5)}`);
console.log(`The min value = ${Math.min(rand1, rand2, rand3, rand4, rand5)}`);


console.log('\n                      Task - 5     \n');

let random1 = Math.floor(Math.random() * (100 - 50 + 1)) +50;
let random2 = Math.floor(Math.random() * (100 - 50 + 1)) +50;
let random3 = Math.floor(Math.random() * (100 - 50 + 1)) +50;
console.log(`The number 1 = ${random1}`);
console.log(`The number 2 = ${random2}`);
console.log(`The number 3 = ${random3}`);
console.log(`The sum of numbers is = ${random1 + random2 + random3}`);

console.log('\n                      Task - 6     \n');

let rd1 = Math.floor(Math.random() * (100 -1 +1)) +1;
let rd2 = Math.floor(Math.random() * (100 -1 +1)) +1;
let rd3 = Math.floor(Math.random() * (100 -1 +1)) +1;
//console.log(rd1, rd2, rd3);

console.log(rd1>25 && rd2>25 && rd3>25);

console.log('\n                      Task - 7     \n');

let name = 'David';

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name.at(-1)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0,3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`);










let strr2 = 'Hello';
console.log(strr2.slice(0,3) + strr2.slice(-3));

function greetName(greet, name){
    console.log(`${greet}, ${name}!`);

}

greetName('Hello', 'John');
greetName('Good morning', 'Jane');

function average(num1, num2){
    let average = (num1+num2)/2
    return average;

}
console.log(average(3, 4));


