<template>
  <transition name="visual-thumb" appear>
    <div class="visual-thumb" :style="{ backgroundImage: `url(${require('@/assets/images/main/visual_thumb.jpg')})` }"></div>
  </transition>
</template>

<script>
export default {
  name: "visual-thumb",
};
</script>

<style lang="scss" scoped>
.visual {
  $v: &;
  &-thumb {
    position: absolute;
    top: calc(50% + 2rem);
    right: 0;
    width: 85.3rem;
    height: 63rem;
    border: 0.1rem solid #fff;
    border-radius: 2rem;
    background-color: rgba(#fff, 0.3);
    background-size: cover;
    transform: translate(39.5rem, -50%);
    box-shadow: $G-box-shadow;
  }
}
</style>
