<template>
  <section class="graph-swiper">
    <div class="inner">
      <div class="swiper">
        <ul class="swiper-wrapper">
          <li class="swiper-slide swiper-lazy" v-for="img in this.imgs" :style="{ backgroundImage: `url(${img})` }">
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
  </section>
</template>

<script>
export default {
  name: "graph-swiper",
  data() {
    return {
      imgs: [
        require("@/assets/images/index/Infographics_thumb/thumb2.jpg"),
        require("@/assets/images/index/Infographics_thumb/thumb3.jpg"),
        require("@/assets/images/index/Infographics_thumb/thumb4.jpg"),
      ],
    };
  },
  mounted() {
    this.appendSwiper();
  },
  methods: {
    appendSwiper() {
      /* swiper */
      const $swiperThumb = this.$el.querySelector(".swiper");
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
    },
  },
};
</script>

<style lang="scss" scoped>
.graph-swiper:deep() {
  position: relative;
  padding: 10rem 0;
  .swiper {
    width: 108rem;
    height: 56rem;
    margin-bottom: 4rem;
    border-radius: $G-box-radius;
    box-shadow: $G-box-shadow;
  }
  .swiper-slide {
    background-size: cover;
  }
  .swiper-button {
    position: absolute;
    top: calc(50% - 4rem);
    left: 50%;
    width: 105%;
    transform: translate(-50%, -50%);
    &-black {
      color: #adadad;
      &:after {
        font-size: 4.4rem;
      }
      @include transition;

      &:hover {
        color: $G-color-hover;
      }
    }
  }
  .swiper-pagination {
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    &-bullet {
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
}
</style>
