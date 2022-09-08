<template>
  <header id="header" class="header" role="banner">
    <!-- <button @click="passEvent" class="btn btn-round">test</button>
    <h1>{{ modal }}</h1> -->
    <div class="inner">
      <link-logo></link-logo>
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
  .logo {
    display: inline-flex;
    justify-content: flex-start;
    flex-basis: 22rem;
  }
}
</style>

<script>
import linkLogo from "../buttons/linkLogo.vue";
import HeaderGnb from "./header/HeaderGnb.vue";
import HeaderUtill from "./header/HeaderUtill.vue";

export default {
  components: {
    linkLogo,
    HeaderGnb,
    HeaderUtill,
  },
  props: ["modal"],
  watch: {
    $route() {
      this.autoHeaderHide();
    },
  },
  methods: {
    passEvent() {
      this.$emit("test");
    },
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
