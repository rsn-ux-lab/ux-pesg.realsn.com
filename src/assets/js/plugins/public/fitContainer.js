import "./onLoadResize";

window.fitContainer = function () {
  let default_option = {
    $target: false,
    excepts: new Array(),
  };
  let option = typeof arguments[0] === "function" ? { ...(default_option.callback = arguments[0]), ...default_option } : { ...default_option, ...arguments[0] };

  window.onLoadResize((_args) => {
    const exceptSum = option.excepts.map((_arr) => _arr.clientHeight).reduce((prev, curr) => prev + curr, 0);
    const winH = document.querySelector("body").clientHeight;

    option.$target.style.minHeight = `${winH - exceptSum}px`;
  });
};
