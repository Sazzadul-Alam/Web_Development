function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;

    }
    return sum;
}
function getOddNumber(numbers) {
    const OddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            //console.log(index, element);
            OddNumbers.push(element);
        }
    }
    return OddNumbers;
}
const myNumber = [12, 44, 55, 88, 99, 77, 66];
const OddNumbers = getOddNumber(myNumber);
console.log(OddNumbers);