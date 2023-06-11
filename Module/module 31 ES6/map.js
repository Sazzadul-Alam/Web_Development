const numbers = [2, 8, 4, 6, 3];

// function getDoubles(numbers) {
//     const output = [];
//     for (const number of numbers) {
//         const doubled = doubleIt(number)
//         output.push(doubled);
//     }
//     return output;
// }
const doubleIt = num => num * 2;
// function doubleIt()
// const result = getDoubles(numbers);
// console.log(result);




const makeDouble = numbers.map(doubleIt)
const makeDoubleDirect = numbers.map(num => num * 2);
// console.log(makeDouble);
// console.log(makeDoubleDirect);
const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes)