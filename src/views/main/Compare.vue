<template>
  <section class="compare pt-110 js-is-appear">
    <div class="inner">
      <CompareText></CompareText>
      <SwiperMain :inBoundData="outBoundData"></SwiperMain>
      <div class="text-center mb-65">
        <LinkJoin class="btn-round-grad btn-round-grad--xlg btn-round-grad--is-shadow">회원가입하고 더 많은 기업정보 확인하기</LinkJoin>
      </div>
    </div>
  </section>
</template>

<script>
import CompareText from "./CompareText.vue";
import SwiperMain from "../../components/etc/SwiperMain.vue";
import LinkJoin from "../../components/buttons/linkJoin.vue";

export default {
  name: "compare",
  components: {
    CompareText,
    SwiperMain,
    LinkJoin,
  },
  data() {
    return {
      outBoundData: [
        {
          title: "1. 검색된 기업 선택",
          img: require("@/assets/images/sample_slide/sample1.png"),
        },
        {
          title: "2. 검색된 기업 선택",
          img: require("@/assets/images/sample_slide/sample2.png"),
        },
        {
          title: "3. 검색된 기업 선택",
          img: require("@/assets/images/sample_slide/sample3.png"),
        },
        {
          title: "4. 검색된 기업 선택",
          img: require("@/assets/images/sample_slide/sample4.png"),
        },
        {
          title: "5. 검색된 기업 선택",
          img: require("@/assets/images/sample_slide/sample5.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.compare:deep() {
  overflow: hidden;
  position: relative;
  background: url("~@/assets/images/main/compare_bg.png") 0 0 no-repeat;
  background-size: cover;
  .swiper--title {
    .swiper-slide {
      color: #fff;
    }
  }
}
</style>
