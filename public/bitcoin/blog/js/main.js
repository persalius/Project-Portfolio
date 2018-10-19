//Открытие / закрытие pop-up окон
var call = document.querySelector(".call");
var callback = document.querySelector(".callback");
var hiddenBlock = document.querySelector(".hidden-block");

call.addEventListener("click", function(e) {
    e.preventDefault();
    callback.style.display = "block";
    hiddenBlock.style.display = "block";
});

hiddenBlock.addEventListener("click", function() {
    callback.style.display = "none";
    hiddenBlock.style.display = "none";
    login.style.display = "none";
});

var profile = document.querySelector(".profile");
var login = document.querySelector(".login");

profile.addEventListener("click", function() {
    login.style.display = "block";
    hiddenBlock.style.display = "block";
});


//Гамбургер меню
var state = true;
$(".bmenu").click(function() {
    $(this).toggleClass("active");
    
    if (state) {
        $(".hidden-menu").animate({left: 0}, 500);
    } else {
        $(".hidden-menu").animate({left: "-100%"}, 500);
    };
    
    state = !state;
});


//Плавный скрол
$(".main__arrow").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

//появление / исщезновение меню
$(".page-info__block-title").bind('click', toggle);

$(".page-info__block-4 .page-info__block-title").unbind('click', toggle);

function toggle() {
    $(this).toggleClass("activeArrow");
    $(this).next().slideToggle(800);
};














