/**
 *
 *  *.SVG 파일을 XML 변환
 *
 *  [html 작성 예]
 *  <img src='주소.svg'>
 *
 *  [script 작성 예]
 *  $('img[src*=".svg"]').makeSvg();
 *
 *  [출처]
 *  https://lottoking.tistory.com/425
 *
 */
import $ from "jquery";

$.fn.makeSvg = function () {
  $(this).each(function () {
    var $img = $(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");

    $.ajax({
      url: imgURL,
      dataType: "xml",
      async: false,
      success: function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        if (typeof imgClass !== "undefined") {
          $svg = $svg.addClass("" + imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
          $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"));
        }
        $img.replaceWith($svg);
      },
    });
  });
};
