/**
 *
 * window resize event ▼
 *
 * [script 작성 예]
 * window.onLoadResize({
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
    windowSize: {
      width: window.outerWidth,
      height: window.outerHeight,
    },
    callback: false,
  };
  let option = typeof arguments[0] === "function" ? { ...(default_option.callback = arguments[0]), ...default_option } : { ...default_option, ...arguments[0] };

  window.addEventListener("resize", function () {
    clearTimeout(option.timer);
    option.timer = setTimeout(function () {
      // window resize
      option.windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      // callback
      if (option.callback) option.callback(option);
    }, option.delay);
  });

  if (option.callback) option.callback(option);
};
