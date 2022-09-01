/**
 *
 *    window resize event ▼
 *    [script 작성 예]
 *        $.loadResize(function () {
 *           console.log("callback");
 *        });
 *
 *    [console 출력결과]
 *        callback
 *
 */
import $ from "jquery";

$.onloadResize = function () {
  let args = arguments[0];
  let delay = 300;
  let timer = null;

  $(window).on("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      // callback
      if (args) args();
    }, delay);
  });

  if (args) args();
};
