//Гамбургер меню
var state = true;
$(".events .bmenu").click(function() {
    $(this).toggleClass("active");
    
    if (state) {
        $(".events .tabs").slideDown();
    } else {
        $(".events .tabs").slideUp();
    };
    
    state = !state;
});

var stateSchool = true;
$(".school .bmenu").click(function() {
    $(this).toggleClass("active");
    
    if (stateSchool) {
        $(".school .tabs").slideDown();
    } else {
        $(".school .tabs").slideUp();
    };
    
    stateSchool = !stateSchool;
});

//Scrooll
$(".header__scrool-btn").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$(".entry").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

//Убрать стрелку
var schoolPos = $("#video").offset().top;

if ($(window).scrollTop() + 600 >= schoolPos) {
    $(".header__scrool-btn").css({display: "none"});
} else {
    $(".header__scrool-btn").css({display: "block"});
}

window.onscroll = function() {
    if ($(window).scrollTop() + 600 >= schoolPos) {
        $(".header__scrool-btn").fadeOut();
    } else {
        $(".header__scrool-btn").fadeIn();
    }
}

//Таб
$(".containerTabs-1 .tab").click(function() {
	$(".containerTabs-1 .tab").siblings().removeClass("activeTab");
    $(this).addClass("activeTab");
	$(".containerTabs-1 .tab_item").hide().eq($(this).index()).fadeIn()})
    .eq(0).addClass("activeTab");

$(".containerTabs-1 .tab_item").not(":first").hide();

$(".containerTabs-2 .tab").click(function() {
	$(".containerTabs-2 .tab").siblings().removeClass("activeTab");
    $(this).addClass("activeTab");
	$(".containerTabs-2 .tab_item").hide().eq($(this).index()).fadeIn()})
    .eq(0).addClass("activeTab");

$(".containerTabs-2 .tab_item").not(":first").hide();

//Карусель
$('.carousel').slick({
    autoplay: false,
    autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '<button type="button" class="carousel__button-left"></button>',
    nextArrow: '<button type="button" class="carousel__button-right"></button>',
    responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            dots: true             
          }
        }
    ]
});

$('.carousel2').slick({
    autoplay: false,
    autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '<button type="button" class="carousel__button-left2"></button>',
    nextArrow: '<button type="button" class="carousel__button-right2"></button>',
    responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            dots: true             
          }
        }
    ]
});

$('.carousel3').slick({
    autoplay: false,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '<button type="button" class="carousel__button-left2"></button>',
    nextArrow: '<button type="button" class="carousel__button-right2"></button>',
    responsive: [
        {
          breakpoint: 500,
          settings: {
            dots: true             
          }
        }
    ]
});

//Убрать текст в slick-dots
$(".slick-dots button").text("");

//Клик по кнопке отзыв
$(".user__review").on("click", function() {
    $(this).parent().parent().find(".user__img .block-review").toggleClass("block-review-open");
});

//Изменение текста в кнопках entry
var entryBtn = document.querySelectorAll(".entry p");

entryBtn.forEach(function(elem) {
    if (window.innerWidth <= 500) {
        elem.textContent = "записаться на пробный урок";
    }
});

window.onresize = function() {
    if (window.innerWidth <= 500) {
        entryBtn.forEach(function(elem) {
            elem.textContent = "записаться на пробный урок";
        });
    } else {
        entryBtn.forEach(function(elem) {
            elem.textContent = "записаться на пробное занятие";
        });
    }
}










































