//problem:4
function publicBusFare(number) {

    let busRemaining = (number % 50);
    let microbusRemaining = (busRemaining % 11);
    let publicReamaining = microbusRemaining * 250;
    return publicReamaining;

}
const amount = publicBusFare(55);
console.log(amount);
