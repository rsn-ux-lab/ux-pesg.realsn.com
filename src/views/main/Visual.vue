<template>
  <section class="visual">
    <div class="inner">
      <VisualText />
      <VisualThumb />
    </div>
    <!-- <div class="test" :style="{ 'background-image': 'url(' + require('@/assets/images/main/visua_bg_object.png') + ')' }"></div> -->
  </section>
</template>

<script>
import VisualText from "./VisualText.vue";
import VisualThumb from "./VisualThumb.vue";
export default {
  components: {
    VisualText,
    VisualThumb,
  },
  created() {
    //
  },
  beforeEnter(el) {
    // ...
    console.log(el);
  },
  mounted() {
    document.querySelector("#container").classList.remove("is-active");
    document.querySelector("#container").classList.add("is-active");
  },
};
</script>

<style lang="scss" scoped>
/* visual */

.visual {
  overflow: hidden;
  position: relative;
  height: 82.6rem;
  background-color: #eaf2f9;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("~@/assets/images/main/visua_bg_object.png") 30% 58% no-repeat;
    background-size: auto 230%;
  }
  .test {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    border: 10px solid red;
    z-index: 10;
  }
}
</style>
