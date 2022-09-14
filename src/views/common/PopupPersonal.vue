<template>
  <popup @close="isClose(false)" v-if="isShow">
    <template slot="title">개인정보 처리방침</template>
    <template slot="body">
      <p>내용을 입력하세요</p>
    </template>
  </popup>
</template>

<script>
import * as eventBus from "@/eventBus.js";
import Popup from "../../components/modal/Popup.vue";

export default {
  components: {
    Popup,
  },
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
    // Modal Active
    eventBus.popupPersonal.$on("isShow", (_isShow) => (this.isShow = _isShow));

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
};
</script>

<style lang="scss" scoped>
:deep() .modal {
  &-wrapper {
    width: 90rem;
  }
}
</style>
