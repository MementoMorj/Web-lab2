
import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';


let model = new Model();
let view = new View();

let controller = new Controller(model, view);


if (document.getElementById("reg_b")) {
    document.getElementById("reg_b").onclick = function () {
        if (controller.onsubmitReg()) {

        }
        else {
            return false
        }
    }
}



if (document.getElementById("sing_b")) {
    document.getElementById("sing_b").onclick = function () {
        if (controller.onsubmitSing()) {

        }
        else {
            return false
        }
    }

}



if (document.getElementById("profile_b")) {
    document.getElementById("profile_b").onclick = function () {
        if (controller.profEdit) {
            if (controller.onsubmitProfile()) {

            }
            else {
                return false;
            }
        }
        else {
            controller.setEdit();
            return false;
        }
        
    }
}

if (document.getElementById("question")) {
    controller.setTimer()
}


