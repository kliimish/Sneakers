const form = document.querySelector(`#form`)! as HTMLFormElement;
const userName = document.querySelector(`#name`)! as HTMLInputElement;
const userLastName = document.querySelector(`#lastname`)! as HTMLInputElement;
const userEmail = document.querySelector(`#email`)! as HTMLInputElement;
const pass1 = document.querySelector(`#pass1`)! as HTMLInputElement;
const pass2 = document.querySelector(`#pass2`)! as HTMLInputElement;
const checkbox = document.querySelector(`#checkbox`)! as HTMLInputElement;
const userSubmit = document.querySelector(`#submit`)! as HTMLInputElement;
const regxEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const showError = function (message: string, field: HTMLInputElement) {
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

const checkLenght = function (
  field: HTMLInputElement,
  min: number,
  max: number
) {
  if (field.value.length > max) {
    showError(`Should be less than ${max} symbols`, field);
  } else if (field.value.length < min) {
    showError(`Should be more than ${min} symbols`, field);
  } else {
    allOk();
  }
};

const checkEmail = function (field: HTMLInputElement) {
  if (!regxEmail.test(field.value)) {
    showError(`Please provide a valid e-mail adress`, field);
  } else {
    allOk();
  }
};

const checkPassword = function (
  field1: HTMLInputElement,
  field2: HTMLInputElement
) {
  if (field1.value != field2.value) {
    const small = document.createElement(`small`);
    field2.insertAdjacentElement(`beforebegin`, small);
    showError(`Password's don't match!`, field2);
  }
};
const requireField = function (arr: Array<HTMLInputElement>) {
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
  } else if (!checkbox.checked) {
    showError(`You must accept terms and conditions`, checkbox);
  } else {
    form.submit();
  }
};

userSubmit.addEventListener(`click`, (e) => {
  e.preventDefault();
  checkForm();
});
