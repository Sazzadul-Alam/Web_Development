function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isMyYear = isLeapYear(1960);
console.log('my year:', isMyYear);