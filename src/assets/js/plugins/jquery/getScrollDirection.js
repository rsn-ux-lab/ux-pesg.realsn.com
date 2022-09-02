/**
 *
 * 스크롤 방향 가져오기
 *
 */

import $ from "jquery";

$.getScrollDirection = function () {
  let lastScrollY = 0;

  addEventListener("scroll", (e) => {
    const scrollY = window.scrollY;

    // 이전의 스크롤 위치와 비교하기
    const direction = scrollY > lastScrollY ? "Scroll Down" : "Scroll Up";

    // 현재의 스크롤 값을 저장
    lastScrollY = scrollY;

    console.log(direction);
  });
};
