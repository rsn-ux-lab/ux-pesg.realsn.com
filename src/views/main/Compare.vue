<template>
  <section class="compare pt-110">
    <div class="inner">
      <CompareText></CompareText>
      <CompareSwiper></CompareSwiper>
      <div class="text-center mb-65">
        <a href="//esgdevel.realsn.com/esgSystem/member/register" class="btn btn-round-grad btn-round-grad--xlg btn-round-grad--is-shadow" target="_blank">
          <span class="txt">회원가입하고 더 많은 기업정보 확인하기</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import CompareText from "./CompareText.vue";
import CompareSwiper from "./CompareSwiper.vue";
export default { components: { CompareText, CompareSwiper } };
</script>

<style lang="scss" scoped>
.compare {
  overflow: hidden;
  position: relative;
  background: url("~@/assets/images/main/compare_bg.png") 0 0 no-repeat;
  background-size: cover;
}
</style>
