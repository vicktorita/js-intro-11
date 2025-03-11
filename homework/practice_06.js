console.log('--------------task 1--------------\n')

/*
Requirement:
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])  -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])                         -> 1*/ 
const firstPos1 = arr => { 
    for(const el of arr){
        if(el>0) return el;
    }
}
console.log(firstPos1([0, 3, -9,  5, 8]));  
console.log(firstPos1([-2, 0, -7, 10, -5]));  
console.log(firstPos1([1, 2, 3, -2]) ) 

const firstPos2 = arr => arr.filter(el => el > 0)[0];
console.log(firstPos2([0, 3, -9,  5, 8]));  
console.log(firstPos2([-2, 0, -7, 10, -5]));  
console.log(firstPos2([1, 2, 3, -2]) ) 

const firstPos3 = arr => arr.find(el => el>0);


console.log(firstPos3([0, 3, -9,  5, 8]));  
console.log(firstPos3([-2, 0, -7, 10, -5]));  
console.log(firstPos3([1, 2, 3, -2]) ) 


console.log('--------------task 2--------------\n')

/*Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2   */

function lastNeg(arr ){

    for(let i = arr.length -1; i>=0; i--){
        if(arr[i]< 0) return arr[i]
    }
}
console.log(lastNeg([0, 3, -9, 5, 8]));

function lastNeg1(arr) {
    return arr.reduce((lastNegative, num) => (num < 0 ? num : lastNegative), null);
}
console.log(lastNeg1([1, 2, 3, -2]) );



const lastneg = arr=> arr => arr.filter(el => el < 0).ar(-1);
const lastneg1 = arr=> arr.reverse().find(el => el <0);
const lastneg2 = arr => arr.findlast(el => el<0);


/*
Requirement:
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> 
"yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> 
"Banana"
firstLongest(["purple", "yellow", "orange"])  -> 
"purple"
*/

function firstLongest(arr){
   return arr.reduce((acc, curr) =>{
    return acc.length > curr.length ? curr : acc}) ;
} 

console.log(firstLongest(["purple", "yellow", "orange"]));

const firstLongest1 = arr => {
    let longest = arr[0]

    for (const ele of arr){
        if(ele.length> longest.length) longest = ele;
    }
    return longest;
}

console.log(firstLongest1(["purple", "yellow", "orange"]));

const firstLongest2 = arr => arr.reduce((longest, ele) => ele.length > longest.length ?ele : longest);

const firstLongest3 = arr => arr.sort((a, b) => b.length - a.length)[0];
console.log(firstLongest3(["purple", "yellow", "orange"]));


/*
Requirement:
Write a function named as min() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])                 -> 1
*/ 

const minNum =arr => arr.reduce((acc,curr)=> acc<curr ?acc:curr)
console.log(minNum([-2, 0, -7, 10, -5]));


const min =arr =>{
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
      if(arr[i] < min) min= arr[i];
    }
    return min;
}
console.log(min([-2, 0, -7, 10, -5]));