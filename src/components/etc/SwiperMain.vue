<template>
  <div class="swiper-main">
    <!-- Ttile -->
    <div class="swiper swiper--title">
      <ul class="swiper-wrapper">
        <li class="swiper-slide" v-for="title in this.datas.title">{{ title }}</li>
      </ul>
    </div>
    <!-- Thumb -->
    <div class="swiper swiper--thumb">
      <ul class="swiper-wrapper">
        <li class="swiper-slide swiper-lazy" v-for="img in this.datas.img" :style="{ backgroundImage: `url(${img})` }">
          <i class="swiper-lazy-preloader swiper-lazy-preloader-white"></i>
        </li>
      </ul>
    </div>
    <!-- Add Navigation -->
    <div class="swiper-button">
      <div class="swiper-button-prev swiper-button-black"></div>
      <div class="swiper-button-next swiper-button-black"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import swiper from "../../assets/js/libs/swiper/swiper";

export default {
  name: "swiper-main",
  props: {
    inBoundData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      //
      datas: {
        allData: JSON.parse(JSON.stringify(this.inBoundData)),
        get title() {
          return this.allData.map((_arr) => _arr.title);
        },
        get img() {
          return this.allData.map((_arr) => _arr.img);
        },
      },
    };
  },
  mounted() {
    this.appendSwiper();
    this.resetSwiper();
  },
  methods: {
    appendSwiper() {
      /* swiper - title */
      const $swiperTitle = this.$el.querySelector(".swiper--title");
      this.swiperTitle = new Swiper($swiperTitle, {
        slidesPerView: 1,
        loop: true,
        loopedSlides: $swiperTitle.querySelectorAll(".swiper-slide").length,
        effect: "fade",
      });

      /* swiper - thumb */
      const $swiperThumb = this.$el.querySelector(".swiper--thumb");
      this.swiperThumb = new Swiper($swiperThumb, {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 1,
        loop: true,
        loopedSlides: $swiperThumb.querySelectorAll(".swiper-slide").length,
        lazy: true,
        lazy: {
          loadPrevNext: false,
          loadOnTransitionStart: true,
        },
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        navigation: {
          nextEl: this.$el.querySelector(".swiper-button-next"),
          prevEl: this.$el.querySelector(".swiper-button-prev"),
        },
        pagination: {
          el: this.$el.querySelector(".swiper-pagination"),
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });

      // swiper control 동기화
      this.swiperTitle.controller.control = this.swiperThumb;
      this.swiperThumb.controller.control = this.swiperTitle;
    },
    resetSwiper() {
      // swiper 위치 초기화
      this.swiperThumb.autoplay.stop();

      $.scrollAction({
        $target: this.$el,
        top: 100,
        scrollDownAction: () => {
          // 스크롤 DOWN 액션
          this.swiperThumb.autoplay.start();
        },
        scrollUpAction: () => {
          // 스크롤 UP 액션
          this.swiperThumb.slideTo(0, 0, false);
          this.swiperThumb.autoplay.stop();
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-main:deep() {
  position: relative;
  height: 64rem;
  width: 100rem;
  margin: 0 0 6rem auto;
  transform: translateX(35rem);
  .swiper--title {
    .swiper-slide {
      font-size: 3rem;
      text-align: center;
      color: #525252;
      opacity: 0 !important;
      &-duplicate-active {
        opacity: 1 !important;
      }
    }
  }
  .swiper--thumb {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 84.3rem;
    height: 50.7rem;
    border-radius: 2rem;
    box-shadow: $G-box-shadow;
    transform: translate(-50%, -50%) skewX(0.001deg);
    .swiper-slide {
      background-size: cover;
    }
  }
  .swiper-button-black {
    color: #adadad;
    &:after {
      font-size: 4.4rem;
    }
    @include transition;

    &:hover {
      color: $G-color-hover;
    }
  }
  .swiper-pagination-bullet {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    font-family: "Jost";
    font-style: normal;
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    line-height: 1em;
    opacity: 1;
    background: #bbbbbb;
    @include transition;

    &-active {
      background-color: $G-color-hover;
    }
  }
}
</style>
