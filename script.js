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
        errorInput(firstname, "Preencha o campo!")
    }
}

function checkLastName(){
    const lastnameValue = lastname.value
    if(lastnameValue === ""){
        errorInput(lastname, "Preencha o campo!")
    }
}

function checkEmail(){
    const emailValue = email.value
    if(emailValue === ""){
        errorInput(email, "Informe um e-mail!")
    }
}

function checkNumber(){
    const emailValue = email.value
    if(emailValue === ""){
        errorInput(email, "Informe um e-mail!")
    }
}

function checkPassword(){
    const passwordValue = password.value
    const confirmPasswordValue = confirmPassword.value
    if(passwordValue === "" || confirmPasswordValue === ""){
        errorInput(password, "Crie uma senha")
        errorInput(confirmPassword, "Confirme sua senha")
    }
}

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message
    formItem.className = "input-box error"
}
