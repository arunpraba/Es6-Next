/*
    Not use cases of Arrow Function
*/

const button = document.querySelector('.push');
console.log(button);

//In Arrow Function this keyword will bound to its parent(window)
// button.addEventListener('click', () => {
//   console.log(this);
//   this.classList.toggle('on');
// });

button.addEventListener('click', function() {
  this.classList.toggle('on');
});

// When object is using Method
// const person = {
//   points: 24,
//   score: () => {
//     this.points++;
//   }
// };

const person = {
  points: 24,
  score() {
    this.points++;
  }
};

person.score();
person.score();
person.score();
console.log(person);

class Car {
  constructor(make, color) {
    this.make = make;
    this.color = color;
  }
}

const bmw = new Car('Bmw', 'Red');
const benz = new Car('Benz', 'White');

// When we need to add prototype method

// Car.prototype.summerize = () => {
//   return `This ${this.color} car is made by ${this.make} `;
// };
//This undefined car is made by undefined

Car.prototype.summerize = function() {
  return `This ${this.color} car is made by ${this.make} `;
};
console.log(bmw.summerize());

// When we need argument objects
// const orderChildren = () => {
//   const children = Array.from(arguments);
//   return children.map((child, i) => {
//     return `${child} was #${i + 1}`;
//   });
// };

//Uncaught ReferenceError: arguments is not defined

const orderChildren = function() {
  const children = Array.from(arguments);
  return children.map((child, i) => {
    return `${child} was #${i + 1}`;
  });
};

// orderChildren('Merry', 'Bekki', 'Tark');
console.log(orderChildren('Merry', 'Bekki', 'Tark'));
