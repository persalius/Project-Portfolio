export default (function(){
    let authorization = document.querySelector(".authorization"); //button
    let helper = document.querySelector(".helper"); //new block
    let rotate = document.querySelector(".rotate"); //block for rotate
    let authorizationBtn = document.querySelector(".authorization__btn"); //button back to home page
    
    let socials = document.querySelector(".socials"); //close socials buttons
    let authBtns = document.querySelector(".auth__btns"); //close buttons

    authorization.addEventListener("click", authBlock);
    helper.addEventListener("click", authBlockClose);
    authorizationBtn.addEventListener("click", authBlockClose);

    function authBlock() {
        rotate.classList.add("auth-block");
        socials.classList.add("auth-block");
        authBtns.classList.add("auth-block");
        authorization.style.display = "none";
        helper.style.display = "block";
    };

    function authBlockClose() {
        rotate.classList.remove("auth-block");
        socials.classList.remove("auth-block");
        authBtns.classList.remove("auth-block");
        authorization.style.display = "block";
        helper.style.display = "none";
    };
})();







