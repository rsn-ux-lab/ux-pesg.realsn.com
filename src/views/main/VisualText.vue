<template>
  <div class="visual-text">
    <h2 class="visual-text__title">
      <span class="ff-Jost">P.ESG</span>로 우리 기업의<br />
      <span class="ff-Jost">ESG</span> 가치를 바로 확인하세요
    </h2>
    <p class="visual-text__desc">
      <span class="ff-Jost">P.ESG</span>는 웹을 통해 공중<span class="ff-Jost">(Public)</span> 반응데이터를 실시간 수집하여<br />
      기업의 <span class="ff-Jost">ESG</span> 역량<span class="ff-Jost">(Performance)</span>를 감지<span class="ff-Jost">(Perceive)</span>하고 평가하는
      <span class="ff-Jost">Index</span>입니다.
    </p>
    <LinkJoin class="btn-round-grad btn-round-grad--lg mr-10">무료회원 가입하기</LinkJoin>
    <router-link class="btn btn-round-border btn-round-border--lg btn-round-border--black pl-60 pr-60" to="/contact">
      <span class="txt">문의하기</span>
    </router-link>
  </div>
</template>

<script>
import LinkJoin from "../../components/buttons/linkJoin.vue";

export default {
  name: "visual-text",
  components: {
    LinkJoin,
  },
};
</script>

<style lang="scss">
.visual-text {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  &__title {
    margin-bottom: 2rem;
    font-size: 5.4rem;
    font-weight: 700;
    letter-spacing: -0.035em;
  }
  &__desc {
    margin-bottom: 11rem;
    font-size: 2rem;
    font-weight: 500;
    color: #514888;
  }
}
</style>
