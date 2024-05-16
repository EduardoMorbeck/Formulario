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
});

function checkFirstName(){
    const firstnameValue = firstname.value
    if(firstnameValue === ""){
        errorInput(firstname, "Preencha o campo")
        return false
    }
}

function checkLastName(){
    const lastnameValue = lastname.value
    if(lastnameValue === ""){
        errorInput(lastname, "Preencha o campo")
        return false
    }
}

function checkEmail(){
    const emailValue = email.value
    if(emailValue === ""){
        errorInput(email, "Informe um e-mail")
        return false
    }
}

function checkNumber(){
    const numberValue = number.value
    if(numberValue === ""){
        errorInput(number, "Informe um contato")
        return false
    }
}

function checkPassword(){
    const passwordValue = password.value
    const confirmPasswordValue = confirmPassword.value
    if(passwordValue === ""){
        errorInput(password, "Digite uma senha")
        return false
    }

    if(confirmPasswordValue != passwordValue){
        errorInput(confirmPassword, "Digite a mesma senha")
        return false
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d.@$!%*?&]{8,}$/;
    if (!regex.test(passwordValue)) {
        errorInput(password, "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial");
        return false
    }
    return true
}

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message
    formItem.className = "input-box error"
}
