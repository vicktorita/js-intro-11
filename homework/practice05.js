
 /*
Task01

Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2: 76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

 
let num = 76;

if(num>=1 && num<=25) console.log(`${num} is in the 1st quarter \n${num} is in the 1st half`);
    else if(num>=26 && num<=50 ) console.log(`${num} is in the 1st half \n${num} is in the 4th quarter `);
    else if(num>=51 && num<=75 ) console.log(`${num} is in the 2nd half \n${num} is in the 3rd quarter `);
    else if(num>=76 && num<=100 ) console.log(`${num} is in the 2nd half \n${num} is in the 4th quarter `);



let char2 = '7ren';
let char2Code = char2.charCodeAt(0);

if(char2Code >= 48 && char2Code <= 57) {
  console.log(`"${char2[0]}" is a digit`);
}
else if((char2Code >= 65 && char2Code <= 90) || (char2Code >= 97 && char2Code <= 122)) {
  console.log(`"${char2[0]}" is a letter`);
}
else if (char2Code === 32){
 console.log(`"${char2[0]}" is a space`) 
}
else{
    console.log(`"${char2[0]}" is a special character`)
}

function middle(word) {
  if (word.length === 0) return ""; // Return empty string if input is empty

  let mid = Math.floor(word.length / 2); // Find the middle index

  // If length is odd, return the middle character; if even, return two middle characters
  return word.length % 2 === 0 ? word.slice(mid - 1, mid + 1) : word[mid];

}
console.log(middle('Global'))