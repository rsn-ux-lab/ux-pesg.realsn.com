<template>
  <section class="video">
    <div class="inner">
      <div class="example-modal-window">
        <p>버튼을 누르면 모달 대화 상자가 열립니다.</p>
        <button @click="modal = true">열기</button>

        <!-- 컴포넌트 MyModal -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    // openModal() {
    //   this.modal = true;
    // },
    // closeModal() {
    //   this.modal = false;
    // },
    // doSend() {
    //   if (this.message.length > 0) {
    //     alert(this.message);
    //     this.message = "";
    //     this.closeModal();
    //   } else {
    //     alert("메시지를 입력해주세요.");
    //   }
    // },
  },
};
</script>
