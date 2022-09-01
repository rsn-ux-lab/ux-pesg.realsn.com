/**
 *
 * 더블탭(확대기능) 방지
 *
 */
import $ from "jquery";

$.disabledDoubleTab = function () {
  document.documentElement.addEventListener(
    "touchstart",
    function (e) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    },
    false
  );

  var lastTouchEnd = 0;

  document.documentElement.addEventListener(
    "touchend",
    function (e) {
      var now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    },
    false
  );
};
