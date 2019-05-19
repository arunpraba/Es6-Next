/*
    Var, Let & Const
 */

var width = 100;
console.log(width);

var height = 200;
var width = 200;

console.log(width);

let homeTown = 'Bangalore';
console.log(homeTown);

const name = 'Carl Sagan';
console.log(name);

const employee = {
  firstName: 'Johan',
  lastName: 'Johan',
  address: ['123', 'Summer Street']
};
console.log(employee);

employee.address = ['123', 'Summer Street', 'Bangalore'];
console.log(employee);

for (var i = 0; i < 10; i++) {
  console.log(`i with in for loop ${i}`);
}
console.log(`i after in for loop ${i}`);

for (let j = 0; j < 10; j++) {
  console.log(`j with in for loop ${j}`);
}
/*
let is block scope j will not be executed outer for loop
console.log(`j after in for loop ${j}`);
*/

// Switch the variables and values
let first = 'One';
let second = 'Two';

[first, second] = [second, first];
console.log(first);
