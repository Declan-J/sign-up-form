//set variable PASSWORD
const password = document.querySelector('input[id="password"]');
let password_value;
const passwordValidity = password.validity;

//set variable CONFIRM PASSWORD
const confirmPassword = document.querySelector('input[id="confirm-password"]');
let confirm_password_value;
const confirmPasswordValidity = confirmPassword.validity;

function validatePassword() {
    if(password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
    } else {
        confirmPassword.setCustomValidity("");
    }
}

// check if value is changed
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validatePassword);