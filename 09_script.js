/*
  Loops
*/
const mobiles = ['Samsung', 'Apple', 'Oppo', 'Vivo', 'One +'];

// Normal Looping to get the count
let i = 1;
for (mobile of mobiles) {
  console.log(`${i}:${mobile}`);
  i++;
}

// Object destructuring
for (const [j, mobile] of mobiles.entries()) {
  console.log(`${j}: ${mobile}`);
}

function addAllNumbers() {
  let total = 0;
  for (num of arguments) {
    total += num;
  }
  console.log(total);
}

addAllNumbers(10, 2, 352, 342, 534);

const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(fruit => console.log(fruit));

mobiles.forEach((mobile, index) => console.log(`${index + 1}:${mobile}`));

for (const i in mobiles) {
  console.log(`${i}:${mobiles[i]}`);
}

Array.prototype.suffle = function() {
  var i, j, temp;
  i = this.length;
  if (i === 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

console.log(mobiles.suffle());

// Looping Objects
const company = {
  name: 'Microsoft',
  founder: 'Billgates',
  business: 'Operating System',
  category: 'Software',
  sharePrice: '128.07USD'
};

console.log(company);
// Object Keys
for (const prop of Object.keys(company)) {
  console.log(company[prop]);
}
// Object Values
console.log('values : ', Object.values(company));
