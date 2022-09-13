/**
 *
 *  클릭시 해당 위치로 스크롤 이동
 *
 *  [html 작성 예]
 *  <button class="js-anchor" data-anchor="선택자", data-anchor-except="제외할 높이(숫자 또는 선택자)"></button>
 *
 */

import $ from "jquery";

$.fn.anchor = function () {
  $(this).each(function () {
    $(this).on("click", function () {
      let target = $(this).attr("data-target") || $(this).attr("data-anchor");
      let focus = $(this).attr("data-focus");
      let except = $(this).attr("data-anchor-except");

      // 제외 높이 또는 제외 대상 높이
      if (except) {
        if (except.search(/^[0-9]*$/) === 0) {
          except = except;
        } else {
          let $excepts = except.split(" ");
          let sum = Number();

          $excepts.forEach(function (each) {
            $(each).each(function () {
              sum += $(this).outerHeight();
            });
          });

          except = sum;
        }
      }

      // moveTo
      if (target) {
        $.moveTo({
          speed: 400,
          top: !except ? 0 : except,
          target: target,
          focus: focus,
          afterAction: function () {},
        });
      }
    });
  });
};
