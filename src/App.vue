<template>
  <div id="wrap" data-target-device="pc">
    <Header></Header>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
    <MyModal v-if="modal">
      <!-- default 슬롯 콘텐츠 -->
      <p>Vue.js Modal Window!</p>
      <!-- /default -->
      <!-- footer 슬롯 콘텐츠 -->
      <template slot="footer">
        <button @click="modal = false">닫기</button>
      </template>
      <!-- /footer -->
    </MyModal>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MyModal from "@/components/modal/Player.vue";
import RoundButton from "./components/buttons/RoundButton.vue";
import { layer } from "@/assets/js/components/layer";

export default {
  name: "wrap",
  components: {
    Header,
    Footer,
    MyModal,
    RoundButton,
  },
  data() {
    return {
      modal: false,
      imgPath: "@/assets/images",
    };
  },
  watch: {
    $route() {
      //
    },
  },
  methods: {
    //
  },
  created() {
    //
    layer.$on("show", (_isShow) => {
      this.modal = _isShow;
    });
  },
  mounted() {
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
