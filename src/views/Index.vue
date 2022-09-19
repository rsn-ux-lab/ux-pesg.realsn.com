<template>
  <main id="container" role="main">
    <SectionSubTitle :style="{ backgroundImage: `url(${require('@/assets/images/index/sub-title_bg.jpg')})` }">
      <template slot="title">P.ESG 지표소개</template>
    </SectionSubTitle>
    <section class="gallery">
      <div class="inner">
        <header class="gallery-header">
          <h2 class="gallery-header__title">우리는 Web에서 빅데이터를 모아<br />기업 ESG 노출 활동을 분석하는 새로운 Index를 개발했습니다.</h2>
          <p class="gallery-header__desc">P.ESG는 웹 상의 기업 ESG 이슈를 자동수집, 딥러닝 AI로 ESG를 분류하고 평가합니다.</p>
        </header>
        <main class="gallery-body">
          <button class="gallery-modal-button" :style="{ backgroundImage: `url(${require('@/assets/images/index/gallery_thumb/thumb1.jpg')})` }"></button>
        </main>
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
  .gallery {
    $g: &;

    &-header {
      padding-top: 10.5rem;
      &__title {
        font-size: 3.5rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 2rem;
      }
      &__desc {
        margin-bottom: 5.8rem;
        font-size: 2rem;
        color: #514888;
        text-align: center;
        font-weight: 500;
      }
    }
    &-body {
      padding-bottom: 6rem;
      .gallery-modal-button {
        overflow: hidden;
        position: relative;
        display: block;
        width: 108rem;
        height: 56rem;
        margin: 0 auto;
        border-radius: $G-box-radius;
        background-color: #d2d5d9;
        box-shadow: $G-box-shadow;
      }
    }
  }
}
</style>
