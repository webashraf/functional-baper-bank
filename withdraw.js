document.getElementById('withdraw-btn').addEventListener('click', function(){
    const fieldValue = parseFloat(document.getElementById('withdraw-field').value);
    const blanceValue = parseFloat(document.getElementById('balnce-up-value').innerText);
    if (isNaN(fieldValue)) {
        alert('Please give valid number')
        return;
    }
    if (fieldValue > blanceValue) {
        alert('Baper bank a oto taka nai')
        return;
    }
    setValue('withdraw-up-value', 'withdraw-field', 'true');
    setValue('balnce-up-value', 'withdraw-field', 'false');
    document.getElementById('withdraw-field').value = '';
})