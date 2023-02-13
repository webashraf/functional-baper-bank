document.getElementById('submitButton').addEventListener('click', function(){
    // console.log('click');
    const email = document.getElementById('email');
    const emailValue = email.value;
    const pass = document.getElementById('password');
    const passValue = pass.value;
    console.log(emailValue, passValue);
    if (emailValue == 'aliashraftamim@gmail.com' && passValue == '1234') {
        window.location.href = 'bank.html'
        
    }
    else{
        alert('Please give valid email and password')
    }
})