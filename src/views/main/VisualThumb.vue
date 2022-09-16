<template>
  <transition name="visual-thumb" appear>
    <div class="visual-thumb"></div>
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
    transform: translate(39.5rem, -50%);
  }
}
</style>
