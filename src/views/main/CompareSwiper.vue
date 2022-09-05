<template>
  <div class="compare-swiper">
    <!-- Ttile -->
    <div class="swiper swiper--title">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">1. 검색된 기업 선택</li>
        <li class="swiper-slide">2. 검색된 기업 선택</li>
        <li class="swiper-slide">3. 검색된 기업 선택</li>
        <li class="swiper-slide">4. 검색된 기업 선택</li>
        <li class="swiper-slide">5. 검색된 기업 선택</li>
        <li class="swiper-slide">6. 검색된 기업 선택</li>
      </ul>
    </div>
    <!-- Thumb -->
    <div class="swiper swiper--thumb">
      <ul class="swiper-wrapper">
        <li class="swiper-slide swiper-lazy" :style="{ backgroundImage: `url(${require('@/assets/images/sample_slide/sample1.png')})` }">
          <i class="swiper-lazy-preloader swiper-lazy-preloader-white"></i>
        </li>
        <li class="swiper-slide swiper-lazy" :style="{ backgroundImage: `url(${require('@/assets/images/sample_slide/sample2.png')})` }">
          <i class="swiper-lazy-preloader swiper-lazy-preloader-white"></i>
        </li>
        <li class="swiper-slide swiper-lazy" :style="{ backgroundImage: `url(${require('@/assets/images/sample_slide/sample3.png')})` }">
          <i class="swiper-lazy-preloader swiper-lazy-preloader-white"></i>
        </li>
        <li class="swiper-slide swiper-lazy" :style="{ backgroundImage: `url(${require('@/assets/images/sample_slide/sample4.png')})` }">
          <i class="swiper-lazy-preloader swiper-lazy-preloader-white"></i>
        </li>
        <li class="swiper-slide swiper-lazy" :style="{ backgroundImage: `url(${require('@/assets/images/sample_slide/sample5.png')})` }">
          <i class="swiper-lazy-preloader swiper-lazy-preloader-white"></i>
        </li>
        <li class="swiper-slide swiper-lazy" :style="{ backgroundImage: `url(${require('@/assets/images/sample_slide/sample6.png')})` }">
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
export default {
  mounted() {
    const $wrap = this.$el;

    // Title
    const $swiperTitle = $wrap.querySelector(".swiper--title");
    let swiperTitle = new Swiper($swiperTitle, {
      slidesPerView: 1,
      loop: true,
      loopedSlides: $swiperTitle.querySelectorAll(".swiper-slide").length,
      effect: "fade",
    });

    // Thumb
    const $swiperThumb = $wrap.querySelector(".swiper--thumb");
    let swiperThumb = new Swiper($swiperThumb, {
      autoplay: {
        delay: 4000,
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
        nextEl: $wrap.querySelector(".swiper-button-next"),
        prevEl: $wrap.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: $wrap.querySelector(".swiper-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });

    swiperTitle.controller.control = swiperThumb;
    swiperThumb.controller.control = swiperTitle;
  },
};
</script>

<style lang="scss" scoped>
.compare-swiper::v-deep {
  position: relative;
  height: 64rem;
  width: 100rem;
  margin: 0 0 6rem auto;
  transform: translateX(35rem);
  .swiper--title {
    .swiper-slide {
      font-size: 3rem;
      text-align: center;
      color: #d3d3d3;
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
