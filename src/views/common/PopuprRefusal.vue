<template>
  <ModalPopup @close="isClose(false)" v-if="isShow">
    <template slot="title">이메일무단수집거부</template>
    <template slot="body">
      <h3>1. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>2. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>3. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>4. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>5. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>6. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>7. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>8. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>9. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>10. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>11. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>12. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>13. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>14. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>15. 제목</h3>
      <p>본문 내용</p>
      <br />
      <h3>16. 제목</h3>
      <p>본문 내용</p>
      <br />
    </template>
  </ModalPopup>
</template>

<script>
import * as eventBus from "@/eventBus.js";
import ModalPopup from "../../components/modal/ModalPopup.vue";

export default {
  components: {
    ModalPopup,
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
    eventBus.popuprRefusal.$on("isShow", (_isShow) => (this.isShow = _isShow));

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
