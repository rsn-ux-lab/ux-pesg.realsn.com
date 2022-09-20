<template>
  <section class="value pt-110">
    <div class="inner">
      <ValueText></ValueText>
      <SwiperMain :inBoundData="outBoundData"></SwiperMain>
      <div class="text-center mb-65">
        <LinkJoin class="btn-round-grad btn-round-grad--xlg btn-round-grad--is-shadow">회원가입하고 더 많은 기업정보 확인하기</LinkJoin>
      </div>
    </div>
    <img class="value-bg" src="@/assets/images/main/value_bg.png" alt="" />
  </section>
</template>

<script>
import ValueText from "./ValueText.vue";
import SwiperMain from "../../components/etc/SwiperMain.vue";
import LinkJoin from "../../components/buttons/LinkJoin.vue";

export default {
  name: "value",
  components: {
    ValueText,
    SwiperMain,
    LinkJoin,
  },
  data() {
    return {
      outBoundData: [
        {
          title: "1. 해당 기업 주가 RSI 노출",
          img: require("@/assets/images/sample_slide/sample1.png"),
        },
        {
          title: "2. 해당 기업 주가 RSI 노출",
          img: require("@/assets/images/sample_slide/sample2.png"),
        },
        {
          title: "3. 해당 기업 주가 RSI 노출",
          img: require("@/assets/images/sample_slide/sample3.png"),
        },
        {
          title: "4. 해당 기업 주가 RSI 노출",
          img: require("@/assets/images/sample_slide/sample4.png"),
        },
        {
          title: "5. 해당 기업 주가 RSI 노출",
          img: require("@/assets/images/sample_slide/sample5.png"),
        },
      ],
    };
  },
};
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
