<template>
  <main id="container" role="main">
    <SectionSubTitle :style="{ backgroundImage: `url(${require('@/assets/images/index/sub-title_bg.jpg')})` }">
      <template slot="title">P.ESG 지표소개</template>
    </SectionSubTitle>
    <section class="gallery">
      <div class="inner">
        <h2 class="gallery__title">P.ESG는 빅데이터로 소비자 인식요인에 접근한 지표입니다.</h2>
        <p class="gallery__desc">
          P.ESG는 기업 ESG에 대한 우리 사회의 반응에 측정하여<br />
          기업 ESG 활동의 목적이 소비자 인식 효과에 있음을 나타내고자 합니다.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import SectionSubTitle from "../components/etc/SectionSubTitle.vue";

export default {
  components: {
    SectionSubTitle,
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

<style lang="scss" scoped>
#container {
  background-color: #f1f7fc;
}
</style>
