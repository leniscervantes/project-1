const form = document.querySelector('#form1')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const message = document.querySelector('#message')

let isValid;
let inputMsg;
let inputName;
let inputEmail;
let inputPhone;

const txtAData = () => {
    inputMsg = message.value
    console.log('This is message value', message.value)
}
const nameData = () => {
    inputName = name.value
    console.log('This is name value', name.value)
}
const emailData = () => {
    inputEmail = email.value
    console.log('This is mail value', email.value)
}
const phoneData = () => {
    console.log(typeof phone.value)
    inputPhone = phone.value
    console.log(typeof inputPhone)
    console.log('This is phone value', phone.value)
}

const validateName = (name) => {
    return name ? true : false
}
const validateEmail = (mail) => {
    return mail ? true : false
}
const validatePhone = (phone) => {
    return phone ? true : false
}
const validateMessage = (msg) => {
    return msg ? true : false
}

// Change falses for dom manipulation
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
    console.log('is valid?', isValid)
}


window.onload = () => {
    form.addEventListener('submit', validateForm)

}


//Check why this doesn´t work

// const validateForm = () => {
//     isValid = validateName(inputName) ?
//         validateEmail(inputEmail) ?
//             validatePhone(inputPhone) ?
//                 validateMessage(inputMsg) ?
//                     true
//                     : false
//                 : false
//             : false
//         : false
//     console.log('is valid?', isValid)
// }

// const valid = (event) => {
//     event.preventDefault()
//     validateForm()
//     if (isValid) console.log('do a redirect here')
// }

// window.onload = () => {
//     form.addEventListener('submit', valid)

// }