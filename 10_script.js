/*
  Array
*/

const language = Array.from(document.querySelectorAll('p'));
langList = language.map(lang => lang.textContent);
console.log(langList);

function sumAll() {
  const arr = Array.from(arguments);
  let total = arr.reduce((a, b) => a + b, 0);
  console.log(total);
}

sumAll(21, 3243, 435, 43, 534, 435, 54);

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body:
      'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body:
      'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body:
      'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
  },
  {
    userId: 1,
    id: 7,
    title: 'magnam facilis autem',
    body:
      'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
  },
  {
    userId: 1,
    id: 8,
    title: 'dolorem dolore est ipsam',
    body:
      'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
  },
  {
    userId: 1,
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    body:
      'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
  },
  {
    userId: 1,
    id: 10,
    title: 'optio molestias id quia eum',
    body:
      'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
  }
];

// console.log(posts);

// Find
const newPost = posts.find(post => post.title === 'magnam facilis autem');
console.log(newPost);

// Find indexOf
const newPostIndex = posts.findIndex(
  post => post.title === 'magnam facilis autem'
);
console.log(newPostIndex);

//.some()
const ages = [12, 16, 23, 43, 19, 22];
const eligible = ages.some(age => age > 18);

console.log(eligible);

// .every()
const vote = ages.every(age => age > 19);
console.log(vote);

// .concat
const sweets = ['Chocolates', 'Cakes', 'Ice Creams'];
const flavour = ['Vennila', 'Chocolate', 'Strawberry'];

const sweetsFlavour = sweets.concat(flavour);
console.log(sweetsFlavour);

const sweetJoin = [...sweets, 'Veg', ...flavour];
console.log(sweetJoin);
