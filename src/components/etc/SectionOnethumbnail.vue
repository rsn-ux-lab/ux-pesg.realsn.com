<template>
  <section class="one-thumbnail">
    <div class="inner">
      <header class="one-thumbnail-header">
        <h3 class="one-thumbnail-header__title">
          <slot name="title">section 제목을 입력하세요</slot>
        </h3>
        <p class="one-thumbnail-header__description">
          <slot name="desc">section 설명을 입력하세요</slot>
        </p>
      </header>
      <main class="one-thumbnail-body">
        <div class="one-thumbnail-box" v-if="this.$attrs.thumb">
          <img class="one-thumbnail-box__thumb" :src="this.$attrs.thumb" alt="" />
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: "one-thumbnail",
};
</script>

<style lang="scss" scoped>
.one-thumbnail {
  $g: &;

  padding: 10rem 0;
  &-header {
    &__title {
      font-size: 3.5rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 2rem;
    }
    &__description {
      margin-bottom: 5.8rem;
      font-size: 2rem;
      color: #514888;
      text-align: center;
      font-weight: 500;
    }
  }
  &-body {
    #{$g}-box {
      overflow: hidden;
      position: relative;
      display: block;
      width: 108rem;
      height: 56rem;
      margin: 0 auto;
      border-radius: $G-box-radius;
      box-shadow: $G-box-shadow;
      &__thumb {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
