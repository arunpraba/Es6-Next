/*
  Destructuring
*/

const javscript = {
  language: 'Javascript',
  founder: 'Eich',
  company: 'Netscape',
  engine: 'V8',
  version: 'Es2019',
  popularFramework: 'Angular'
};

console.log(javscript);
// Destructuring
const { language, founder } = javscript;
console.log(language);
console.log(founder);

const mapping = {
  company: 'Google',
  location: 'Bangalore',
  opening: {
    junior: {
      admin: 'Admin Executive',
      finance: 'Accountant'
    },
    senior: {
      it: 'Angular Developer'
    }
  }
};

// Normal
const { admin, finance } = mapping.opening.junior;
console.log(admin);
console.log(finance);

// With Changed Name
const { admin: ad, finance: fn } = mapping.opening.junior;
console.log(ad);
console.log(fn);

const settings = { width: 300, color: 'black' };

const { width = 190, height = 100, color = 'black' } = settings;
console.log(width); //300
console.log(height); //100
