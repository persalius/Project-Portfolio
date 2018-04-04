export default (function() {
    var parallax = (function () {
        var bg = document.querySelector('.hero__bg-img');
        var user = document.querySelector('.user');
        var sectionText = document.querySelector('.hero-title-pic');

        return {
            move: function (block, windowScroll, strafeAmount) {
                var strafe = windowScroll / -strafeAmount + '%';
                var transformString = 'translate3d(0,' + strafe + ', 0)';

                var style = block.style;

                style.transform = transformString;
                style.webkitTransform = transformString;
            },

            init: function (wScroll) {
                this.move(bg, wScroll, 45);
    //			this.move(sectionText, wScroll, 20);
    //			this.move(user, wScroll, 3);
            }
        }

    }());

    window.onscroll = function() {
        var wScroll = window.pageYOffset;
        parallax.init(wScroll);
    }
})();