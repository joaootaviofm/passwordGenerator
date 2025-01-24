const passwordLength = document.getElementById('inputPasswordLength')
const symbolBox = document.getElementById('checkSymbol')
const numberBox = document.getElementById('checkNumber')
const upperBox = document.getElementById('checkUpper')
const lowerBox = document.getElementById('checkLower')
const generateButton = document.getElementById('generateButton')
const outputPassword = document.getElementById('outputPassword')

const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "~!@#$%^&*()_+"



generateButton.addEventListener('click', () =>{
    
    let myChars = ''
    var password = ''
    
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
    else{
        myChars = myChars + "";
    }

    const length = passwordLength.value

    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * myChars.length)
        password += myChars[randomIndex]
    }

    const resultDiv = document.getElementById('resultDiv')
    const newResult = document.createElement('p')
    const newButton = document.createElement('button')

    newResult.innerHTML = `Sua senha gerada é: ${password}`
    resultDiv.appendChild(newResult);

    newButton.innerHTML = 'Clique para copiar'
    resultDiv.appendChild(newButton);
    
    
})