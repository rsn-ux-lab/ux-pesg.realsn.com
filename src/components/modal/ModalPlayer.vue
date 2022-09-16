<template>
  <transition name="modal" appear @close="isClose(false)" v-if="isShow">
    <article class="modal">
      <div class="modal-wrapper">
        <header class="modal-header">
          <button class="modal-header__icon-close" title="창닫기" type="button" @click="isShow = false"><i class="icon-close"></i></button>
          <h1 class="modal-header__title clamp-1">{{ this.datas.title }}</h1>
        </header>
        <main class="modal-body">
          <iframe
            v-if="this.datas.type === 'youtube'"
            class="youtube"
            :src="'https://www.youtube.com/embed/' + this.datas.url + '?autoplay=1&vq=hd1080&rel=0&playsinline=1'"
            frameborder="0"
            allow="playsinline; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </main>
      </div>
      <i class="modal-dimmed" aria-hidden="true" @click="isShow = false"></i>
    </article>
  </transition>
</template>

<script>
import * as eventBus from "@/eventBus.js";

export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    isClose(_isClose) {
      this.isShow = _isClose;
    },
  },
  created() {
    // Modal Active & Datas
    eventBus.modalPlayer.$on("isShow", (_isShow) => (this.isShow = _isShow));
    eventBus.modalPlayer.$on("inBountData", (_datas) => {
      this.datas = _datas;
    });

    // ESC 창닫기
    window.addEventListener(
      "keydown",
      (e) => {
        if (this.isShow && e.key === "Escape") {
          this.isShow = false;
        }
      },
      true
    );
  },
  mounted() {
    //
  },
  destroyed() {
    //
  },
  updated() {
    /* body scroll lock/unlock */
    if (this.isShow) window.lockBody();
    else window.unlockBody();
  },
};
</script>

<style lang="scss" scoped>
.modal {
  $p: &;

  &-wrapper {
    overflow: hidden;
    border-radius: 2rem;
  }
  &-body {
    position: relative;
    margin: 2rem 0 2rem 2rem;
    padding-right: 2rem;
    &:empty {
      width: 40rem;
      height: 20rem;
      margin: 2rem;
      padding-right: 0;
      &::after {
        content: "URL 또는 Type 설정을 다시하세요";
        position: absolute;
        top: 50%;
        left: 50%;
        font-weight: bold;
        color: #ccc;
        white-space: nowrap;
        transform: translate(-50%, -50%);
      }
    }
    .youtube {
      width: 91.4rem;
      height: 51.4rem;
    }
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
    transition: none 2s;

    #{$p}-wrapper {
      @include transition($tgs: opacity transform, $time: 0.2, $delay: 0.2);
    }
    #{$p}-dimmed {
      @include transition($tgs: opacity, $time: 0.2);
    }
  }
  &-leave-active {
    @include transition($tgs: opacity);
  }
  &-enter,
  &-leave-to {
    transition: none 1s;
    #{$p}-wrapper {
      opacity: 0;
      transform: translate(-50%, -45%);
      @include transition($tgs: opacity transform, $time: 0.4);
    }
    #{$p}-dimmed {
      opacity: 0;
      @include transition($tgs: opacity, $time: 0.4, $delay: 0.4);
    }
  }
}
</style>
