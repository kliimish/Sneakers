import Validator from "./classes/Validator.js";
const form = document.querySelector(`#form`)! as HTMLFormElement;
const Validate = new Validator(form);
const signUpBtn = document.querySelector(`#submit`)! as HTMLInputElement;

signUpBtn.addEventListener(`click`, (e) => {
  e.preventDefault();
  Validate.validateForm();
});
