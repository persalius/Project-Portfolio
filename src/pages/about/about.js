import "normalize.css";
import "../../styles/main.scss";
import parallaxScroll from "../../components/parallaxScroll";
import link from "../../components/link";
import resize from "../../components/resize_header_bg";
import addLink from "../../components/addLink";
import animateScroll from "../../components/animateScroll";
import preloader from "../../components/preloader";
import humburger from "../../components/humburger";
import 'easy-pie-chart/dist/jquery.easypiechart';

addLink.arrowAddLink("down-arrow", "#about__col-content");
animateScroll.arrowButton("down-arrow");

// Уровень скила (chart)
var options = {
  scaleColor: false,
  trackColor: '#dfdcd5',
  barColor: '#16c2aa',
  lineWidth: 10,
  lineCap: 'butt',
  size: 80,
  animate: 1500,
  onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
  }
};

//$('.chart').easyPieChart(options);

// Запуск анимации chart при scrool
var top = $(".skills").offset().top;
var w = $(window).scrollTop() + 300;

function runChart() {
    if (top <= w) {
        $('.chart').easyPieChart(options);
    }
}

runChart();

$(window).on("scroll", function() {
    top = $(".skills").offset().top;
    w = $(window).scrollTop() + 300;
    
    runChart();
});
             












