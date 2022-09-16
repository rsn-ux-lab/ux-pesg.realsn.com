<template>
  <transition name="modal" appear>
    <article class="modal">
      <div class="modal-wrapper">
        <header class="modal-header">
          <button class="modal-header__icon-close" title="창닫기" type="button" @click="$emit('close')"><i class="icon-close"></i></button>
          <h1 class="modal-header__title clamp-1">
            <slot name="title">팝업제목을 입력하세요.</slot>
          </h1>
        </header>
        <main class="modal-body">
          <slot name="body">본문내용을 입력하세요.</slot>
        </main>
        <!-- <footer class="modal-footer">하단</footer> -->
      </div>
      <i class="modal-dimmed" aria-hidden="true" @click.self="$emit('close')"></i>
    </article>
  </transition>
</template>

<script>
export default {
  created() {
    /* body scroll lock */
    window.lockBody();
  },
  destroyed() {
    /* body scroll unlock */
    window.unlockBody();
  },
};
</script>

<style lang="scss" scoped>
.modal {
  $m: &;

  &-wrapper {
    overflow: hidden;
    min-width: 50rem;
    min-height: 20rem;
    border-radius: 2rem;
  }
  &-body {
    max-height: 70vh;
    margin: 2rem 0 2rem 2rem;
    padding-right: 2rem;
  }
  &-header {
    display: flex;
    align-items: center;
    height: 6rem;
    background: $G-grad-primary;
    &__title {
      width: 90%;
      padding-left: 1em;
      font-size: 2.3rem;
      font-weight: bold;
      line-height: 1em;
      color: #fff;
      text-shadow: $G-text-shadow;
    }
  }
  &-enter-active,
  &-leave-active {
    transition-delay: 2s;

    #{$m}-wrapper {
      @include transition($tgs: opacity transform, $time: 0.2, $delay: 0.2);
    }
    #{$m}-dimmed {
      @include transition($tgs: opacity, $time: 0.2);
    }
  }
  &-leave-active {
    @include transition($tgs: opacity);
  }
  &-enter,
  &-leave-to {
    transition: none 1s;
    #{$m}-wrapper {
      opacity: 0;
      transform: translate(-50%, -45%);
      @include transition($tgs: opacity transform, $time: 0.4);
    }
    #{$m}-dimmed {
      opacity: 0;
      @include transition($tgs: opacity, $time: 0.4, $delay: 0.4);
    }
  }
}
</style>
