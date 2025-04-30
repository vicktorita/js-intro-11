
const doubleorTrippleWord = (str) => str.length % 2 === 0 ? str+str+str : str+str;
console.log(doubleorTrippleWord('Apple'));

const firstLastWord = (str) =>{
    //dont forget split()
    str = str.split(' ');
     return str[0]+ str[str.length -1];}
console.log(firstLastWord('I like Javascript'));

const hasVowel = str =>{
    //dont forget length>0
    return str.split('').filter(char => ['a', 'e','i', 'o', 'u'].includes(char.toLowerCase())).length>0
}
console.log(hasVowel('1234a'))

const startVowel = str =>'aeiou'.includes(str[0])

console.log(startVowel('pple'))

const averageOfEdges = (num1, num2,num3) =>{
    return (Math.max(num1, num2, num3)+ Math.min(num1, num2, num3)) /2
}
console.log(averageOfEdges(0,0,6))

const replaceFirstLast = str => str.length < 2 ? '' : str.at(-1) + str.slice(1,-1) + str[0];
// ask if we need to trim???
console.log(replaceFirstLast("    A    "))

const swap4 = str =>str.trim().length< 8 ? '' : str.slice(-4) + str.slice(4,-4) + str.slice(0,4);
//use slice only
console.log(swap4('javascript'))

const swapFirstLastWord = str =>{
    words = str.trim().split(' ');
    if(words.length <2) return '';
    let firstWord = words[0];
    let lastWord = words[words.length - 1];
    words[0] = lastWord;
    words[words.length - 1]= firstWord;
    return words.join(' ');

}
console.log(swapFirstLastWord('Hello '))

const countPos = arr => arr.filter(x => x > 0).length;
console.log(countPos([-45, 0, 0, 4, 5, 67]))

const getEvens = (num1, num2) =>{
    let evens = [];
    for(let i=Math.min(num1, num2); i<= Math.max(num1, num2); i++){
        if(i % 2 ===0) evens.push(i);
    }
    return evens;
}
console.log(getEvens(5,5))

const getMultipleOf5 = (num1, num2) =>{
    let multiplyOf5 =[];
    for(let i=Math.min(num1, num2); i<= Math.max(num1, num2); i++){
        if(i % 5 ===0) multiplyOf5.push(i);
    }
    if(num1> num2) return multiplyOf5.reverse();
    return multiplyOf5;
}
console.log(getMultipleOf5(5,5))

const countNeg = (arr) => arr.filter(x => x < 0).length;
console.log(countNeg([-23,-4,0,2,5,90,123]))

const countA = str => str.split('').filter(char => char.toLowerCase() === 'a').length;
console.log(countA('Techglobal is a QA bootcamp'))

const countWords = str => str.trim().split(' ').length;
console.log(countWords('    Javascript is Fun   '))

const factorial = num =>{
    let fac =1;
    for(let i =2; i<=num; i++){
        fac *=i;
    }
    return fac;
}
console.log(factorial(0))

const count3Orless = str => str.split(' ').filter(word => word.length>0 && word.length<=3).length;
//make sure its &&
console.log(count3Orless(''));

const removeExtraSpaces = str => str.trim().split(' ').filter(s => s.length>0).join(' ');
// split by space
console.log(removeExtraSpaces('Java        Is   Fun   '));

const middleNumber = (num1, num2, num3)=> [num1,num2,num3].sort((a,b) => a-b)[1];
console.log(middleNumber(-1,25,10))

const midddleNumber =(num1, num2, num3) =>{
    if(num1> num2 && num1< num3) return num1;
    else if(num2> num1 && num2< num3) return num2;
    else return num3;
}
console.log(midddleNumber(-1,25,10))

const firstDuplicate =arr => {

    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if (arr[i] === arr[j]) return arr[i]
        }
    }
    return -1;
}
console.log(firstDuplicate([3,7,10,0,3,10]))

const getDuplicates = arr =>
{
    let duplicates = [];

    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if (arr[i] === arr[j] && !(duplicates.includes(arr[i])))
                duplicates.push(arr[i]);    
    } 
}
return duplicates;
}
console.log(getDuplicates([0,-4,-7,0,5,10,45,-7,0]))

const countVowels = str => str.split('').filter(char => ['a','e','i','o','u'].includes(char.toLowerCase())).length;
console.log(countVowels(''));

const reverseStringWords = str => {
    let words =str.trim().split(' ');
    //split by words
    for(let i=0; i< words.length; i++){
        //reverse each word
        words[i] = words[i].split('').reverse().join('')
    }
    //join by space
    return words.join(' ')

}

console.log(reverseStringWords('Hello World'));
console.log(reverseStringWords('I love JavaScript'))

const countConsonants = str => str.split('').filter(char => !('aeiouAEIOU'.includes(char))).length;
console.log(countConsonants('Hello World'))


const countMultipleWords = (arr) => arr.reduce((acc, curr) => curr.trim().includes(' ') ? acc + 1 : acc, 0);
console.log(countMultipleWords(['foo', '', '  ', 'foo bar', '    ']));
 console.log(countMultipleWords(['  ', '', "abc", 'a b c', 'abc abc']))

 const fizzBuzz = (num1, num2) =>{
   const arr =[];
   for (let i = Math.min(num1, num2); i<= Math.max(num1, num2); i++){
    let str ='';
    if(i % 3 === 0) str+= 'Fizz';
    if(i% 5 === 0) str+='Buzz';
    if(str === '' ) str = i.toString();
    arr.push(str)
   }
   return arr.join(' | ');
 }
 console.log(fizzBuzz(9,6))

 const isPalindrome = str => str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
 // ask if case sensative
 console.log(isPalindrome(''))

 const isPrime = num =>{
    if(num < 2) return false;
    if (num === 2 || num === 3) return true;
    if(num% 2 === 0 || num%3 === 0) return false;
    let d=5;
    while(d< num){
        if(num % d === 0) return false;
        d+=2;
    }
    return true;   
 }
 console.log(isPrime(30));

 const add = (arr1, arr2) =>
 {
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
    return arr1.map((val, i)=> val +(arr2[i] || 0))

 }

 const noA = arr => arr.map(word => word.toLowerCase()[0] === 'a' ? '###' : word)
 console.log(noA(['apple', 'A', '123']))

 const removeDuplicates = arr =>
 {
    let removed = [];
    arr.forEach(element => {
        if(!removed.includes(element)) removed.push(element);   
    });
    return removed;
 }
 console.log(removeDuplicates([10,20,35,20,35,60,70,60]))


const noDigit = str => str.split('').filter(char => char < '0' || char > '9').join('');
// use || 
console.log(noDigit('123vcd'))

const noVowel = str => str.split('').filter(char => !'aeiouAEIOU'.includes(char)).join('');
console.log(noVowel('123aeIOUvcd'))

const sumOfDigits = str => str.split('').filter(char => char>='0' && char <='9').reduce((acc,curr) => acc+=Number(curr),0);
//use &&
console.log(sumOfDigits('125.07hjak'))

const arrFactorial = arr =>{
    return arr.map(el => {
        let fac =1;
        for (let i =2; i<= el; i++){
            fac*=i;
        }
        return fac;
        //dont forgget to retun fac
    })
}
console.log(arrFactorial([1,2,3,4]))