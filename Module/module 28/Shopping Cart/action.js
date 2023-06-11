function updateCaseNumber(isIncrease) {

    const caseNumberField = document.getElementById('case-number-field');
    const PreviousCaseNumber = parseInt(caseNumberField.value);
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = PreviousCaseNumber + 1;
    }
    else {
        newCaseNumber = PreviousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('caseTotal');
    caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);

});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
})