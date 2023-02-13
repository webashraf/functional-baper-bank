document.getElementById('deposit-btn').addEventListener('click', function(){
    if (isNaN(parseFloat(document.getElementById('deposit-fild').value))) {
        alert('Please give valid number')
        return;
    }
    setValue('deposit-up-value', 'deposit-fild', 'true');
    setValue('balnce-up-value', 'deposit-fild', 'true');
    document.getElementById('deposit-fild').value = '';
})