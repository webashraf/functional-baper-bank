function InputValue(depoInput){
    const oldInput = document.getElementById(depoInput);
    const inputValue = oldInput.value;
    const inputValueConvert = parseFloat(inputValue);
    return inputValueConvert;
}
function upValue(depoStrValu){
    const depoOldvalue = document.getElementById(depoStrValu);
    const depoValue = depoOldvalue.innerText;
    const convertDepoValue = parseFloat(depoValue);
    return convertDepoValue;
}
function setValue(upHValue, inputHValue, possitiveNagative){
    if (possitiveNagative == 'true') {
        const depo =  document.getElementById(upHValue);
        depo.innerText = upValue(upHValue) + InputValue(inputHValue); 
    }
        else {         
            const depo =  document.getElementById(upHValue);
            depo.innerText = upValue(upHValue) - InputValue(inputHValue); 
        }
}