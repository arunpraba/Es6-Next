/*
  Promises
*/

const posts = fetch('https://jsonplaceholder.typicode.com/posts');
const dataRepsonse = posts
  .then(data => {
    return data.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

// console.log(dataRepsonse);

const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error Wes isn't cool");
  }, 1000);
});

promises
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
