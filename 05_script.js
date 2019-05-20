/*
  Template String
*/

const name = 'Snickers';
const age = 2;
const description = highlight`My dog is  name is ${name} and ${age *
  7} years old `;

// console.log(description);

function highlight(strings, ...args) {
  return 'cool';
}
console.log(description);

const person = {
  name: 'Juke',
  job: 'Software developer',
  bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius, cumque optio reprehenderit debitis provident
  necessitatibus dolorum, libero, tempore nulla quasi vitae incidunt vel! Earum veritatis enim sapiente excepturi
  consequuntur!`
};

const markup = `
  <div class="person">
      <h2>${person.name}</h2>
      <h3>${person.job}</h3>
      <p>${person.bio}</p>
  </div>
`;

languageList = [
  {
    language: 'c',
    place: 1
  },
  {
    language: 'c++',
    place: 2
  },
  {
    language: 'java',
    place: 3
  },
  {
    language: 'python',
    place: 4
  },
  {
    language: 'javascript',
    place: 5
  },
  {
    language: 'php',
    place: 6
  }
];

const loops = `
  <ul>
  ${languageList
    .map(lang => {
      return `
    <li>
      Language is ${lang.language} and place: ${lang.place}
    </li>`;
    })
    .join(' ')}
  </ul>
`;

const loopsDiv = document.getElementById('loops');
loopsDiv.innerHTML = loops;
