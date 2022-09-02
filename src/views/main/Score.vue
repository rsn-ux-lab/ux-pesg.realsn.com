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
  </section>
</template>

<script>
import ScoreText from "./ScoreText.vue";
import ScoreSwiper from "./scoreSwiper.vue";
export default { components: { ScoreText, ScoreSwiper } };
</script>

<style lang="scss"></style>
