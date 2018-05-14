export default (function(){
    
let authInputLogin = document.querySelector(".auth__input-login"); //input
let authInputPassword = document.querySelector(".auth__input-password"); //input

let authImgLogin = document.querySelector(".auth__img-login"); //block with bg
let authImgPassword = document.querySelector(".auth__img-password"); //block with bg

//===== ivents =====
authInputLogin.addEventListener("focus", inputBgLoginFocus);
authInputLogin.addEventListener("blur", inputBgLoginBlur);

authInputPassword.addEventListener("focus", inputBgPassFocus);
authInputPassword.addEventListener("blur", inputBgPassBlur);

//===== functions =====
function inputBgLoginFocus() {
    authImgLogin.classList.add("active");
}

function inputBgLoginBlur() {
    authImgLogin.classList.remove("active");
}

function inputBgPassFocus() {
    authImgPassword.classList.add("active");
}

function inputBgPassBlur() {
    authImgPassword.classList.remove("active");
}
})();