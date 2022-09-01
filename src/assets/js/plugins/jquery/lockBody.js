/**
 *
 *  body scroll lock/unlock
 *
 *  [script 작성 예]
 *  // body 스크롤을 막을 때는
 *  $.lockBody();
 *
 * // body 스크롤을 풀 때는
 * $.lockBody();
 *
 */
import $ from "jquery";

let $lockBody_doc = $("html, body"),
  lockBody_scrollT;

$.lockBody = function () {
  lockBody_scrollT = window.pageYOffset;

  $("#wrap").css({
    position: "fixed",
    top: -lockBody_scrollT,
  });

  // if (window.pageYOffset) {
  //     lockBody_scrollT = window.pageYOffset;

  //     $("#wrap").css({
  //         position: "fixed",
  //         top: -lockBody_scrollT,
  //     });
  // }

  // $lockBody_doc.css({
  //     height: "100%",
  //     overflow: "hidden",
  // });
};

$.unlockBody = function () {
  // $lockBody_doc.css({
  //     height: "",
  //     overflow: "",
  // });
  $("#wrap").css({
    position: "",
    top: "",
  });
  window.scrollTo(0, lockBody_scrollT);
  window.setTimeout(function () {
    lockBody_scrollT = null;
  }, 0);
};
