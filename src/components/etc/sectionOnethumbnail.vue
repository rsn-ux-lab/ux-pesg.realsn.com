<template>
  <section class="one-thumbnail l-section">
    <div class="inner">
      <header class="one-thumbnail-header" v-if="this.$slots['title']">
        <h3 class="l-section__title">
          <slot name="title">section 제목을 입력하세요</slot>
        </h3>
        <p class="l-section__description" v-if="this.$slots['description']">
          <slot name="description">section 설명을 입력하세요</slot>
        </p>
      </header>
      <main class="one-thumbnail-body">
        <div class="one-thumbnail-box" v-if="this.$attrs.thumb">
          <img class="one-thumbnail-box__thumb" :src="this.$attrs.thumb" alt="" />
        </div>
      </main>
      <footer class="one-thumbnail-footer">
        <div class="one-thumbnail-btn-area" v-if="this.$slots['button']">
          <slot name="button">버튼을 추가하세요</slot>
        </div>
      </footer>
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

  &-body {
    #{$g}-box {
      overflow: hidden;
      position: relative;
      display: block;
      width: 108rem;
      min-height: 56rem;
      margin: 0 auto;
      border-radius: $G-box-radius;
      box-shadow: $G-box-shadow;
      &__thumb {
        width: 100%;
        height: auto;
      }
    }
  }
  &-footer {
    #{$g}-btn-area {
      padding-top: 7rem;
      text-align: center;
    }
  }
}
</style>
