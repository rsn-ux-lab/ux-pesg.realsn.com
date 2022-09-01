/**
 *
 *   클릭시 해당 위치로 스크롤 이동
 *   $.moveTo({
 *       wrap : 스크롤 개체, (기본 : window)
 *       speed : 속도,
 *       top : 탑기준 0 (단위 : px),
 *       target : 이동할 타겟,
 *       focus : 포커스 타겟,
 *       afterAction : 콜백
 *   })
 *
 */
import $ from "jquery";

$.moveTo = function () {
  var arg = arguments[0];
  var speed = arg.speed || 400;
  var $wrap = $(arg.wrap || "html, body");
  var $target = $(arg.target);
  var $focus = $(arg.focus);
  var afterAction = arg.afterAction;
  var top = arg.top;

  if (!top) top = 0;
  var headerH = 0;
  if ($("header").css("position") == "fixed") {
    headerH = $("header").height();
  } else if ($("header").css("position") == "absolute") {
    headerH = 0;
  }

  var T = $target.offset().top - headerH - top;

  $wrap.stop().animate(
    {
      scrollTop: T,
    },
    speed,
    function () {
      if ($focus.length) $focus.focus().select();
      if (afterAction) afterAction();
    }
  );
  $wrap.scroll();
};
