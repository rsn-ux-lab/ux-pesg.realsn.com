/**
 *
 *   $.scrollAction({
 *       $target: '#cont1',
 *       top: 0, // 0~100
 *       scrollDownAction : function(){
 *           // 스크롤 DOWN 액션
 *       },
 *       scrollUpAction : function(){
 *           // 스크롤 UP 액션
 *       }
 *   });
 *
 */
import $ from "jquery";

$.scrollAction = function () {
  // 기준요소, 화면기준0~100, 스크롤 내릴때 콜백, 스크롤 올릴때 콜백
  var arg = arguments[0];
  var el = arg.$target ? $(arg.$target) : arguments[0];
  var actionPosition = arg.top ? arg.top / 100 : arguments[1] || 0;
  var callback1 = arg.scrollDownAction || arguments[2];
  var callback2 = arg.scrollUpAction || arguments[3];
  var status = false;

  $(window)
    .on("scroll", function () {
      if (!el.length) return false;

      var windowT = $(this).scrollTop();
      var winH = innerHeight;

      var actionLine = windowT + winH * actionPosition;

      if (actionLine > el.offset().top) {
        if (callback1 && !status) {
          callback1();
        }
        status = true;
      } else {
        if (callback2 && status) {
          callback2();
        }
        status = false;
      }
    })
    .trigger("scroll");

  // if (callback2) callback2();
};
