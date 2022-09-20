<template>
  <main id="container" role="main">
    <h2 class="visually-hidden">insight</h2>
    <SectionSubTitle :style="{ backgroundImage: `url(${require('@/assets/images/insight/sub-title_bg.jpg')})` }">
      <template slot="title">P.ESG Insight</template>
    </SectionSubTitle>

    <!-- 프로젝트 소개 -->
    <Portfolio></Portfolio>
    <!-- //프로젝트 소개 -->
  </main>
</template>

<script>
import SectionSubTitle from "../components/etc/SectionSubTitle.vue";
import Portfolio from "./insight/Portfolio.vue";

export default {
  components: {
    SectionSubTitle,
    Portfolio,
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

<style lang="scss" scoped></style>
