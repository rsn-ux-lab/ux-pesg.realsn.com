/**
 *
 *  body scroll lock/unlock
 *
 *  [script 작성 예]
 *  // body 스크롤을 막을 때는
 *  window.lockBody();
 *
 *  // body 스크롤을 풀 때는
 *  window.unlockBody();
 *
 */

let lockBody_scrollT;

window.lockBody = function () {
  const $wrap = document.querySelector("#wrap");

  lockBody_scrollT = window.pageYOffset;
  $wrap.style.position = "fixed";
  $wrap.style.top = -lockBody_scrollT + "px";
};

window.unlockBody = function () {
  const $wrap = document.querySelector("#wrap");

  $wrap.style.position = "";
  $wrap.style.top = "";

  window.scrollTo(0, lockBody_scrollT);
  window.setTimeout(function () {
    lockBody_scrollT = null;
  }, 0);
};
