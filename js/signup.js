import Validator from "./classes/Validator.js";
const form = document.querySelector(`#form`);
const Validate = new Validator(form);
const signUpBtn = document.querySelector(`#submit`);
signUpBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    Validate.validateForm();
});
//# sourceMappingURL=signup.js.map