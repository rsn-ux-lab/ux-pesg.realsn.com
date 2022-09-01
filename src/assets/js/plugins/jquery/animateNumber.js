/**
 *
 * 숫자 0 -> ??,???
 *    $(선택자).animateNumber({
 *         addComma : true,
 *         numberSize : 애니메이션 숫자 자리수, // 숫자 : 변환자리수, true : endValue자릿수, false : 자리수변환 없음 (구현중)
 *         interval : 올라가는 속도,
 *         totalPlayTime : 애니메이션시간,
 *         startNumber : 시작 숫자,
 *         endNumber : 끝나는 숫자,
 *         startValue : 시작전 값,
 *         endValue : 끝나고 바뀔 값, // 없을경우 endNumber로 대체
 *         callback : function(){}
 *         increase : 증가수, // 증가수이 있을경우 totalPlayTime는 무시됨
 *     });
 *    $(선택자) 에 .end를 주는 즉시 애니메이션이 끝난다.
 *
 */

import $ from "jquery";
import "./addZero";

$.fn.animateNumber = function () {
  var $el = $(this);

  var default_option = {
    addComma: true,
    numberSize: false,
    interval: 10,
    totalPlayTime: 1800,
    startNumber: 0,
    endNumber: 99999,
    callback: function () {},
  };
  var options = $.extend(default_option, arguments[0]);
  var endNumber = options.endNumber;
  var numbers = [options.startNumber];
  var pushNumber = options.startNumber;
  var numberSize = options.numberSize;

  if (numberSize) {
    if (numberSize === true) numberSize = endNumber.toString().length;
  } else {
    numberSize = 1;
  }

  var isUp = true;
  if (options.hasOwnProperty("increase")) {
    isUp = options.increase > 0;
  } else {
    isUp = true;
  }

  var init = function () {
    if (isUp ? pushNumber < endNumber : pushNumber > endNumber) {
      var increase = options.increase ? options.increase : ((options.endNumber - options.startNumber) / options.totalPlayTime) * options.interval;
      pushNumber += increase;
      numbers.push(
        (function () {
          var result = pushNumber;
          result = $.addZero(Math.floor(result), numberSize);
          result = options.addComma ? result.toNumber() : result;
          return result;
        })()
      );
      init();
    }
  };
  init();

  if ($el.hasClass("animating")) {
    $el.addClass("pause");
    return false;
  }

  $el.addClass("animating");
  var action = function (index) {
    var i = index || 0;
    if (numbers[i]) $el.text(numbers[i]);
    setTimeout(function () {
      i++;
      if (numbers[i + 1]) {
        if ($el.hasClass("pause")) {
          action(0);
          $el.removeClass("pause");
        } else if ($el.hasClass("end")) {
          // .end瑜� 二쇰뒗 利됱떆 �좊땲硫붿씠�섏씠 �앸궃��.
          action(numbers.length);
          $el.removeClass("end");
        } else {
          action(i);
        }
      } else {
        var endValue = options.endValue || options.endNumber;

        if (default_option.addComma) {
          $el.text(endValue.toNumber());
        } else {
          $el.text(endValue);
        }
        $el.removeClass("animating");
        if (options.callback) options.callback();
      }
    }, options.interval);
  };
  action();
};
