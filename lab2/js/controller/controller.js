
export default class Controler {
    constructor(Model, View) {
        this.model = Model;
        this.view = View;
        this.profEdit = false;
    }
    onsubmitReg() {
        this.model.startReg()
        var valid = true;
        if (this.model.NNElement("floatingName")) {
            if (this.model.getLen("floatingName") < 3) { valid = false; this.model.innerText('st_form_er_name', 'Ім\'я має менше 3 символів') }
            if (this.model.getLen("floatingName") > 12) { valid = false; this.model.innerText('st_form_er_name', 'Ім\'я має більше 12 символів') }
        }
        else {
            valid = false; this.model.innerText('st_form_er_name', 'І\'мя не введено')
        }

        if (this.model.NNElement("floatingEmail")) { }
        else {
            valid = false; this.model.innerText('st_form_er_mail', 'Введіть електронну адресу')
        }


        if (this.model.NNElement("floatingPassword")) {
            if (this.model.getLen("floatingPassword") < 8) { valid = false; this.model.innerText('st_form_er_pass', 'Пароль має менше 8 символів.') }
            if (this.model.getLen("floatingPassword") > 32) { valid = false; this.model.innerText('st_form_er_pass', 'Ім\'я має більше 32 символів') }
        }
        else {
            valid = false; this.model.innerText('st_form_er_pass', 'Пароль не введено')
        }
        if (this.model.NNElement("floatingRePassword")) {
            if (this.model.getValue("floatingPassword") === this.model.getValue("floatingRePassword")) { } else { valid = false; this.model.innerText('st_form_er_rpass', 'Паролі не збігаються') }
        }
        if (this.model.getValue("floatingDate") === "") { valid = false; this.model.innerText('st_form_er_BD', 'Введіть день народження') }


        if (this.model.getValue("sex") === 'Стать') { valid = false; this.model.innerText('st_form_er_sex', 'Стать не введено') }
        return valid;
    }

    onsubmitSing() {
        var valid = true;
        if (this.model.NNElement("floatingEmail")) { }
        else {
            valid = false; this.model.innerText('st_form_er_mail', 'Введіть електронну адресу')
        }


        if (this.model.NNElement("floatingPassword")) {
            if (this.model.getLen("floatingPassword") < 8) { valid = false; this.model.innerText('st_form_er_pass', 'Пароль має менше 8 символів.') }
            if (this.model.getLen("floatingPassword") > 32) { valid = false; this.model.innerText('st_form_er_pass', 'Ім\'я має більше 32 символів') }
        }
        else {
            valid = false; this.model.innerText('st_form_er_pass', 'Пароль не введено')
        }
        return valid;
    }

    onsubmitProfile() {
        var valid = true;
        if (this.model.NNElement("floatingName")) {
            if (this.model.getLen("floatingName") < 3) { valid = false; this.model.innerText('st_form_er_name', 'Ім\'я має менше 3 символів') }
            if (this.model.getLen("floatingName") > 12) { valid = false; this.model.innerText('st_form_er_name', 'Ім\'я має більше 12 символів') }
        }
        else {
            valid = false; this.model.innerText('st_form_er_name', 'І\'мя не введено')
        }

        if (this.model.NNElement("floatingEmail")) { }
        else {
            valid = false; this.model.innerText('st_form_er_mail', 'Введіть електронну адресу')
        }
        if (this.model.getValue("floatingDate") === "") { valid = false; this.model.innerText('st_form_er_BD', 'Введіть день народження') }


        if (this.model.getValue("sex") === 'Стать') { valid = false; this.model.innerText('st_form_er_sex', 'Стать не введено') }
        return valid;
    }
    onsubmitProfile() {
        var valid = true;
        if (this.model.NNElement("floatingName")) {
            if (this.model.getLen("floatingName") < 3) { valid = false; this.model.innerText('st_form_er_name', 'Ім\'я має менше 3 символів') }
            if (this.model.getLen("floatingName") > 12) { valid = false; this.model.innerText('st_form_er_name', 'Ім\'я має більше 12 символів') }
        }
        else {
            valid = false; this.model.innerText('st_form_er_name', 'І\'мя не введено')
        }

        if (this.model.NNElement("floatingEmail")) { }
        else {
            valid = false; this.model.innerText('st_form_er_mail', 'Введіть електронну адресу')
        }
        if (this.model.getValue("floatingDate") === "") { valid = false; this.model.innerText('st_form_er_BD', 'Введіть день народження') }


        if (this.model.getValue("sex") === 'Стать') { valid = false; this.model.innerText('st_form_er_sex', 'Стать не введено') }
        return valid;
    }

    setEdit() {
        this.model.setActive();
        this.model.innerText('profile_b', 'Зберегти');
        this.profEdit = true
        return
    }
    saveEdit() {
        this.model.setDisable();
        this.profEdit = false;
        return
    }

    setTimer() {
        document.addEventListener('DOMContentLoaded', function () {
            const time = 45;
            let deadline = new Date();
            const hoursd = time > 0 ? Math.floor(time / 60 / 60) % 24 : 0;
            const minutesd = time > 0 ? Math.floor(time) % 60 : 0;
            const secondsd = time > 0 ? Math.floor(time * 60) % 60 : 0;
            deadline.setHours(deadline.getHours() + hoursd);
            deadline.setMinutes(deadline.getMinutes() + minutesd);
            deadline.setSeconds(deadline.getSeconds() + secondsd);

            let timerId = null;
            function countdownTimer() {
                const diff = deadline - new Date();
                if (diff <= 0) {
                    clearInterval(timerId);
                }
                const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
                const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
                const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
                const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

                $hours.textContent = hours < 10 ? '0' + hours : hours;
                $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
                $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
            }
         

            const $hours = document.querySelector('.timer__hours');
            const $minutes = document.querySelector('.timer__minutes');
            const $seconds = document.querySelector('.timer__seconds');
            countdownTimer();
            timerId = setInterval(countdownTimer, 1000);
        });
    }
}
