const form = document.querySelector(`#form`);
const userName = document.querySelector(`#name`);
const userLastName = document.querySelector(`#lastname`);
const userEmail = document.querySelector(`#email`);
const pass1 = document.querySelector(`#pass1`);
const pass2 = document.querySelector(`#pass2`);
const checkbox = document.querySelector(`#checkbox`);
const userSubmit = document.querySelector(`#submit`);
const regxEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const showError = function (message, field) {
    const smallEl = document.createElement(`small`);
    field.insertAdjacentElement(`beforebegin`, smallEl);
    const small = document.querySelector(`small`);
    small.classList.add(`error`);
    small.innerHTML = message;
};
const allOk = function () {
    const small = document.querySelector(`small`);
    small.classList.remove(`error`);
    small.innerHTML = "";
};
const checkLenght = function (field, min, max) {
    if (field.value.length > max) {
        showError(`Should be less than ${max} symbols`, field);
    }
    else if (field.value.length < min) {
        showError(`Should be more than ${min} symbols`, field);
    }
    else {
        allOk();
    }
};
const checkEmail = function (field) {
    if (!regxEmail.test(field.value)) {
        showError(`Please provide a valid e-mail adress`, field);
    }
    else {
        allOk();
    }
};
const checkPassword = function (field1, field2) {
    if (field1.value != field2.value) {
        const small = document.createElement(`small`);
        field2.insertAdjacentElement(`beforebegin`, small);
        showError(`Password's don't match!`, field2);
    }
};
const requireField = function (arr) {
    arr.forEach((curr) => {
        curr.placeholder = "* Required";
        showError(``, curr);
    });
};
const checkForm = function () {
    if (checkbox.checked) {
        showError(``, checkbox);
        checkLenght(userLastName, 2, 18);
        requireField([userName, userEmail, userLastName, pass1, pass2]);
        checkPassword(pass1, pass2);
        checkEmail(userEmail);
        checkLenght(userName, 2, 12);
    }
    else if (!checkbox.checked) {
        showError(`You must accept terms and conditions`, checkbox);
    }
    else {
        form.submit();
    }
};
userSubmit.addEventListener(`click`, (e) => {
    e.preventDefault();
    checkForm();
});
//# sourceMappingURL=signup.js.map