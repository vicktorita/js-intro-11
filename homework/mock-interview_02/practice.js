function noA(arr) {
    return arr.map(word => (word.toLowerCase()[0] === 'a') ? '###' : word)
};
console.log(noA(['javascript', 'apple', '123', "ABC"]))


const count3OrLess = (str) => {
    return str.trim().split(' ').filter(word => word.length > 0 && word.length <= 3).length;
}

console.log(count3OrLess('My name is John Doe'));

const arrayFactorial = (arr) => {

    return arr.map(num => {
        let fac = 1;
        for (let i = 2; i <= num; i++) {
            fac *= i;
        } return fac;
    });

}
console.log(arrayFactorial([0, 5]))


const firstLastWord = (str) => {
    str = str.trim().split(' ');

    return (str[0] + str[str.length - 1])

}
console.log(firstLastWord('Hello'));


const getEvens = (num1, num2) => {

    let evens = [];
    let greatestNum = Math.max(num1, num2);
    let smallestNum = Math.min(num1, num2)
    for (let i = smallestNum; i <= greatestNum; i++) {
        if (i % 2 === 0)
            evens.push(i);
    }
    return evens;



}
console.log(getEvens(3, 3));

const countPos = (arr) => arr.filter(num => num > 0).length;
console.log(countPos([-45, 0, 0, 34, 5, 67]));


const replaceFirstLast = (str) => {
    str = str.trim()
    //return str.length < 2 ? "" : str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
    return str.length < 2 ? '' : str.at(-1) + str.slice(1, -1) + str[0];
}

console.log(replaceFirstLast('      A       '));

const doubleOrTripple = (str) => str.length % 2 === 0 ? str + str + str : str + str;
console.log(doubleOrTripple(' '))


const hasVowel = (str) => str.trim().split('').filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())).length > 0;
console.log(hasVowel('ABC'))

const startVowel = (str) => 'aeiouAEIOU'.includes(str[0]);
console.log(startVowel('Apple'));

const averageOdEdges = (num1, num2, num3) => {
    return (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2

}
console.log(averageOdEdges(10, 13, 20))


const swap4 = (str) => str.length < 8 ? '' : str.slice(-4) + str.slice(4, -4) + str.slice(0, 4)
console.log(swap4('tech Global'))


const swapFirstLastWord = (str) => {
    str = str.trim().split(' ');
    if (str.length < 2) return '';
    let firstWord = str[0];
    let lastWord = str[str.length - 1];
    str[0] = lastWord;
    str[str.length - 1] = firstWord;
    return str.join(' ')

}
console.log(swapFirstLastWord('Hello'));

const getMultipleOf5 = (num1, num2) => {
    let divisbleby5 = [];
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 5 === 0) divisbleby5.push(i)
    }

    if (num1 > num2) return divisbleby5.reverse();
    return divisbleby5;

}
console.log(getMultipleOf5(2, 4))

const countNeg = (arr) => arr.filter(num => num < 0).length;
console.log(countNeg([-45, 0, 0, 34, 5, 67]))

const countA = (str) => str.trim().split('').filter(char => char.toLowerCase() === 'a').length;
console.log(countA('TechGlobal is a QA bootcamp'))

const countWords = (str) => str.trim().split(' ').length;
console.log(countWords('   Cypres is an ui automation tool   '));

const factorial = (num) => {
    let total = 1;
    for (let i = 2; i <= num; i++) {
        total *= i;
    }
    return total;

}
console.log(factorial(0))

const removeExtraSpaces = (str) => str.trim().split(' ').filter(s => s.length > 0).join(' ');
//[ 'Javascript', '', '', '', '', 'is', '', '', '', 'fun' ] => str.trim().split(' ');
//console.log(''.length) => 0
console.log(removeExtraSpaces('    Javascript     is    fun   '));

