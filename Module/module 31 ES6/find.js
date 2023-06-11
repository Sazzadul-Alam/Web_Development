const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbers.find(num => num % 5 === 0)
const fivesAll = numbers.filter(num => num % 5 === 0)
console.log(fives)
console.log(fivesAll)