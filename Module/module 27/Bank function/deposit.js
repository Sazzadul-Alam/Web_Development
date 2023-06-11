
document.getElementById("btn-deposit").addEventListener('click', function () {

    const newDepositAmount = getInputValueById('deposit-input');
    const previousDepositAmount = getElementValueById('deposit-total');
    const depositAmount = newDepositAmount + previousDepositAmount;
    setElementvaluebyID('deposit-total', depositAmount);
    const previousBalanceTotal = getElementValueById('balance');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setElementvaluebyID('balance', newBalanceTotal);
})