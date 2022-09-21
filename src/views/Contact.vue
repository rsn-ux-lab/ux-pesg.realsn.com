<template>
  <main id="container" role="main">
    <h2 class="visually-hidden">contact</h2>

    <!-- 문의사항 -->
    <SendMail></SendMail>
    <!-- //문의사항 -->

    <!-- 자주묻는질문 -->
    <Faq></Faq>
    <!-- //자주묻는질문 -->

    <!-- 주요소식 -->
    <News></News>
    <!-- //주요소식 -->

    <!-- 연락처 안내 -->
    <Contact></Contact>
    <!-- //연락처 안내 -->
  </main>
</template>

<script>
import SendMail from "./contact/SendMail.vue";
import Faq from "./contact/Faq.vue";
import News from "./contact/News.vue";
import Contact from "./contact/Contact.vue";

export default {
  components: {
    SendMail,
    Faq,
    News,
    Contact,
  },
  mounted() {
    const $footer = document.querySelector("#footer");
    window.fitContainer({
      $target: this.$el,
      excepts: [$footer],
    });
  },
};
</script>

<style scoped lang="scss"></style>
