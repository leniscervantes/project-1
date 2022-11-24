const form = document.querySelector('#form1')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const message = document.querySelector('#message')

const errName = document.querySelector('#err-name')
const errEmail = document.querySelector('#err-email')
const errPhone = document.querySelector('#err-phone')
const errMsg = document.querySelector('#err-message')

let isValid;
let inputMsg;
let inputName;
let inputEmail;
let inputPhone;

const txtAData = () => {
    inputMsg = message.value
}
const nameData = () => {
    inputName = name.value
}
const emailData = () => {
    inputEmail = email.value

}
const phoneData = () => {
    inputPhone = phone.value
}

const validateName = (name) => {
    if (name.toLowerCase() === 'ironhack') {
        errName.innerHTML = 'You can not be Ironhack, because I am Ironhack.'
        name.value = ''
        return false
    }
    else if (name.trim() === '') {
        errName.innerHTML = 'You need to write a valid name'
        name.value = 'Hola'
        return false
    }
    else {
        errName.innerHTML = ''
        return true
    }
}
const validateEmail = (mail) => {
    return true
}
const validatePhone = (phone) => {
    if (!(+phone > 10000000 && +phone < 1000000000)) {
        errPhone.innerHTML = 'Please enter a valid phone number'
        return false
    }
    else {
        errPhone.innerHTML = ''
        return true
    }
}
const validateMessage = (msg) => {
    if (msg.trim() === '') {
        errMsg.innerHTML = 'You didn´t write anything'
        return false
    }
    else {
        errName.innerHTML = ''
        return true
    }
}

const validateForm = (event) => {
    event.preventDefault()
    isValid = validateName(inputName) ?
        validateEmail(inputEmail) ?
            validatePhone(inputPhone) ?
                validateMessage(inputMsg) ?
                    true
                    : false
                : false
            : false
        : false
    if (isValid) location.href = "../HTML/HomePage.html"
}


window.onload = () => {
    form.addEventListener('submit', validateForm)
}

