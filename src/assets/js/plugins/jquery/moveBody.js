/**
 *
 * Body Tranform 적용
 *
 */
import $ from "jquery";

$.moveBody = function (_pos = "reset", { ...args }) {
  let default_option = {
    $body: $("body"),
    pos: _pos,
    duration: {
      start: "1s",
      end: "0.6s",
    },
    delay: {
      start: "0s",
      end: "0s",
    },
    timing: {
      start: "cubic-bezier(0.5, 0, 0.5, 1)",
      end: "cubic-bezier(0.5, 0, 0.5, 1)",
    },
  };
  let default_translate = {
    top: "-15% 0 0 0",
    right: "0 0 0 15%",
    bottom: "15% 0 0 0",
    left: "0 0 0 -15%",
  };
  let option = $.extend(default_option, default_translate, args);

  if (window.timerMoveBody) {
    clearTimeout(window.timerMoveBody);
    console.log("clear");
  }

  for (let key in default_translate) {
    if (option.pos === key) {
      option.$body[0].style.margin = option[key];

      let delay = Number(option.duration.start.replace("s", "")) + Number(option.delay.start.replace("s", ""));

      break;
    }
  }
  if (option.pos === "reset") {
    console.log("reset");

    option.$body[0].style.cssText = `
                transition-property : margin;
                transition-duration : ${option.duration.end};
                transition-delay : ${option.delay.end};
                transition-timing-function : ${option.timing.end};
                margin : 0;
            `;

    removeStyle();
  }
  function removeStyle() {
    let delay = Number(option.duration.end.replace("s", "")) + Number(option.delay.end.replace("s", ""));

    window.timerMoveBody = window.setTimeout(function () {
      option.$body[0].removeAttribute("style");
    }, delay * 1000);
  }
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
