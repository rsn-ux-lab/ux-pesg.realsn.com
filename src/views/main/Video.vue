<template>
  <section class="video">
    <div class="inner">
      <div class="example-modal-window">
        <p>버튼을 누르면 모달 대화 상자가 열립니다.</p>
        <button @click="isShow('true')" class="btn btn-round btn-round--xlg">열기</button>
        <!-- 컴포넌트 MyModal -->
      </div>
    </div>
  </section>
</template>

<script>
import * as eventBus from "@/eventBus.js";

export default {
  methods: {
    isShow(_isShow) {
      eventBus.player.$emit("isShow", _isShow);
    },
  },
};
</script>
