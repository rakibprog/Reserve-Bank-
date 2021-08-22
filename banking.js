// get input value 
function getInputValue(id) {
    const inputValue = document.getElementById(id);
    const inputNumber = inputValue.value;
    const totalValue = parseFloat(inputNumber);
    inputValue.value = '';
    return totalValue;

}

//set input Value 
function setInputValue(id, amount) {
    const depositTotal = document.getElementById(id);
    const depositNew = depositTotal.innerText;
    const depositCurrent = parseFloat(depositNew) + amount;
    depositTotal.innerText = depositCurrent;
}


// get field text 
function getFieldText(id) {
    const fieldText = document.getElementById(id);
    const fieldValue = fieldText.innerText;
    const fieldTotal = parseFloat(fieldValue);
    return fieldTotal;
}

// update balance 
function updateBalance(amount, isAdd) {
    // const balance = document.getElementById('total-balance');
    // const balanceNew = balance.innerText;
    const previousBalance = getFieldText('total-balance')
    let totalBalance;
    if (isAdd == true) {
        totalBalance = previousBalance + amount;
    } else {
        totalBalance = previousBalance - amount;
    }
    // refactor code
    document.getElementById('total-balance').innerText = totalBalance;
}

document.getElementById('deposit-button').addEventListener('click', function() {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        setInputValue('deposit-total', amount);
        updateBalance(amount, true);
    }

});

// get event listener withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function() {
    const amount = getInputValue('withdraw-input');
    const totalBalance = getFieldText('total-balance');
    if (amount > 0 && totalBalance >= amount) {
        setInputValue('withdraw-value', amount);
        updateBalance(amount, false);
    }

});