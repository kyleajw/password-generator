const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '.', '/', '<', '>', '?'];
let password = '';

document.querySelector('.generate-password').addEventListener('click', generatePassword);

function generatePassword(e) {
    password = '';
    let passwordLength = document.getElementById('pass-length').value;
    // if (passwordLength > document.getElementById('pass-length').max) {
    //     console.log('exceeded max');
    //     passwordLength = document.getElementById('pass-length').max;
    // }
    const includeUpper = document.getElementById('include-uppercase').checked;
    const includeLower = document.getElementById('include-lowercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    let includedCharacters = [];
    if (includeUpper) {
        includedCharacters.push(...uppercase);
    }
    if (includeLower) {
        includedCharacters.push(...lowercase);
    }
    if (includeNumbers) {
        includedCharacters.push(...numbers);
    }
    if (includeSymbols) {
        includedCharacters.push(...symbols);
    }

    for (let i = 0; i < passwordLength; i++) {
        password += includedCharacters[Math.floor(Math.random() * (includedCharacters.length + 1))];
    }
    // console.log(generatedPassword)
    document.getElementById('password').placeholder = password;

    e.preventDefault();
}

document.querySelector('.copy-to-clipboard').addEventListener('click', function (e) {
    navigator.clipboard.writeText(password);

    e.preventDefault();
});