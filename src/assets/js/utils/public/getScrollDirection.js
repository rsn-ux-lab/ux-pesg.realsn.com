/**
 *
 * 스크롤 방향 가져오기
 *
 * [script 작성 예]
 * getScrollDirection({
 *    scrollUp() {
 *       // callback
 *    },
 *    scrollDown(_args) {
 *       // callback
 *    },
 *  });
 *
 */

window.getScrollDirection = function () {
  // return
  try {
    if (!arguments[0]) {
      throw new Error("함수 리터럴 정보가 없습니다.");
    }
  } catch (err) {
    console.error("$.getScrollDirection", err);
    return;
  }

  let default_option = {
    scrollY: 0,
    scrollUp: false,
    scrollDown: false,
  };
  let option = { ...default_option, ...arguments[0] };
  let lastScrollY = 0;

  addEventListener("scroll", (e) => {
    option.scrollY = window.scrollY;

    // 이전의 스크롤 위치와 비교하기
    const isScrollUp = option.scrollY < lastScrollY ? true : false;

    // 현재의 스크롤 값을 저장
    lastScrollY = option.scrollY;

    if (isScrollUp) option.scrollUp && option.scrollUp(option);
    else option.scrollDown && option.scrollDown(option);
  });
};
