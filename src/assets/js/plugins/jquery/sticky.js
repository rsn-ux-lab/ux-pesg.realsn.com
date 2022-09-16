/**
 *
 *  sticky
 *
 *  [script 작성 예]
 *   $.sticky({
 *     $target: this.$el,
 *     position: "bottom", // top, bottom
 *     callback: (_args) => {
 *       console.log(_args);
 *     },
 *   });
 *
 */

import $ from "jquery";
import "./scrollAction";

$.sticky = function () {
  let default_option = {
    $target: false,
    height: arguments[0].$target.offsetHeight,
    position: "bottom",
    value: 0,
    zIndex: 40,
    callback: false,
  };
  let option = typeof arguments[0] === "function" ? { ...(default_option.callback = arguments[0]), ...default_option } : { ...default_option, ...arguments[0] };

  function wrap(_tag, _target, _callback) {
    const $parentsWrap = document.createElement(_tag);

    $parentsWrap.innerHTML = _target.outerHTML;
    _target.parentNode.insertBefore($parentsWrap, _target);
    _target.remove();

    if (_callback) _callback({ to: $parentsWrap, from: $parentsWrap.firstChild });
  }

  wrap("div", option.$target, function (_args) {
    option.$target = _args.from;
    option.$wrap = _args.to;
    option.$wrap.classList.add("sticky-wrapper");
    option.$wrap.style.height = `${option.height}px`;
  });

  const hasposition = !option.position || option.position === "bottom" ? 100 : option.position === "top" ? 0 : 100;

  // toggle fixed
  $.scrollAction({
    $target: option.$wrap,
    top: hasposition,
    scrollDownAction: function () {
      // 스크롤 DOWN 액션
      option.$target.style.cssText = hasposition === 0 ? `position:fixed;top:${option.value}px;z-index:${option.zIndex};width:100%` : "";
    },
    scrollUpAction: function () {
      // 스크롤 UP 액션
      option.$target.style.cssText = hasposition === 100 ? `position:fixed;bottom:${option.value}px;z-index:${option.zIndex};width:100%` : "";
    },
  });
  option.$target.style.cssText = hasposition === 100 ? `position:fixed;bottom:${option.value}px;z-index:${option.zIndex};width:100%` : "";

  if (option.callback) option.callback(option);
};
