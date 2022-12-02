const firstname = document.querySelector('#first_name')
const email = document.querySelector('#email')
const pass = document.querySelector('#password')
const confirmpass = document.querySelector('#confirm_password')

const nameerror = document.querySelector('#name-error')
const emailerror = document.querySelector('#email-error')
const passerror = document.querySelector('#password-error')
const confirmerror = document.querySelector('#confirm-error')

function checkname() {
    if (firstname.value == '') {
        nameerror.textContent = 'Enter your first name'
    }
    else {
        nameerror.textContent = ''
    }
}

function checkemail() {
    if (email.validity.typeMismatch) {
        emailerror.textContent = 'Invald email'
    }
    if (email.value == '') {
        emailerror.textContent = 'Enter your email'
    }
    else {
        emailerror.textContent = ''
    }
}

function checkpass() {
    if (pass.value.length <= 4) {
        passerror.textContent = 'Must be at least 5 characters'
    }
    else {
        passerror.textContent = ''
    }
}

function checkconfirm() {
    if (pass.value != confirmpass.value) {
        confirmerror.textContent = 'Passwords do not match'
    }
    else {
        confirmerror.textContent = ''
    }
}

function check() {
    checkname()
    checkemail()
    checkpass()
    checkconfirm()
}