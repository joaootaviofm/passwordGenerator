const passwordLength = document.getElementById('inputPasswordLength')
const symbolBox = document.getElementById('checkSymbol')
const numberBox = document.getElementById('checkNumber')
const upperBox = document.getElementById('checkUpper')
const lowerBox = document.getElementById('checkLower')
const generateButton = document.getElementById('generateButton')

const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "~!@#$%^&*()_+"


generateButton.addEventListener('click', () =>{
    let myChars = ''
    let password = ''
    
    if(symbolBox.checked){
        myChars = myChars + symbols;
    }
    else{
        myChars = myChars + ""
    }

    if(numberBox.checked){
        myChars = myChars + numbers;
    }
    else{
        myChars = myChars + ""
    }
    
    if(upperBox.checked){
        myChars = myChars + uppercase;
    }
    else{
        myChars = myChars + ""
    }

    if(lowerBox.checked){
        myChars = myChars + lowercase;
    }
})