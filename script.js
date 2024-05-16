const form = document.querySelector('form')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const number = document.getElementById('number')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkFirstName()
    checkLastName()
    checkEmail()
    checkNumber()
    checkPassword()
    checkConfirmPassword()
});

function checkFirstName(){
    const firstnameValue = firstname.value
    if(firstnameValue === ""){
        errorInput(firstname, "Preencha o campo")
    }else{
        const formItem = firstname.parentElement
        formItem.className = "input-box"
    }
}

function checkLastName(){
    const lastnameValue = lastname.value
    if(lastnameValue === ""){
        errorInput(lastname, "Preencha o campo")
    }else{
        const formItem = lastname.parentElement
        formItem.className = "input-box"
    }
}

function checkEmail(){
    const emailValue = email.value
    if(emailValue === ""){
        errorInput(email, "Informe um e-mail")
    }else{
        const formItem = email.parentElement
        formItem.className = "input-box"
    }
}

function checkNumber(){
    const numberValue = number.value
    if(numberValue === ""){
        errorInput(number, "Informe um contato")
        return false
    }else{
        const formItem = number.parentElement
        formItem.className = "input-box"
    }
}

function checkPassword(){
    const passwordValue = password.value
    if(passwordValue === ""){
        errorInput(password, "Digite uma senha")
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres")
    }else{
        const formItem = password.parentElement
        formItem.className = "input-box"
    }
}

function checkConfirmPassword(){
    const passwordValue = password.value
    const confirmPasswordValue = confirmPassword.value
    if(confirmPasswordValue !== passwordValue){
        errorInput(confirmPassword, "Digite a mesma senha")
    }else{
        const formItem = confirmPassword.parentElement
        formItem.className = "input-box"
    }
}

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message
    formItem.className = "input-box error"
}
