document.getElementById("btn-withdraw").addEventListener('click', function () {
    const newWithdrawAmount = getInputValueById('withdraw-input');
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const withdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    setElementvaluebyID('withdraw-total', withdrawAmount);
    const previousBalanceTotal = getElementValueById('balance');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElementvaluebyID('balance', newBalanceTotal);
})