export default (function() {
    var lFollowX = 0;
    var lFollowY = 0;
    var x = 0;
    var y = 0;
    var friction = 1 / 8; // скорость параллакса (изначально 1/30)

    function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

        $('.bg').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
        });

        window.requestAnimationFrame(moveBackground);
    };

    $(window).on('mousemove click', function(e) {
        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (20 * lMouseX) / 100;
        lFollowY = (10 * lMouseY) / 100;
    });

    moveBackground();
})();
    