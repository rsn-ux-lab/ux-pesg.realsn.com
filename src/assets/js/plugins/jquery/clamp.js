/**
 *
 *   TEXT 말줄임 ▼
 *
 *   [script 작성 예]
 *       $(".js-clamp-1").clamp(1); //1줄 말줄임
 *       $(".js-clamp-2").clamp(2); //2줄 말줄임
 *       $(".js-clamp-3").clamp(3); //3줄 말줄임
 *
 *   [출처]
 *   https://www.npmjs.com/package/multi-clamp
 *
 */

import MultiClamp from "multi-clamp";
import $ from "jquery";

$.fn.clamp = function (clamp, ellipsis = "<i>...</i>") {
  $(this).each(function () {
    new MultiClamp(this, {
      ellipsis: ellipsis,
      clamp: clamp,
      splitByWords: true,
      disableCssClamp: true,
      onClampStart: function () {
        // console.log(this);
      },
    });
  });
};
