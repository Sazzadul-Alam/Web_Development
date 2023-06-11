//problem:1
function radianToDegree(radian) {
    let pi = 3.1416;
    let radians = (radian * (180 / pi));
    radians = radians.toFixed(2);
    return radians;
}


const degree = radianToDegree(199);
console.log(degree);

