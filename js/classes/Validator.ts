export default class ValidateForm {
  #form: HTMLFormElement;
  #name: HTMLInputElement;
  #lastname: HTMLInputElement;
  #email: HTMLInputElement;
  #pass1: HTMLInputElement;
  #pass2: HTMLInputElement;
  #checkBox: HTMLInputElement;
  constructor(form: HTMLFormElement) {
    this.#form = form;
    this.#name = form[`Name`];
    this.#lastname = form[`LastName`];
    this.#email = form[`Email`];
    this.#pass1 = form[`pass1`];
    this.#pass2 = form[`pass2`];
    this.#checkBox = form[`checkBox`];
  }

  #showError(id: HTMLInputElement, message: string) {
    const small = document.querySelector(`#${id.name}`)! as HTMLElement;
    small.classList.add(`error`);
    small.innerHTML = message;
  }

  #noError(id: HTMLInputElement) {
    const small = document.querySelector(`#${id.name}`)! as HTMLElement;
    small.classList.remove(`error`);
    small.innerHTML = "";
  }

  #checkLength(id: HTMLInputElement, min = 3, max = 20) {
    if (id.value.length > max) {
      this.#showError(id, `Should be less than ${max} symbols`);
    } else if (id.value.length < min) {
      this.#showError(id, `Should be more than ${min} symbols`);
    } else {
      this.#noError(id);
    }
  }

  #checkEmail(id: HTMLInputElement) {
    const regxEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regxEmail.test(id.value)) {
      this.#showError(id, `Please provide a valid e-mail adress`);
    } else {
      this.#noError(id);
    }
  }

  #checkPasswors() {
    if (
      this.#pass1.value !== this.#pass2.value ||
      this.#pass1.value === "" ||
      this.#pass2.value === ""
    ) {
      this.#showError(this.#pass1, `Password don't match..`);
    } else {
      this.#noError(this.#pass1);
    }
  }
  #checkTerms() {
    if (this.#checkBox.checked) {
      this.#noError(this.#checkBox);
    } else {
      this.#showError(this.#checkBox, `\n You must accept terms!`);
    }
  }
  validateForm() {
    this.#checkLength(this.#name);
    this.#checkLength(this.#lastname);
    this.#checkEmail(this.#email);
    this.#checkPasswors();
    this.#checkTerms();
  }
}
