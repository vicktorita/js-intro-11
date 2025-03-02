const { getRandomNumber } = require ('./../utils/MathHelper.js');

console.log('                     Task - 1     \n');

for(let i = 1; i <= 100; i++){
    if( i % 7 === 0) console.log(i);
}

console.log('                     Task - 2     \n');

for(let i = 1; i <= 50; i++){
    if( i % 2 === 0 && i % 3 ===0) console.log(i);
}

console.log('                     Task - 3     \n');

for(let i = 100; i >= 50; i--){
    if( i % 5 === 0 ) console.log(i);
}

console.log('                     Task - 4     \n');

for(let i = 0; i <= 7; i++){
    console.log(`The square of ${i} is = ${i ** 2}`);
}

console.log('                     Task - 5     \n');

let sum = 0;
for (let i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);

console.log('                     Task - 6     \n');

let random = getRandomNumber (1, 10);
console.log(random);

function factorial( n ) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial( n - 1);
    }
  }

  console.log(factorial(random));


  console.log('                     Task - 7      \n');
  
  let count = 0;

  for(let i = 1; i <= 100; i++ ){

    let r = getRandomNumber (1, 10);
    console.log(r);
    if (r % 5 == 0){
    console.log (`The random number is ${r} and it took ${count +1} attempt/s to generate it.`);
     break;
    }
    else count++;
  }

  console.log('                     Task - 8      \n');

  const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania' ];

  console.log(countries);
  console.log(countries.sort());

  console.log('                     Task - 9     \n');

  const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ];

  console.log( cartoonDogs);
  console.log(cartoonDogs.includes('Pluto'));


  console.log('                     Task - 10     \n');

 const cartoonCats = ['Azrael', 'Garfield', 'Sylvester', 'Tom' ];

 console.log(cartoonCats);
 console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix'));

 console.log('                     Task - 11     \n');
 
 const arr = [10.5, 20.75, 70, 80, 15, 75];
 console.log(arr);
  for (let i=0; i< arr.length; i++)
    {
    console.log(arr[i]);
  }

  console.log('                     Task - 12     \n');



for (let i = 0; i<= 50; i++){
 if( i % 2 === 0) console.log(i);
}
 let num = 0
while(num <= 50){
  if(num % 2===0)
  console.log(num)
  num++}

let sum1=0;
  for (let i = 3; i<= 7; i++){
     sum1 += i;
  }
  console.log(sum1);

let sum2 = 0;
  let j =3;
  while(j <=7){
    sum2 += j;
    j++;
  }
  console.log(sum2);

  


