/**
 *
 *  px를 rem 변환 후 style 속성,값 추가
 *
 *  [HTML 작성 예]
 *  <div data-px2rem="width:800px;height:400px"></div>
 *
 *  [HTML 출력 상태]
 *  <div data-px2rem="width:41.6rem;height:20.8rem"></div>
 *
 */
import $ from "jquery";

$.fn.insertConvertedPixel = function () {
  $(this).each(function () {
    let $each = $(this);
    let attr = $each.attr("data-px2rem");
    let splits = attr.split(";").map((arrs) => arrs.split(":"));

    splits.forEach(function (each) {
      if (each[1].search(/[^0-9]/g) === 0) return;

      let style = each[0];
      let value = px2rem(each[1]);

      $each.css(style, value);
    });

    $each.removeAttr("data-px2rem");
  });
};

/**
 *
 * px 단위를 rem 변환
 *
 *  designW = 디자인 시안 너비
 *  deviceW = 디바이스 크기(현 기준 : iPhpne Pro 12)
 *
 */

function px2rem(px, designW = 750, deviceW = 390) {
  let result = ((px.replace(/\px/g, "") * deviceW) / designW) * 0.1;

  return Math.round((result + Number.EPSILON) * 100) / 100 + "rem";
}
