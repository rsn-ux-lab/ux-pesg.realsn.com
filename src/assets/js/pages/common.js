import $ from "jquery";

// DOCUMENT READY...
$(function () {
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
    /**
     *
     *  Device 체크 (custom data attributes)
     *
     */

    let $wrap = $("#wrap");
    let detail = $.getDevice().detail;

    $wrap.wait(100).attr("data-device-detail", detail);
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
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
    setTimeout(() => {
      $.moveToParams();
    }, 1000);
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
    /**
     *
     * 더블탭(확대기능) 방지
     *
     */

    $.disabledDoubleTab();
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
    /**
     *
     * .SVG to XML 변환
     *
     */
    $('img[src*=".svg"]').makeSvg();
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
    /**
     *
     * wrapper is ready
     *
     */
    let $wrap = $("#wrap");
    let $loding = $("#lodingWrap");

    $loding.remove();
    $wrap.css({
      opacity: 1,
      visibility: "visible",
    });
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
    /**
     *
     * 스크롤 이동
     *
     */
    $(".js-anchor").anchor();
  })();
  /*
    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    */
  (function () {
    /**
     *
     * form 요소 인러랙션 일괄 적용
     *
     */
    let $wrap = $("#wrap");

    $wrap.formTamplate();
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
    /**
     *
     *.js-is-appear에 FadeIn 적용 ▼
     *
     *  [html 작성 예]
     *      //기본값 적용시
     *      <div class="isAppear">
     *
     *      //scroll.top 사용자값 입력시(예: class 뒤에 숫자 입력)
     *      <div class="isAppear50">
     *
     *  [CSS 작성 예]
     *      div {opacity:0;transition:none}
     *      div.appear {opacity:1;transition:opacity 0.3s ease-in-out}
     *
     */

    var $wrap = $("[class*=js-is-appear]");

    $wrap.each(function () {
      var $this = $(this);
      var classAll = $this.attr("class").split(" ");

      //scroll.top 옵션값 유,무
      var top = filterList(classAll, function (className) {
        if (className.indexOf("is-appear") !== -1) {
          var num = className.replace(/[^0-9]/g, "");

          $this.removeClass(className); //removeClass
          return (num = num !== "" ? num : 70); //scroll.top 기본값 70 설정함
        }
      })[0];

      //addClass('is-appear')
      scrollAction({
        target: $this,
        top: Number(top),
        scrollDownAction: function () {
          $this.addClass("appear");
        },
        scrollUpAction: function () {
          if (isReal == false) {
            $this.removeClass("is-appear");
          }
        },
      });
    });
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
    /**
     *
     * TEXT 말줄임
     *
     */
    $(".js-clamp-1").clamp(1);
    $(".js-clamp-2").clamp(2);
    $(".js-clamp-3").clamp(3);
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
    /**
     *
     * 데이터 불러오는 동안 대기상태 표시
     *
     * [html 작성 예]
     * <div data-loding-spinner="true"></div> // 로딩 표시
     * <div data-loding-spinner="false"></div> // 로딩 감추기
     * <div data-loding-spinner="true dimmed"></div> // 딤드 효과 추가 및 로딩 컬리 흰색 변경(기본값 : 검은색)
     * <div data-loding-spinner="true 1rem"></div> // rem 단위로 숫자 삽입하는 경우 크기 변경됨(기본값 : 6rem)
     *
     */

    $("[data-loding-spinner]").lodingSpinner();
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
    /**
     *
     * 맨 위로가기 버튼 추가
     *
     */

    let winH = window.innerHeight;
    let wrapH = $("#wrap").outerHeight();
    let $container = $("#container");
    let $btnTop;

    // windows 높이 보다 documnet가 1.5배 크면 "TOP Button" Node 추가
    if (winH * 1.5 < wrapH) {
      $btnTop = $(`
            <aside id="aisdeBtnTop">
                <button class="btn btn-top js-anchor" data-anchor="#wrap" type="button"><span>TOP</span></button>
            </aside>`);

      $container.append($btnTop); // 버튼 추가
      isActive(); // 버튼 활성, 비활성화
      $btnTop.find(".js-anchor").anchor(); // 버튼 클릭시 스크롤 이동
    }

    // windows 1/3 이상 스크롤 이동시 "TOP Button" 노출-
    let status;
    function isActive() {
      $(window).on("scroll", function () {
        let winT = $(this).scrollTop();

        if (winH / 3 < winT) {
          if (!status) $btnTop.addClass("is-active");
          status = true;
        } else {
          if (status) $btnTop.removeClass("is-active");
          status = false;
        }
      });
    }

    // 3초 동안 스크롤 움직임이 없으면 "TOP Button" 감추기
    setInterval(function () {
      if (status) {
        $btnTop.removeClass("is-active");
        status = false;
      }
    }, 3000);
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  (function () {
    /**
     *
     * #footer 위치를 하단에 붙이기
     *
     */
    let $container = $("#container");
    let $footer = $("#footer");
    let footerH = $footer.height();
    let resizeHeight = () => {
      let afterContainerH = Math.abs(innerHeight - footerH);

      $container.css("min-height", afterContainerH);
    };

    resizeHeight();

    // window resize event
    window.addEventListener("optimizedResize", () => {
      resizeHeight();
    });
  })();
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // DOCUMENT READY...
