const userName = document.querySelector(`#name`)! as HTMLInputElement;
const userLastName = document.querySelector(`#lastname`)! as HTMLInputElement;
const userEmail = document.querySelector(`#email`)! as HTMLInputElement;
const pass1 = document.querySelector(`#pass1`)! as HTMLInputElement;
const pass2 = document.querySelector(`#pass2`)! as HTMLInputElement;
const checkbox = document.querySelector(`#checkbox`)! as HTMLInputElement;
const userSubmit = document.querySelector(`#submit`)! as HTMLInputElement;
const regxEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const showError = function (message: string) {
  const small = document.querySelector(`small`);
  small.classList.add(`error`);
  small.innerHTML = message;
};
const allOk = function () {
  const small = document.querySelector(`small`);
  small.classList.remove(`error`);
  small.innerHTML = "";
};

const checkLenght = function (
  field: HTMLInputElement,
  min: number,
  max: number
) {
  if (field.value.length > max) {
    showError(`${field} should be less than ${max} symbols`);
  } else if (field.value.length < min) {
    showError(`${field} should be more than ${min} symbols`);
  } else {
    allOk();
  }
};

const checkEmail = function (field: HTMLInputElement) {
  if (field.value === "") {
    return showError(`Email adress is required`);
  } else if (!regxEmail.test(field.value.trim())) {
    return showError(`Please provide a valid e-mail adress`);
  }
};

const loopElements = function (arr: Array<HTMLInputElement>) {
  arr.forEach((curr) => checkLenght(curr, 3, 12));
};

const checkPassword = function (
  field1: HTMLInputElement,
  field2: HTMLInputElement
) {
  if (field1.value != field2.value) {
    field2.insertAdjacentHTML(
      `afterend`,
      `<small>${showError(`Password don't match!`)} </small>`
    );
  }
};

userSubmit.addEventListener(`click`, (e) => {
  e.preventDefault();
  checkPassword(pass1, pass2);
});
