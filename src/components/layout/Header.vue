<template>
  <header id="header" class="header" role="banner">
    <div class="inner">
      <HeaderH1 />
      <HeaderGnb />
      <HeaderUtill />
    </div>
  </header>
</template>

<style lang="scss">
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $G-header-height;
  background-color: #fff;
  .inner {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
}
</style>

<script>
import HeaderH1 from "./header/HeaderH1.vue";
import HeaderGnb from "./header/HeaderGnb.vue";
import HeaderUtill from "./header/HeaderUtill.vue";

export default {
  components: {
    HeaderH1,
    HeaderGnb,
    HeaderUtill,
  },
  watch: {
    $route() {
      this.autoHide();
    },
  },
  methods: {
    autoHide: function () {
      $.getScrollDirection();

      const $header = $("#header");
      const winH = window.innerHeight;

      // windows 1/3 이상 스크롤 이동시 "TOP Button" 노출-
      let status;

      $(window).on("scroll", function () {
        let winT = $(this).scrollTop();

        if (winH / 3 < winT) {
          if (!status) $header.removeClass("is-active");
          status = true;
        } else {
          if (status) $header.addClass("is-active");
          status = false;
        }
      });

      // 3초 동안 스크롤 움직임이 없으면 "TOP Button" 감추기
      setInterval(function () {
        if (status) {
          $header.addClass("is-active");
          status = false;
        }
      }, 3000);
    },
  },
  mounted() {
    this.autoHide();
  },
};
</script>
