<template>
  <main id="container" role="main">
    <h2 class="visually-hidden">dashboard</h2>

    <!-- 서브타이틀 -->
    <SectionSubTitle :style="{ backgroundImage: `url(${require('@/assets/images/dashboard/sub-title_bg.jpg')})` }">
      <template slot="title">P.ESG Dashboard</template>
    </SectionSubTitle>
    <!-- //서브타이틀 -->

    <!-- 대시보드 비교 -->
    <SectionOneThumbnail :thumb="require('@/assets/images/sample_slide/sample3.png')">
      <template slot="title">국내 상장기업의 P.ESG 점수를 한눈에 비교하세요 </template>
      <template slot="description">
        대시보드 플랫폼을 통해 주요 코스피 및 코스닥 기업의 과거 및 현재 ESG 데이터를<br />
        AI 알고리즘을 통해 실시간으로 수집하고 분류하고 있습니다.<br />
        해당 대시보드를 통해 우리는 기업의 P-ESG 기초 분석을 수행하고 있습니다.
      </template>
      <template slot="button">
        <a class="btn btn-round-grad btn-round-grad--xlg" href="//esgdevel.realsn.com/" target="_blank">
          <span class="txt">P.ESG 대시보드 확인하기 </span>
        </a>
      </template>
    </SectionOneThumbnail>
    <!-- //대시보드 비교 -->

    <!-- 리포트 신청 -->
    <SectionOneThumbnail :thumb="require('@/assets/images/dashboard/report_thumb.jpg')">
      <template slot="title">P.ESG 리포트</template>
      <template slot="description">
        기업 맞춤형 P.ESG 분석 데이터를 담은 Web. Report를 제공합니다.<br />특히, 37개 P.ESG 지표를 월 단위로 분석하여 섬세한 SWOT 분석 결과를 제시합니다.
      </template>
      <template slot="button">
        <router-link class="btn btn-round-grad btn-round-grad--xlg" to="/contact?sendmail=report">
          <span class="txt">P.ESG 리포트 신청</span>
        </router-link>
      </template>
    </SectionOneThumbnail>
    <!-- //리포트 신청 -->

    <!-- 서비스 이용정책-->
    <Service></Service>
    <!-- //서비스 이용정책-->
  </main>
</template>

<script>
import SectionSubTitle from "../components/etc/SectionSubTitle.vue";
import SectionOneThumbnail from "../components/etc/SectionOneThumbnail.vue";
import Service from "./dashboard/Service.vue";

export default {
  components: {
    SectionSubTitle,
    SectionOneThumbnail,
    Service,
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
