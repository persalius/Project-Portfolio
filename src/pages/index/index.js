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
    let data = {
        login: formLogin.login.value,
        password: formLogin.password.value
    }
    
    prepareSend("/login", formLogin, data, data => {
        if (data === "Авторизация успешна!") {
            location.href = "/admin";
        }
    })
}