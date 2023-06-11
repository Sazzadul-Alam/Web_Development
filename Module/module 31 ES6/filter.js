const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(Number => Number > 20);
const tiny = numbers.filter(number => number < 10);
const even = numbers.filter(number => number % 2 === 0);
// console.log(bigNums);
// console.log(tiny);
// console.log(even);

const products = [
    { id: 1, name: 'laptop', price: 85000 },
    { id: 1, name: 'mobile', price: 65000 },
    { id: 1, name: 'watch', price: 55000 },
    { id: 1, name: 'tablet', price: 45000 },
];
const expensive = products.filter(product => product.price > 60000);
console.log(expensive);