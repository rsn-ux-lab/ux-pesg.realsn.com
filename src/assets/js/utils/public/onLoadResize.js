/**
 *
 * window resize event ▼
 *
 * [script 작성 예]
 * onLoadResize({
 *    callback() {
 *       //callback
 *     },
 *   });
 *
 */

window.onLoadResize = function () {
  let default_option = {
    delay: 300,
    timer: null,
    callback: false,
  };
  let option = { ...default_option, ...arguments[0] };

  window.addEventListener("resize", function () {
    clearTimeout(option.timer);
    option.timer = setTimeout(function () {
      // callback
      if (option.callback) option.callback(option);
    }, option.delay);
  });

  if (option.callback) option.callback(option);
};