const middleInt = (num1, num2, num3) => {
    // return [num1, num2, num3].reverse((a, b) => a-b)[1]
    if (num1 <= num2 && num1 >= num3) return num1;
    else if (num2 > num1 && num2 < num3) return num2;
    else return num3;
}

console.log(middleInt(5, 3, 5))

const firstDuplicate = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j])
                return arr[i];
        }
    }
    return -1;
}
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));

const getDuplicates = (arr) => {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i]))
                duplicates.push(arr[i]);
        }
    }
    return duplicates;
}

console.log(getDuplicates([123, 'abc', '123', 3, 'ab', 12, 23]))

const countVowels = (str) => str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;

console.log(countVowels('JAvascript Is fun'));
console.log(countVowels(''))

const reverseStringWords = (str) => {
    let words = str.trim().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }
    return words.join(' ');
}

console.log(reverseStringWords('Hello'));

const countConsonants = (str) => str.trim().split('').filter(char => !('aeiouAEIOU'.includes(char))).length;
console.log(countConsonants(''));

const countMultipleWords = (arr) => arr.reduce((acc, curr) => curr.trim().includes(' ') ? acc + 1 : acc, 0);
console.log(countMultipleWords(['foo', '', '  ', 'foo bar', '    ']));


const fizBuzz = (num1, num2) => {
    const arr = [];
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        let str = '';
        // if (i % 3 === 0 && i % 5 === 0) str += 'FIzzBuzz';
        if (i % 3 === 0) str += 'Fizz';
        if (i % 5 === 0) str += 'Buzz';
        if (str === '') str = i.toString(); // if doesn not devide by 3 or 5 // give u the number to string
        arr.push(str);
    }
    console.log(arr.join(' | '));
}

fizBuzz(13, 18);

const isPalindrome = (str) => str.toLowerCase() === str.split('').reverse().join('');
console.log(isPalindrome('civic'))

const isPalindrom1 = (str) => {
    let start = str[0];
    let end = str[str.length - 1];
    for (let i = start; i <= end; i++) {
        if (str[i] !== str[end]) return false
        end--;
    } return true;
}
console.log(isPalindrom1('abba'))

const isPrime = (num) => {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let d = 5;// 5 is the next prime number
    while (d < num) {
        if (num % d === 0) return false;
        d += 2;
    }

    return true;

}
console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(29));

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

const noA = (arr) => arr.map((el => el.toLowerCase()[0] === 'a' ? '###' : el));
// dont forget index 0
console.log(noA(['apple', 'abc', 'Alex', '123']));

const no3and5 = (arr) =>{
    return arr.map( i =>{
    if(i % 3 === 0 && i % 5 ===0) return 101;
    else if(i % 3=== 0 ) return 100;
    else if(i % 5 === 0) return 99;
    return i; 
})
}
console.log(no3and5([3, 4, 15, 5, 17]))

const no13 = (arr) => arr.map((num => num === 13 ? 0 : num));
console.log(no13([13, 2, 3]));

const removeDuplicates = (arr) =>{
    let removedDupArray = [];
    arr.forEach(i => {
        if(!removedDupArray.includes(i))  removedDupArray.push(i)
        
    });
    return removedDupArray;

}
console.log(removeDuplicates([10,20,35, 20, 35,60, 70, 60]))

const noDigit = (str) => str.split('').filter(char => char < '0' || char > '9'). join('');
console.log(noDigit('125$t'))

const noVowels = (str) =>str.split('').filter(char => !('aeiou'.includes(char.toLowerCase()))).join('');
console.log(noVowels('jAvascript'));

const sumOfDigits = (str) =>str.split('').filter(char => char >= '0' && char <= '9').reduce((acc,curr) => acc += Number(curr),0)
console.log(sumOfDigits('$125.0f'));

const arrFactorial = (arr) =>{
return arr.map(num => 
{
    let total =1;
    for(let i=2; i<= num; i++){
        total *= i;
    }
    return total;
})
}
console.log(arrFactorial([0,5]))


