<template>
  <transition name="visual-thumb" appear>
    <div class="visual-thumb"></div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.visual-thumb {
  $v: &;

  position: absolute;
  top: calc(50% + 2rem);
  right: 0;
  width: 85.3rem;
  height: 63rem;
  border: 0.1rem solid #fff;
  border-radius: 2rem;
  background-color: rgba(#fff, 0.3);
  transform: translate(39.5rem, -50%);
  &-enter-active,
  &-leave-active {
    @include transition($tgs: transform, $delay: $G-container-delay);
  }
  &-enter,
  &-leave-to {
    transform: translate(50.5rem, -50%);
  }
}
</style>
