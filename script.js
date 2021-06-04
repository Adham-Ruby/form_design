// animation when the page loads

let globalContainer = document.getElementsByClassName('global-container');

function appearForm(){
    globalContainer[0].style.opacity = '1';
    globalContainer[0].style.transition = 'all 1s ease-in-out 0s';
    globalContainer[0].style.transform = 'translate(-50%, -50%)';
}   
setTimeout(appearForm(), 3000);

// Passwords don't match

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;