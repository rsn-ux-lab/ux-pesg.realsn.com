<template>
  <div id="wrap" data-target-device="pc">
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "wrap",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      imgPath: "@/assets/images",
    };
  },
  watch: {
    $route() {
      this.onLoadCommon();
    },
  },
  methods: {
    onLoadCommon() {
      //
    },
  },
  mounted() {
    this.onLoadCommon();

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

      $wrap.attr("data-device-detail", detail);
    })();
    /*
    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    */
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
