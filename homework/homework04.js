const { getRandomNumber } = require('./../utils/MathHelper.js');

console.log('                     Task - 1     \n');

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) console.log(i);
}

console.log('                     Task - 2     \n');

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 && i % 3 === 0) console.log(i);
}

console.log('                     Task - 3     \n');

for (let i = 100; i >= 50; i--) {
  if (i % 5 === 0) console.log(i);
}

console.log('                     Task - 4     \n');

for (let i = 0; i <= 7; i++) {
  console.log(`The square of ${i} is = ${i ** 2}`);
}

console.log('                     Task - 5     \n');

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

console.log('                     Task - 6     \n');

let random = getRandomNumber(1, 10);
console.log(random);

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(random));


console.log('                     Task - 7      \n');

let count = 0;

for (let i = 1; i <= 100; i++) {

  let r = getRandomNumber(1, 10);
  console.log(r);
  if (r % 5 == 0) {
    console.log(`The random number is ${r} and it took ${count + 1} attempt/s to generate it.`);
    break;
  }
  else count++;
}



console.log('                     Task - 8      \n');

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countries);
console.log(countries.sort());

console.log('                     Task - 9     \n');

const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoonDogs);
console.log(cartoonDogs.includes('Pluto'));


console.log('                     Task - 10     \n');

const cartoonCats = ['Azrael', 'Garfield', 'Sylvester', 'Tom'];

console.log(cartoonCats);
console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix'));

console.log('                     Task - 11     \n');

const arr = [10.5, 20.75, 70, 80, 15, 75];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('                     Task - 12     \n');


const storeObj = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(storeObj);
let countBP = 0;
let countBookPen = 0;

for (let i = 0; i < storeObj.length; i++) {

  if (storeObj[i].toLowerCase().startsWith('b') || storeObj[i].toLowerCase().startsWith('p')) countBP++;
  if (storeObj[i].toLowerCase().includes('book') || storeObj[i].toLowerCase().includes('pen')) countBookPen++;
}
console.log(`Elements starting with 'B' or 'P' = ${countBP}`);
console.log(`Elements having 'book' or 'pen' = ${countBookPen}`);

console.log('                     Task - 13     \n');

const numbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

let count10 = 0;
let countLessThan10 = 0;
let countMoreThan10 = 0;

for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] === 10) count10++;
  else if (numbers[i] < 10) countLessThan10++;
  else if (numbers[i] > 10) countMoreThan10++;
}
console.log(numbers);
console.log(`Elemnts that are more than 10 = ${countMoreThan10}`);
console.log(`Elemnts that are less than 10 = ${countLessThan10}`);
console.log(`Elemnts that are 10 = ${count10}`);

console.log('                     Task - 14     \n');

const arr1 = [5, 8, 13, 1, 2];
const arr2 = [9, 3, 67, 1, 0];
console.log(`1st array is = `, arr1);
console.log(`2nd array is = `, arr2);

const array = [];

for (let i = 0; i <= arr1.length - 1; i++) {
  if (arr1[i] > arr2[i]) array.push(arr1[i]);
  else array.push(arr2[i]);
}

console.log(`3rd array is = `, array);

console.log('                     Task - 15     \n');


function firstDuplicate(arr) {

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] === arr[j])
        return arr[i];
     }
  }
  return -1;
}

console.log(firstDuplicate(['foo', 'abc', '123', 'bar' ]));



console.log('                     Task - 16     \n');
const  arrayDuplicates= [];

function getDuplicates( arr){
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] === arr[j])
        arrayDuplicates.push(arr[i]);
      return arrayDuplicates;
     }
     
  }

  
}
console.log(getDuplicates('A', 'foo', '12',  12, 'bar', 'a', 'a', 'foo' ));










