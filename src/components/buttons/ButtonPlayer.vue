<template>
  <button @click="isShow(true)" class="video-button" type="button" title="영상재생">
    <IconPlay></IconPlay>
    <div class="video-button__thumb"></div>
  </button>
</template>

<script>
import * as eventBus from "@/eventBus.js";
import IconPlay from "../icons/IconPlay.vue";

export default {
  components: {
    IconPlay,
  },
  methods: {
    isShow(_isShow) {
      eventBus.modalPlayer.$emit("isShow", _isShow);
      eventBus.modalPlayer.$emit("inBountData", this.$attrs);
    },
  },
  created() {
    //youtube 쿼리 추출
    if (this.$attrs.type === "youtube") {
      this.$attrs.url = this.$attrs.url.match(/(?<=watch\?v=\s*).*?(?=\s*&)/gs).toString();
    }
  },
  mounted() {
    // thumb 삽입
    const $thumb = this.$el.querySelector(".video-button__thumb");

    switch (this.$attrs.type) {
      case "youtube":
        $thumb.style.backgroundImage = `url(https://img.youtube.com/vi/${this.$attrs.url}/maxresdefault.jpg)`;
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
.video-button {
  $v: &;

  overflow: hidden;
  position: relative;
  width: 117rem;
  height: 65rem;
  border-radius: $G-box-radius;
  box-shadow: $G-box-shadow;
  &__thumb {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    @include transition($time: 0.25);
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
      background-color: #000;
      opacity: 0.5;
    }
  }
  &:hover {
    #{$v}__thumb {
      transform: scale(1.05);
    }
  }
}
</style>
