export default class Model {
    constructor() {

    }
    NNElement(element) {
        if (document.getElementById(element).value) {
            return true;
        }
        else {
            return false;
        }
    }
    startReg() {
        document.getElementById('st_form_er_name').innerText = document.getElementById('st_form_er_pass').innerText = document.getElementById('st_form_er_mail').innerText = document.getElementById('st_form_er_rpass').innerText = document.getElementById('st_form_er_BD').innerText = document.getElementById('st_form_er_sex').innerText = " "
    }

    getValue(element) {
        return document.getElementById(element).value
    }

    getLen(element) {
        return document.getElementById(element).value.length
    }

    innerText(element, text) {
        document.getElementById(element).innerText = text
    }
    setActive() {
        document.getElementById('floatingName').removeAttribute('disabled');
        document.getElementById('floatingEmail').removeAttribute('disabled');
        document.getElementById('sex').removeAttribute('disabled');
        document.getElementById('floatingDate').removeAttribute('disabled');
    }
    setDisable() {
        document.getElementById('floatingName').setAttribute('disabled', '');
        document.getElementById('floatingEmail').setAttribute('disabled', '');
        document.getElementById('sex').setAttribute('disabled', '');removeAttribute('disabled');
        document.getElementById('floatingDate').setAttribute('disabled', '');
    }

}

