function even(num) {
    const reminder = num % 2;
    if (reminder == 0) {
        return true;
    }

    else
        return false;
}
const numb = even(15);
console.log(numb);
