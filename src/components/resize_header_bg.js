export default (function() {
    var img = document.querySelector(".hero__bg img");
    
    function bg() {
        if(window.innerWidth <= 480) {
        img.setAttribute("src", require("../img/bg/auth.jpg"));
        } else if (window.innerWidth > 480) {
            img.setAttribute("src", require("../img/bg/portfolio.jpg"));
        }
    };
    
    bg();
    
    window.onresize = function() {
        bg();
    }    
})();