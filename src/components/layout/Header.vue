<template>
  <header id="header" class="header" role="banner">
    <div class="inner">
      <HeaderH1 />
      <HeaderGnb />
      <HeaderUtill />
    </div>
  </header>
</template>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $G-header-height;
  background-color: #fff;
  box-shadow: 0 0.1rem 1rem rgba(#000, 0.05);
  @include transition($tgs: transform box-shodow);

  &.is-hide {
    box-shadow: 0 0.1rem 0.5rem rgba(#000, 0);
    transform: translateY(-100%);
  }

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
      this.autoHeaderHide();
    },
  },
  methods: {
    autoHeaderHide() {
      const $header = document.querySelector("#header");
      const boundaryNum = 300;
      let status;

      getScrollDirection({
        scrollUp() {
          if (status) $header.classList.remove("is-hide");
          status = false;
        },
        scrollDown(_args) {
          const isStop = _args.scrollY > boundaryNum;

          if (isStop) {
            if (!status) $header.classList.add("is-hide");
            status = true;
          }
        },
      });
    },
  },
  mounted() {
    this.autoHeaderHide();
  },
};
</script>
