function updateMobileNumber(isIncrease) {

    const mobileNumberField = document.getElementById('mobile-number-field');
    const PreviousmobileNumber = parseInt(mobileNumberField.value);
    let newmobileNumber;
    if (isIncrease === true) {
        newmobileNumber = PreviousmobileNumber + 1;

    }
    else {
        newmobileNumber =
            PreviousmobileNumber - 1;
    }
    mobileNumberField.value = newmobileNumber;
    return newmobileNumber;
}

function updateMobileTotalPrice(newmobileNumber) {
    const mobileTotalPrice = newmobileNumber * 1219;
    const mobileTotalElement = document.getElementById('mobileTotal');
    mobileTotalElement.innerText = mobileTotalPrice;
}


document.getElementById('btn-mobile-plus').addEventListener('click', function () {
    const newmobileNumber = updateMobileNumber(true);
    updateMobileTotalPrice(newmobileNumber);
});
document.getElementById('btn-mobile-minus').addEventListener('click', function () {
    const newmobileNumber = updateMobileNumber(false);
    updateMobileTotalPrice(newmobileNumber);

});