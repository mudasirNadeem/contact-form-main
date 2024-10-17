var userInformation = document.querySelectorAll('input[type="text"], textarea');
var emailValidation = document.getElementById('input-email');
var radioValidation = document.querySelectorAll('input[type="radio"]');
var checkboxValidation = document.getElementById('chk-consent');

function submitDataFun(){
    userInformation.forEach(item => {
      nameValidation(item);
    });
    emailValidationFun();
    radioButtonFun();
    checkboxFun();
}
function nameValidation(item){
  var getParentElement =  item.parentElement.nextElementSibling;
  if(item.value.length  >= 3){
     getParentElement.dataset.active = 'false';
  }   
  else{
     getParentElement.dataset.active = 'true';
  }
}
function emailValidationFun(){
    var getParentElement =  emailValidation.parentElement.nextElementSibling;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email =  emailPattern.test(emailValidation.value);
    if(!email){
      getParentElement.dataset.active = 'true';
    }
    else{
      getParentElement.dataset.active = 'false';
  
    }
}
function radioButtonFun(){
   var firstIndexgetParentElement =  radioValidation[0].parentElement.parentElement.nextElementSibling.nextElementSibling;
   var secondIndexgetParentElement =  radioValidation[1].parentElement.parentElement.nextElementSibling;
  if(radioValidation[0].checked || radioValidation[1].checked){
    secondIndexgetParentElement.dataset.active = 'false';
    firstIndexgetParentElement.dataset.active = 'false';
  }  
  else{
    secondIndexgetParentElement.dataset.active = 'true';
    firstIndexgetParentElement.dataset.active = 'true';

  }
}

function checkboxFun(){
  var getParentElement =  checkboxValidation.parentElement.nextElementSibling;
if(checkboxValidation.checked){
  getParentElement.dataset.active = 'false';
}
else{
  getParentElement.dataset.active = 'true';
}
}