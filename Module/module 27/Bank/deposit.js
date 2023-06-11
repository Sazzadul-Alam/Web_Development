/*
    1. add event listener to the deposit button
    2. get deposit amount from the deposit field

*/
document.getElementById("btn-deposite").addEventListener('click', function () {
    const depositField = document.getElementById("deposit-input");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    depositField.value = '';
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    const previousBalance = document.getElementById("balance");
    const previousBalanceTotal = parseFloat(previousBalance.innerText);

    const newBalance = previousBalanceTotal + newDepositAmount;
    previousBalance.innerText = newBalance;

})