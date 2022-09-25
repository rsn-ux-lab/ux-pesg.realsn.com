<template>
  <transition name="modal" appear v-if="isShow">
    <article class="modal">
      <div class="modal-wrapper">
        <main class="modal-body">
          <slot name="message">메세지를 입력하세요.</slot>
        </main>
        <footer class="modal-footer">
          <button @click="close" class="btn btn-round-grad btn-round-grad--lg d-block w-100 mx-auto" type="button">
            <slot name="agree">확인</slot>
          </button>
        </footer>
      </div>
      <i class="modal-dimmed" aria-hidden="true" @click="close"></i>
    </article>
  </transition>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    frameset: {
      type: String,
    },
  },
  data() {
    return {
      $frameset: null,
    };
  },
  methods: {
    close() {
      this.$emit("getShow", (this.$attrs.isShow = false));
    },
  },
  watch: {
    isShow(_boolean) {
      if (_boolean) {
        // 부모 frameset Z-index 최상위 변경
        document.querySelector(this.frameset).style.zIndex = "100";

        // body scroll lock
        window.lockBody();

        //ESC 창닫기
        window.addEventListener(
          "keydown",
          (e) => {
            if (this.isShow && e.key === "Escape") {
              console.log("a");
              this.close();
            }
          },
          true
        );
      } else {
        setTimeout(() => {
          // 부모 frameset Z-index 초기화
          document.querySelector(this.frameset).style.zIndex = "";

          //body scroll unlock
          window.unlockBody();
        }, 800);
      }
    },
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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10rem;
    max-height: 70vh;
    margin: 2rem 0 2rem 2rem;
    padding-right: 2rem;
    font-size: 2.4rem;
    text-align: center;
  }
  &-footer {
    padding: 0 2rem 2rem;
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
