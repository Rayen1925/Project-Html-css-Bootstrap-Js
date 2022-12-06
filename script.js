
function test(){
   
    var inputName=document.getElementById('name');
    var inputprenom=document.getElementById('prenom');
    var inputtel=document.getElementById('tel');
    var inputemail=document.getElementById('email');
    
    var inputError1=document.getElementById('error-name')
    var inputError2=document.getElementById('error-prenom')
    var inputError3=document.getElementById('error-tel')
    var inputError4=document.getElementById('error-email')
    
    var valueName=inputName.value;
    var valueprenom=inputprenom.value;
    var valuetel=inputtel.value;
    var valuemail=inputemail.value;
    
    if( valueName.lenght < 3 && valueprenom.lenght < 3  && valuetel.lenght < 8 && valuemail.lenght == 0){
        inputName.style.borderBottom='2px solid red'
        inputError1.innerText='name is required'
        inputprenom.style.borderBottom='2px solid red'
        inputError2.innerText='prenom is required'
        inputtel.style.borderBottom='2px solid red'
        inputError3.innerText='num tel is required'
        inputemail.style.borderBottom='2px solid red'
        inputError4.innerText='email is required'
    }
}