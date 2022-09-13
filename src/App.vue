<template>
  <div id="wrap" data-target-device="pc">
    <Header></Header>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
    <Player></Player>
    <PopupTerms></PopupTerms>
    <PopupPersonal></PopupPersonal>
    <PopuprRefusal></PopuprRefusal>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Player from "./components/modal/Player.vue";
import PopupTerms from "./views/common/PopupTerms.vue";
import PopupPersonal from "./views/common/PopupPersonal.vue";
import PopuprRefusal from "./views/common/PopuprRefusal.vue";

export default {
  name: "wrap",
  components: {
    Header,
    Footer,
    Player,
    PopupTerms,
    PopupPersonal,
    PopuprRefusal,
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
    //
  },
  created() {
    //
  },
  mounted() {
    /* pages - 공통 */
    require("@/assets/js/pages/common.js");
  },
};
</script>

<style lang="scss" scoped>
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
