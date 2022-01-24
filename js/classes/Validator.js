var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ValidateForm_instances, _ValidateForm_form, _ValidateForm_name, _ValidateForm_lastname, _ValidateForm_email, _ValidateForm_pass1, _ValidateForm_pass2, _ValidateForm_checkBox, _ValidateForm_showError, _ValidateForm_noError, _ValidateForm_checkLength, _ValidateForm_checkEmail, _ValidateForm_checkPasswors, _ValidateForm_checkTerms;
export default class ValidateForm {
    constructor(form) {
        _ValidateForm_instances.add(this);
        _ValidateForm_form.set(this, void 0);
        _ValidateForm_name.set(this, void 0);
        _ValidateForm_lastname.set(this, void 0);
        _ValidateForm_email.set(this, void 0);
        _ValidateForm_pass1.set(this, void 0);
        _ValidateForm_pass2.set(this, void 0);
        _ValidateForm_checkBox.set(this, void 0);
        __classPrivateFieldSet(this, _ValidateForm_form, form, "f");
        __classPrivateFieldSet(this, _ValidateForm_name, form[`Name`], "f");
        __classPrivateFieldSet(this, _ValidateForm_lastname, form[`LastName`], "f");
        __classPrivateFieldSet(this, _ValidateForm_email, form[`Email`], "f");
        __classPrivateFieldSet(this, _ValidateForm_pass1, form[`pass1`], "f");
        __classPrivateFieldSet(this, _ValidateForm_pass2, form[`pass2`], "f");
        __classPrivateFieldSet(this, _ValidateForm_checkBox, form[`checkBox`], "f");
    }
    validateForm() {
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_checkLength).call(this, __classPrivateFieldGet(this, _ValidateForm_name, "f"));
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_checkLength).call(this, __classPrivateFieldGet(this, _ValidateForm_lastname, "f"));
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_checkEmail).call(this, __classPrivateFieldGet(this, _ValidateForm_email, "f"));
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_checkPasswors).call(this);
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_checkTerms).call(this);
    }
}
_ValidateForm_form = new WeakMap(), _ValidateForm_name = new WeakMap(), _ValidateForm_lastname = new WeakMap(), _ValidateForm_email = new WeakMap(), _ValidateForm_pass1 = new WeakMap(), _ValidateForm_pass2 = new WeakMap(), _ValidateForm_checkBox = new WeakMap(), _ValidateForm_instances = new WeakSet(), _ValidateForm_showError = function _ValidateForm_showError(id, message) {
    const small = document.querySelector(`#${id.name}`);
    small.classList.add(`error`);
    small.innerHTML = message;
}, _ValidateForm_noError = function _ValidateForm_noError(id) {
    const small = document.querySelector(`#${id.name}`);
    small.classList.remove(`error`);
    small.innerHTML = "";
}, _ValidateForm_checkLength = function _ValidateForm_checkLength(id, min = 3, max = 20) {
    if (id.value.length > max) {
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_showError).call(this, id, `Should be less than ${max} symbols`);
    }
    else if (id.value.length < min) {
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_showError).call(this, id, `Should be more than ${min} symbols`);
    }
    else {
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_noError).call(this, id);
    }
}, _ValidateForm_checkEmail = function _ValidateForm_checkEmail(id) {
    const regxEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regxEmail.test(id.value)) {
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_showError).call(this, id, `Please provide a valid e-mail adress`);
    }
    else {
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_noError).call(this, id);
    }
}, _ValidateForm_checkPasswors = function _ValidateForm_checkPasswors() {
    if (__classPrivateFieldGet(this, _ValidateForm_pass1, "f").value !== __classPrivateFieldGet(this, _ValidateForm_pass2, "f").value ||
        __classPrivateFieldGet(this, _ValidateForm_pass1, "f").value === "" ||
        __classPrivateFieldGet(this, _ValidateForm_pass2, "f").value === "") {
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_showError).call(this, __classPrivateFieldGet(this, _ValidateForm_pass1, "f"), `Password don't match..`);
    }
    else {
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_noError).call(this, __classPrivateFieldGet(this, _ValidateForm_pass1, "f"));
    }
}, _ValidateForm_checkTerms = function _ValidateForm_checkTerms() {
    if (__classPrivateFieldGet(this, _ValidateForm_checkBox, "f").checked) {
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_noError).call(this, __classPrivateFieldGet(this, _ValidateForm_checkBox, "f"));
    }
    else {
        __classPrivateFieldGet(this, _ValidateForm_instances, "m", _ValidateForm_showError).call(this, __classPrivateFieldGet(this, _ValidateForm_checkBox, "f"), `\n You must accept terms!`);
    }
};
//# sourceMappingURL=Validator.js.map