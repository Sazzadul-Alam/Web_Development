//problem:3
function oilPrice(dquantity, pquantity, oquantity) {

    let dieselPrice = 114;
    let petrolPrice = 130;
    let ocetenPrice = 135;

    let sum = ((114 * dquantity) + (130 * pquantity) + (135 * oquantity))
    return sum;
}
const total = oilPrice(1, 2, 3);
console.log(total);