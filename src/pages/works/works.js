import "normalize.css";
import "../../styles/main.scss";
import parallaxScroll from "../../components/parallaxScroll";
import link from "../../components/link";
import blur from "../../components/blur";
import resize from "../../components/resize_header_bg";
import addLink from "../../components/addLink";
import animateScroll from "../../components/animateScroll";
import preloader from "../../components/preloader";
import humburger from "../../components/humburger";
import feedback from "../../components/feedback/feedback";
import "slick-carousel";
import "slick-carousel/slick/slick.css";

addLink.arrowAddLink("down-arrow", ".slider");
animateScroll.arrowButton("down-arrow");
animateScroll.arrowButton("reviews__button-up");

// закрыть всплывающее окно о состоянии оправления сообщения
let statusBtn = document.querySelector(".status__btn");
statusBtn.addEventListener("click", () => {
    document.querySelector(".status").style.display = "none";
});

// Карусель.
$(".scroll").slick({
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: false,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="carousel__button-left"></button>',
    nextArrow: '<button type="button" class="carousel__button-right"></button>',
    asNavFor: '.slider__desc-info'
});

$(".slider__desc-info").slick({
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: false,
    slidesToShow: 1,
    arrows : false,
    fade: true,
    easing: 'linear',
    asNavFor: '.scroll'
});













