<template>
  <section class="sub-title">
    <div class="inner">
      <h2 class="sub-title__title">
        <slot name="title">서브제목 입력하세요</slot>
      </h2>
    </div>
    <i class="sub-title__bg sub-title__bg--left" aria-hidden="true"></i>
    <i class="sub-title__bg sub-title__bg--right" aria-hidden="true"></i>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sub-title {
  overflow: hidden;
  position: relative;
  height: 38rem;
  background-color: #ccc;
  background-size: cover;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("~@/assets/images/components/etc/section_sub_title/bg_wave.png") 0 0 no-repeat;
    background-size: cover;
  }
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__title {
    font-size: 5.4rem;
    font-weight: bold;
    color: #716c94;
  }
  &__bg {
    position: absolute;
    width: 100px;
    height: 100px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    &--left {
      top: 7rem;
      left: 8rem;
      width: 26.9rem;
      height: 27.8rem;
      background-image: url("~@/assets/images/components/etc/section_sub_title/object_left.png");
    }
    &--right {
      top: 6.5rem;
      right: 9rem;
      width: 49.8rem;
      height: 28.3rem;
      background-image: url("~@/assets/images/components/etc/section_sub_title/object_right.png");
    }
  }
}
</style>
