<template>
  <div id="wrap" data-target-device="pc">
    <Header></Header>
    <transition name="container">
      <router-view />
    </transition>
    <ButtonTop></ButtonTop>
    <Footer></Footer>
    <ModalPlayer></ModalPlayer>
    <PopupTerms></PopupTerms>
    <PopupPersonal></PopupPersonal>
    <PopuprRefusal></PopuprRefusal>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ModalPlayer from "./components/modal/ModalPlayer.vue";
import PopupTerms from "./views/common/PopupTerms.vue";
import PopupPersonal from "./views/common/PopupPersonal.vue";
import PopuprRefusal from "./views/common/PopuprRefusal.vue";
import ButtonTop from "./components/buttons/ButtonTop.vue";

export default {
  name: "wrap",
  components: {
    Header,
    Footer,
    ModalPlayer,
    PopupTerms,
    PopupPersonal,
    PopuprRefusal,
    ButtonTop,
  },
  data() {
    return {
      //
    };
  },
  watch: {
    $route() {
      //
    },
  },
  methods: {
    /* 페이지 공통 기능 호출 */
    onCommonJs() {
      {
        /**
         *
         *  Device 체크 (custom data attributes)
         *
         */

        let $wrap = $("#wrap");
        let detail = $.getDevice().detail;

        $wrap.wait(100).attr("data-device-detail", detail);
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
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
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
        /**
         *
         * 더블탭(확대기능) 방지
         *
         */

        $.disabledDoubleTab();
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
        /**
         *
         * .SVG to XML 변환
         *
         */
        $('img[src*=".svg"]').makeSvg();
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
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
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
        /**
         *
         * 스크롤 이동
         *
         */
        $(".js-anchor").anchor();
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
        /**
         *
         * form 요소 인러랙션 일괄 적용
         *
         */
        let $wrap = $("#wrap");

        $wrap.formTamplate();
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
        /**
         *
         *.js-is-appear에 FadeIn 적용 ▼
         *
         *  [html 작성 예]
         *      //기본값 적용시
         *      <div class="js-is-appear">
         *
         *      //scroll.top 사용자값 입력시(예: class 뒤에 숫자 입력)
         *      <div class="js-is-appear50">
         *
         *  [CSS 작성 예]
         *      div {opacity:0;transition:none}
         *      div.appear {opacity:1;transition:opacity 0.3s ease-in-out}
         *
         */
        const $appears = document.querySelectorAll("[class*=js-is-appear]");

        $appears.forEach((_each) => {
          const $this = _each;
          const classNames = $this.getAttribute("class").split(" ");
          const posY = classNames
            .map((_arr) => {
              if (_arr.indexOf("js-is-appear") !== -1) {
                let num = Number(_arr.replace(/[^0-9]/g, ""));

                $this.classList.remove(_arr); //removeClass
                return (num = num !== 0 ? num : 70); //scroll.top 기본값 70 설정함
              }
            })
            .filter((_el) => _el)[0];

          // addClass('js-is-appear')
          $.scrollAction({
            $target: $this,
            top: posY,
            scrollDownAction: function () {
              $this.classList.add("is-appear");
            },
            scrollUpAction: function () {
              $this.classList.remove("is-appear");
            },
          });
        });
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
        /**
         *
         * TEXT 말줄임
         *
         */
        $(".js-clamp-1").clamp(1);
        $(".js-clamp-2").clamp(2);
        $(".js-clamp-3").clamp(3);
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
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
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
        //
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
    },
  },
  created() {
    //
  },
  mounted() {
    this.onCommonJs();
  },
  updated() {
    this.onCommonJs();
  },
};
</script>

<style lang="scss" scoped>
.container {
  &-enter-active,
  &-leave-active {
    transition-property: opacity;
    transition-duration: #{$G-container-delay + "s"};
  }
  &-enter-active {
    transition-delay: #{$G-container-delay + "s"};
  }
  &-enter,
  &-leave-active {
    opacity: 0;
  }
}
</style>
