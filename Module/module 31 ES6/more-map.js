const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2);
const third = numbers.map(n => n / 3);
// console.log(half);
// console.log(third);

const friends = ['Tom Hank', 'Tom Cruise', 'Tom Brady', 'Tom Holland'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);

const nameLenghts = friends.map(friend => friend.length);
// console.log(nameLenghts);


const products = [
    { id: 1, name: 'laptop', price: 85000 },
    { id: 1, name: 'mobile', price: 65000 },
    { id: 1, name: 'watch', price: 55000 },
    { id: 1, name: 'tablet', price: 45000 },
]

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(product => product.price);
console.log(prices);
