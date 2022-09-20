<template>
  <main id="container" role="main">
    <h2 class="visually-hidden">index</h2>
    <SectionSubTitle :style="{ backgroundImage: `url(${require('@/assets/images/index/sub-title_bg.jpg')})` }">
      <template slot="title">P.ESG 지표소개</template>
    </SectionSubTitle>
    <SectionOnethumbnail :thumb="require('@/assets/images/index/Infographics_thumb/thumb1.jpg')">
      <template slot="title">우리는 Web에서 빅데이터를 모아<br />기업 ESG 노출 활동을 분석하는 새로운 Index를 개발했습니다.</template>
      <template slot="description">P.ESG는 웹 상의 기업 ESG 이슈를 자동수집, 딥러닝 AI로 ESG를 분류하고 평가합니다.</template>
    </SectionOnethumbnail>
    <SwiperGraph></SwiperGraph>
    <Analysis></Analysis>
  </main>
</template>

<script>
import SectionSubTitle from "../components/etc/SectionSubTitle.vue";
import SectionOnethumbnail from "../components/etc/SectionOneThumbnail.vue";
import SwiperGraph from "./index/SwiperGraph.vue";
import Analysis from "./index/Analysis.vue";

export default {
  components: {
    SectionSubTitle,
    SectionOnethumbnail,
    SwiperGraph,
    Analysis,
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
