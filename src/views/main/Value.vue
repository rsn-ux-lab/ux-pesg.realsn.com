<template>
  <section class="value pt-110">
    <div class="inner">
      <ValueText></ValueText>
      <ValueSwiper></ValueSwiper>
      <div class="text-center mb-65">
        <a href="//esgdevel.realsn.com/esgSystem/member/register" class="btn btn-round-grad btn-round-grad--xlg btn-round-grad--is-shadow" target="_blank">
          <span class="txt">회원가입하고 더 많은 기업정보 확인하기</span>
        </a>
      </div>
    </div>
    <img class="value-bg" src="@/assets/images/main/value_bg.png" alt="" />
  </section>
</template>

<script>
import ValueText from "./ValueText.vue";
import ValueSwiper from "./ValueSwiper.vue";
export default { components: { ValueText, ValueSwiper } };
</script>

<style lang="scss" scoped>
.value {
  overflow: hidden;
  position: relative;
  background-color: #fbfbfb;
  &-bg {
    position: absolute;
    left: 13.9rem;
    bottom: 8.5rem;
    width: auto;
    height: 68.6rem;
  }
}
</style>
