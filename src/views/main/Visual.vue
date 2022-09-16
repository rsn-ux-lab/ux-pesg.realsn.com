<template>
  <transition name="visual" appear>
    <section class="visual js-is-appear">
      <div class="inner">
        <VisualText></VisualText>
        <VisualThumb></VisualThumb>
      </div>
      <!-- <div class="test" :style="{ 'background-image': 'url(' + require('@/assets/images/main/visua_bg_object.png') + ')' }"></div> -->
    </section>
  </transition>
</template>

<script>
import VisualText from "./VisualText.vue";
import VisualThumb from "./VisualThumb.vue";
export default {
  name: "visual",
  components: {
    VisualText,
    VisualThumb,
  },
  created() {
    //
  },
  beforeEnter(el) {
    //
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
  $v: &;

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
    background: url("~@/assets/images/main/visua_bg.png") center center no-repeat;
    background-size: auto 100%;
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
  &-enter-active,
  &-leave-active {
    transition-delay: 4s;
    #{$v}-thumb {
      @include transition($tgs: transform, $delay: $G-container-delay + 0.5);
    }
  }
  &-enter,
  &-leave-to {
    #{$v}-thumb {
      transform: translate(50.5rem, -50%);
    }
  }
}
</style>
