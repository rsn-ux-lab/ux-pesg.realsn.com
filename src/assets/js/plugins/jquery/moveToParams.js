/**
 *
 *   파라미터 값으로 화면 스크롤 이동
 *
 *   [URL 작성 예]
 *   https://도메인/?moveto=data-card=감성추이 // $("[data-card='감성추이']") 위치로 이동
 *   https://도메인/?moveto=section // $("#section") 위치로 이동
 *   https://도메인/?moveto=card // $(".card") 위치로 이동
 *   https://도메인/?moveto=card--.js-sticky // $(".js-sticky") 높이값을 제외한 $(".card") 위치로 이동
 *   https://도메인/?moveto=card--50 // 50px 높이값을 제외한 $(".card") 위치로 이동
 *
 */
import $ from "jquery";

$.moveToParams = function () {
  let target = new URLSearchParams(location.search).get("moveto");

  if (!target) return;

  // 제외 높이 또는 제외 대상 높이
  let except_idx = target.indexOf("--");
  let except = except_idx === -1 ? false : target.substring(except_idx).replace("--", "");

  if (except) {
    target = target.substring(0, except_idx);

    // 제외대상 선택자 요소 filter
    if (/^[0-9]*$/.test(except)) {
      except = Number(except);
    } else {
      if (/^data-/g.test(except)) {
        except = filterBracket(except);
      } else if (!/^[.]/g.test(except)) {
        except = filterId(except);
      }

      let sum = 0;

      $(except).each(function () {
        sum += $(this).outerHeight();
      });

      except = sum;
    }
  }

  // target 선택자 요소 filter
  if (/^data-/g.test(target)) {
    target = filterBracket(target);
  } else if (!/^[.]/g.test(target)) {
    target = filterId(target);
  }

  // moveTo

  if (target) {
    $.moveTo({
      speed: 400,
      top: except === 0 ? 0 : except,
      target: $(target),
      afterAction: function () {},
    });
  }

  // ID 선택자명으로 변경
  function filterId(str) {
    let result = str.replace(str, "#" + str);

    return result;
  }

  // 대괄호 선택자명으로 변경
  function filterBracket(str) {
    let idx = str.indexOf("=");
    let value = str.substring(++idx);
    let result = str.replace(str, "[" + str + "]").replace(value, "'" + value + "'");

    return result;
  }
};
