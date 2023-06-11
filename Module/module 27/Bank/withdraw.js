document.getElementById("btn-withdraw").addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input');
    const newwithdrawField = parseFloat(withdrawField.value);
    withdrawField.value = '';
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    const newWithdrawTotal = previousWithdrawTotal + newwithdrawField;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const balance = document.getElementById("balance")
    const previousBalance = parseFloat(balance.innerText);
    const newBalance = previousBalance - newwithdrawField;
    balance.innerText = newBalance;

})