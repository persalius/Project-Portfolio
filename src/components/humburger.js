export default (function() {
    let state = true;
    
    $('.humburger__button').on('click', function() {
        $(this).closest('.humburger').toggleClass('menu_state_open');
        $(".humburger__menu").toggleClass('menu_state_open');
        
        if (state) {
            $(".humburger__block").animate({width: "50%"}, 1000, function() {
                $(".humburger__link").each(function(i, elem) {
                    setTimeout(function() {
                        $(elem).animate({opacity: 1, fontSize: "2em"});
                    }, i*200); // скорость появления списка
                });
            });
        } else {
            $(".humburger__block").animate({width: 0});
            $(".humburger__link").css({opacity: 0, fontSize: "1em"});
        }
        
        state = !state;
    });
    
})();