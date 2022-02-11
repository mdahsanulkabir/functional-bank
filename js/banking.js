document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmount = depositTotal.innerText;
    depositTotal.innerText = parseFloat(depositAmount) + parseFloat(depositTotalAmount);
    //clear input field
    depositInput.value = '';

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmount);
    
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    //get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = withdrawTotal.innerText;
    withdrawTotal.innerText = parseFloat(withdrawAmount) + parseFloat(withdrawTotalAmount);
    //clear withdraw field
    withdrawInput.value = '';

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(withdrawAmount);
    
})