import "normalize.css";
import "../../styles/main.scss";
import link from "../../components/link";
import parallaxMouse from "../../components/parallaxMouse";
import preloader from "../../components/preloader";
import authorizationBlock from "../../components/authorization-block";
import inputChangeBg from "../../components/inputChangeBg";
import prepareSend from "../../components/feedback/prepareSend";


//Авторизация
const formLogin = document.querySelector("#login");

if (formLogin) {
    formLogin.addEventListener("submit", prepareSendLogin);
}

function prepareSendLogin(e) {
    e.preventDefault();
    
    //проверка стоит ли галочка на чекбоксе. Если да присваиваем value в переменную
    let checkBtn = "";
    if (check.checked) { 
        checkBtn = formLogin.check.value;
    }
    
    //данные для отправки на сервер
    let data = {
        login: formLogin.login.value,
        password: formLogin.password.value,
        check: checkBtn,
        robot: formLogin.sureNotRobot.value
    }
    
    prepareSend("/", formLogin, data, data => {
        if (data === "Авторизация успешна!") {
            location.href = "/admin";
        }
    })
}

// закрыть всплывающее окно о состоянии оправления сообщения
let statusBtn = document.querySelector(".status__btn");
statusBtn.addEventListener("click", () => {
    document.querySelector(".status").style.display = "none";
});