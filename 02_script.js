/*
    Arrow Function
 */
const names = ['Luke', 'Mike', 'Jason'];

// Arrow Function Explicit Return
const fullNames = names.map(name => {
  return `${name} Jerry`;
});
console.log(fullNames);

// Arrow Function Implicit Return
const fullNames2 = names.map(name => `${name} Jerry`);
console.log(fullNames2);

// Arrow Function with Implicit Return in Object
const race = '100meters';
const winners = ['Clark', 'Mark', 'Alisha'];
const win = winners.map((winner, i) => ({
  name: winner,
  race: race,
  place: i + 1
}));
console.table(win);

const users = [
  { id: 1, name: 'Ben' },
  { id: 2, name: 'Victor' },
  { id: 3, name: 'Jerry' },
  { id: 4, name: 'Josh' },
  { id: 5, name: 'Lukas' }
];

// Dot notation in Object
const userNames = users.map(user => user.name);
console.log(userNames);

// Square Bracket notation in Object
const userNames1 = users.map(user => user['name']);
console.log(userNames1);

// Function call in Arrow Function
sayHellow = name => `Hellow ${name}`;
console.log(sayHellow('Ben'));

// Filter method with arrow Function
const ages = [23, 45, 26, 65, 44, 28];
ageFilter = ages.filter(age => age >= 30);
console.log(ageFilter);

// Default Arguments with Arrow Function
caculateBill = (total, tax = 0.13, tip = 0.15) => {
  return total + total * tax + total * tip;
};

console.log(caculateBill(100, undefined, 0.25));
