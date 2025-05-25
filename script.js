

const passwordBox = document.getElementById('password');
const lengthInput = document.getElementById('length');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]<>?=-~}{';

function createPassword() {
    let length = parseInt(lengthInput.value) || 12; 
    
    let password = "";
    
    let charPool = "";

    if (document.getElementById('uppercase').checked) {
        charPool += upperCase;
    }
    
    if (document.getElementById('lowercase').checked) {
        charPool += lowerCase;
    }
    
    if (document.getElementById('numbers').checked) {
        charPool += numbers;
    }
    
    if (document.getElementById('symbols').checked) {
        charPool += symbols;
    }

    if (charPool === "") {
        alert("Please select at least one character type.");
        return;
    }

    if (document.getElementById('uppercase').checked) {
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if (document.getElementById('lowercase').checked) {
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if (document.getElementById('numbers').checked) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (document.getElementById('symbols').checked) {
        password += symbols[Math.floor(Math.random() * symbols.length)];
    }

    while (password.length < length) {
        password += charPool[Math.floor(Math.random() * charPool.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
}
