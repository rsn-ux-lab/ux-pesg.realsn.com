<template>
  <section class="score pt-110">
    <div class="inner">
      <ScoreText></ScoreText>
      <ScoreSwiper></ScoreSwiper>
      <div class="text-center mb-65">
        <a href="//esgdevel.realsn.com/esgSystem/member/register" class="btn btn-round-grad btn-round-grad--xlg btn-round-grad--is-shadow" target="_blank">
          <span class="txt">회원가입하고 더 많은 기업정보 확인하기</span>
        </a>
      </div>
    </div>
    <img class="score-bg" src="@/assets/images/main/score_bg.png" alt="" />
  </section>
</template>

<script>
import ScoreText from "./ScoreText.vue";
import ScoreSwiper from "./ScoreSwiper.vue";
export default { components: { ScoreText, ScoreSwiper } };
</script>

<style lang="scss" scoped>
.score {
  overflow: hidden;
  position: relative;
  &-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: auto;
    height: 54rem;
    opacity: 0.15;
  }
}
</style>
