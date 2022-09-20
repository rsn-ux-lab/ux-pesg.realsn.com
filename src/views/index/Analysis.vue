<template>
  <section class="analysis">
    <div class="inner">
      <img class="analysis-thumb" src="@/assets/images/index/Infographics_thumb/thumb5.jpg" alt="" />
      <div class="analysis-service">
        <h3 class="analysis-service__title"><Logo />Analysis Service</h3>
        <p class="analysis-service__description">우리는 P.ESG 데이터를 활용하여 차별화된 분석서비스를 제공합니다.</p>
        <ul class="analysis-service-list">
          <li class="analysis-service-list__item">
            <p class="tit">ESG 마케팅 성과</p>
            <p class="desc">기업 재무성과에 영향을 주는<br />P.ESG 지표 관리방안 도출</p>
          </li>
          <li class="analysis-service-list__item">
            <p class="tit">ESG 투자자 관계</p>
            <p class="desc">주가에 영향을 주는 ESG<br />지표 관리방안 도출</p>
          </li>
          <li class="analysis-service-list__item">
            <p class="tit">ESG 이슈관리</p>
            <p class="desc">기업 공중들의 ESG<br />관심 이슈 관리</p>
          </li>
          <li class="analysis-service-list__item">
            <p class="tit">ESG 리스크 진단</p>
            <p class="desc">섹터 내 기업 ESG 리스크 요소<br />감지 및 위기 환경 검토</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "../../components/icons/Logo.vue";

export default {
  name: "analysis",
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.analysis {
  overflow: hidden;
  padding: 10rem 0 20rem;
  .inner {
    min-width: 160rem;
  }
  &-thumb {
    display: block;
    width: 108rem;
    height: auto;
    margin: 0 auto;
  }
  &-service {
    padding-top: 25rem;
    &__title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5rem;
      font-size: 4.4rem;
      font-weight: bold;
      .logo {
        font-size: 6.5rem;
        margin-right: 3rem;
      }
    }
    &__description {
      margin-bottom: 5rem;
      font-size: 3.5rem;
      font-weight: bold;
      text-align: center;
    }
    &-list {
      display: flex;
      justify-content: space-around;
      border-top: 0.2rem solid #8f93a3;
      &__item {
        padding-top: 5rem;
        text-align: center;
        word-break: keep-all;
        .tit {
          font-size: 3.5rem;
          font-weight: bold;
          color: #0283f2;
        }
        .desc {
          font-size: 2.5rem;
          font-weight: 500;
          color: #666666;
        }
      }
    }
  }
}
</style>
