webpackJsonp([2],{10:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}e(1),e(2);var a=e(3),o=(i(a),e(12)),r=(i(o),e(4));i(r)},12:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){function t(){a+=(e-a)*r,o+=(i-o)*r;var c="translate("+a+"px, "+o+"px) scale(1.1)";n(".bg").css({"-webit-transform":c,"-moz-transform":c,transform:c}),window.requestAnimationFrame(t)}var e=0,i=0,a=0,o=0,r=1/30;n(window).on("mousemove click",function(t){var a=Math.max(-100,Math.min(100,n(window).width()/2-t.clientX)),o=Math.max(-100,Math.min(100,n(window).height()/2-t.clientY));e=20*a/100,i=10*o/100}),t()}()}).call(t,e(0))}},[10]);