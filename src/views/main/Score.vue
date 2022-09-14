<template>
  <section class="score pt-110 js-is-appear">
    <div class="inner">
      <ScoreText></ScoreText>
      <SwiperMain :inBoundData="outBoundData"></SwiperMain>
      <div class="text-center mb-65">
        <LinkJoin class="btn-round-grad btn-round-grad--xlg btn-round-grad--is-shadow">회원가입하고 더 많은 기업정보 확인하기</LinkJoin>
      </div>
    </div>
    <img class="score-bg" src="@/assets/images/main/score_bg.png" alt="" />
  </section>
</template>

<script>
import ScoreText from "./ScoreText.vue";
import SwiperMain from "../../components/etc/SwiperMain.vue";
import LinkJoin from "../../components/buttons/linkJoin.vue";

export default {
  name: "score",
  components: {
    ScoreText,
    SwiperMain,
    LinkJoin,
  },
  data() {
    return {
      outBoundData: [
        {
          title: "1. 기업 선택하기",
          img: require("@/assets/images/sample_slide/sample1.png"),
        },
        {
          title: "2. 기업 선택하기",
          img: require("@/assets/images/sample_slide/sample2.png"),
        },
        {
          title: "3. 기업 선택하기",
          img: require("@/assets/images/sample_slide/sample3.png"),
        },
        {
          title: "4. 기업 선택하기",
          img: require("@/assets/images/sample_slide/sample4.png"),
        },
        {
          title: "5. 기업 선택하기",
          img: require("@/assets/images/sample_slide/sample5.png"),
        },
      ],
    };
  },
};
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
