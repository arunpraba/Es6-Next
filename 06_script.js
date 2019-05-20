/*
  String Methods
*/

const name = 'Tango';
const area = 'Bangalore';
const bio = 'Actor';

console.log(name.startsWith('Ta')); //true
console.log(area.startsWith('Ta')); //false
console.log(bio.startsWith('ct', 1)); //true
console.log(bio.endsWith('ct', 1)); //false
console.log(name.endsWith('go')); //true
console.log(bio.includes('ac')); //false
console.log(bio.includes('Ac')); //true
console.log(bio.repeat(10)); //true

function leftPad(str, length = 50) {
  return `-> ${''.repeat(length - str.length)} ${str}`;
}

console.log(leftPad(bio));
