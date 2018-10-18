import "normalize.css";
import "../../styles/main.scss";
import parallaxScroll from "../../components/parallaxScroll";
import link from "../../components/link";
import resize from "../../components/resize_header_bg";
import addLink from "../../components/addLink";
import animateScroll from "../../components/animateScroll";
import preloader from "../../components/preloader";
import humburger from "../../components/humburger";

addLink.arrowAddLink("down-arrow", ".blog");
animateScroll.arrowButton("down-arrow");
animateScroll.arrowButton("blog__left-link");

// Проставить якоря и id для ссылок и статей соотственно
var blogLeftLink = document.querySelectorAll(".blog__left-link");
var articleTitle = document.querySelectorAll(".article__title");

for (let i = 0; i < blogLeftLink.length; i++) {
    var href = `#id${i}`;
    var id = `id${i}`;
    blogLeftLink[i].setAttribute("href", href);
    articleTitle[i].id = id;
}

// Закрепление списка
let position = 1;
var blogLeftLink = document.querySelectorAll(".blog__left-link");
var articleTitle = document.querySelectorAll(".article__title");
blogLeftLink[0].classList.add("active-link");

var bottom = document.body.clientHeight - document.documentElement.clientHeight;

var windowInnerWidth = window.innerWidth;
$(window).on("resize", function() {
    windowInnerWidth = window.innerWidth;
})

$(window).on("scroll", function() {
    var top = $(".blog__right").offset().top;
    var w = $(window).scrollTop();
    position = top - w - 45;
    
    if (windowInnerWidth >= 770) {
        if (position <= 0) {
            $(".blog__left").css({position: "fixed", top: "45px"});
        } else {
            $(".blog__left").css({position: "static"});
        };
    } else {
        $(".blog__left").css({position: "fixed", top: 0});
    }
    
    for (let i = 0; i < articleTitle.length; i++) {
        var height = $(".article__title").eq(i).offset().top;
        var ww = $(window).scrollTop();
        var go = height - ww - 150;
        
        if (go <= 0) {
            $(".blog__left-link").removeClass("active-link");
            blogLeftLink[i].classList.add("active-link");
        }
        
        if (ww === bottom) {
            $(".blog__left-link").removeClass("active-link");
            blogLeftLink[articleTitle.length-1].classList.add("active-link");
        }
    }
});

// Скрываем/показываем список статей на моб. устройствах
$(".blog__left-btn").on("click", function() {
    $(".blog__left").toggleClass("blog__left-active");
});

$(".blog__left-link").on("click", function() {
    $(".blog__left").removeClass("blog__left-active");
})


















