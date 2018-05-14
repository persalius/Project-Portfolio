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

addLink.arrowAddLink("down-arrow", "#works");
animateScroll.arrowButton("down-arrow");
animateScroll.arrowButton("reviews__button-up");