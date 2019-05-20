/*
  Destructuring Array
*/

const javscript = ['Angular', 7.3, 'Google'];
// console.log(javscript);

const [name, version, team] = javscript;
console.log(name);
console.log(version);
console.log(team);

const data = 'Basketball,Sports,21, Captain, team';
console.log(data.split(',')); //["Basketball", "Sports", "21"]

const [game, category, score] = data.split(',');
console.log(game);
console.log(category);
console.log(score);

const cricket = ['Dhoni', 'Kholi', 'Rohit', 'Dhawan'];
// Using the spread operator to fetch all values
const [captain, assistant, ...players] = cricket;

console.log(captain);
console.log(assistant);
console.log(players);

// variable swapping
let innerSpace = 'Mind';
let outerSpace = 'Intersteller';

console.log(innerSpace, outerSpace);
[innerSpace, outerSpace] = [outerSpace, innerSpace];
console.log(innerSpace, outerSpace);

function realityTime(timeAgo) {
  const converted = {
    mirror: (timeAgo * 1) / 100000000000,
    moon: timeAgo * 1,
    sun: timeAgo * 8,
    stars: timeAgo * 100
  };
  return converted;
}

const { mirror, moon, sun, stars } = realityTime(10);
console.log(mirror, moon, sun, stars);

// tip calculator with object destructuring
tipCalc = ({ total, tip = 0.13, tax = 0.1 }) => {
  return total + total * tip + total * tax;
};

const bill = tipCalc({ total: 100, tax: 0.1, tip: 0.2 });
console.log(bill);
const newBill = tipCalc({ total: 100, tax: 0.1 });
console.log(newBill);
