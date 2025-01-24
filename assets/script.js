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
    const resultDiv = document.getElementById('resultDiv')
    resultDiv.innerHTML = ""

    let myChars = ''
    var password = ''
    let quantityCheck = 0;



    if(symbolBox.checked){
        myChars = myChars + symbols;
        quantityCheck++
    }
    else{
        myChars = myChars + ""
    }

    if(numberBox.checked){
        myChars = myChars + numbers;
        quantityCheck++
    }
    else{
        myChars = myChars + ""
    }
    
    if(upperBox.checked){
        myChars = myChars + uppercase;
        quantityCheck++
    }
    else{
        myChars = myChars + ""
    }

    if(lowerBox.checked){
        myChars = myChars + lowercase;
        quantityCheck++
    }
    else{
        myChars = myChars + "";
    }

    const length = passwordLength.value


    if(myChars.length === 0){
        alert("Você precisa selecionar pelo menos um caractere!")
        return
    }

    if(length <= 0){
        alert("Sua senha é menor que 1")
        return
    }


    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * myChars.length)
        password += myChars[randomIndex]
    }

    

    const newResult = document.createElement('p')
    const passwordStrength = document.createElement('p')
    const newButton = document.createElement('button')

    newResult.innerHTML = `Sua senha gerada é: ${password}`
    resultDiv.appendChild(newResult);

    if(quantityCheck < 2 && length < 5){
        passwordStrength.innerHTML = "Senha fraca!"
        passwordStrength.style.color = "Red"
        resultDiv.appendChild(passwordStrength)
    }
    else if(quantityCheck >= 3 && quantityCheck < 7 & length >= 5 && length < 9){
        passwordStrength.innerHTML = "Senha média!"
        passwordStrength.style.color = "Orange"
        resultDiv.appendChild(passwordStrength)
    }
    else{
        passwordStrength.innerHTML = "Senha forte!"
        passwordStrength.style.color = "Green"
        resultDiv.appendChild(passwordStrength)
    }

    newButton.innerHTML = 'Clique para copiar'
    resultDiv.appendChild(newButton);
    
    newButton.addEventListener('click', () => {
        navigator.clipboard.writeText(password)
        alert("Senha copiada para o clipboard!")
    })
    
})

