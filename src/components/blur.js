export default (function() {
    var blur = (function() {
        var wrapper = document.querySelector(".blur__form-wrapper");
        var form = document.querySelector(".blur__from");

        return {
            set: function() {
                var imgWidth = document.querySelector(".reviews").offsetWidth;
                var posLeft = -wrapper.offsetLeft;
                var posTop = -wrapper.offsetTop;
                var blurCss = form.style;

                blurCss.backgroundSize = imgWidth + "px" + " " + "auto";
                blurCss.backgroundPosition = posLeft + "px" + posTop + "px";
            }
        }
        
    }());

    blur.set();

    window.onresize = function() {
        blur.set();
    };
})();