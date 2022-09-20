<template>
  <section class="l-section">
    <div class="inner">
      <h3 class="l-section__title">기업 ESG 소비자와 함께가야 성공합니다</h3>
      <p class="l-section__description">
        기업 ESG역량이 기업가치에 반영되기 위해서는 소비자 인식이 강화되어야 합니다.<br />
        아직, 많은 기업들의 ESG는 우리에게 인식(Perceived)되고 있지 못합니다.
      </p>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>

      <!-- swiper -->
      <div class="swiper">
        <div class="swiper-wrapper">
          <section class="swiper-slide" v-for="item in this.categorys">
            {{ item }}
            <!-- {{ category.code_name }} -->
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "portfolio",
  data() {
    return {
      allData: null,
      categorys: null,
      totals: null,
    };
  },
  created() {
    this.getData(() => {
      this.appendSwiper();
    });
  },
  mounted() {},
  methods: {
    getData(_callback) {
      axios
        .all([axios.get(`${SERVER.api}/esgSystem/insight/getInsightTypeCode`), axios.post(`${SERVER.api}/esgSystem/insight/getInsightInfo`)])
        .then(
          axios.spread((res1, res2) => {
            this.categorys = [...[{ code_name: "all" }], ...res1.data.insightCode];
            this.totals = res2.data.insightInfo;
            this.allData = { categorys: this.categorys, totals: this.totals };

            console.log(this.allData);

            if (_callback) _callback();
          })
        )
        .catch((_error) => {
          console.log(_error);
        });
    },
    appendSwiper() {
      /* swiper */
      const $swiper = this.$el.querySelector(".swiper");

      this.swiper = new Swiper($swiper, {
        allowTouchMove: false,
        // autoHeight: true,
        // effect: "fade",
        pagination: {
          el: this.$el.querySelector(".swiper-pagination"),
          clickable: true,
          renderBullet: (index, className) => {
            return `<button class=" ${className} js-anchor" data-anchor=".js-anchor-tab-point" data-category="${this.categorys[index].code_name}" type="button" ><span class="txt">${this.categorys[index].code_name}</span></button>`;
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
:deep() .swiper {
  &-pagination {
    all: unset;
    display: flex;
    justify-content: space-between;
    margin: 0 -0.8rem;
    &-bullet {
      $color: #325cf3;

      overflow: hidden;
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      position: relative;
      z-index: 1;
      width: auto;
      height: 9rem;
      margin: 0 0.8rem;
      padding: 0 2.8rem;
      font-size: 2.6rem;
      color: $color;
      border: 0.2rem solid $color;
      border-radius: 2em;
      font-weight: bold;
      color: $color;
      background-color: #fff;
      opacity: 1;
      @include transition;

      &::after {
        content: "";
        position: absolute;
        top: -10px;
        bottom: -10px;
        left: -10px;
        right: 100%;
        z-index: -1;

        @include transition;
      }
      &:hover,
      &-active {
        color: #fff;
        &::after {
          right: -10px;
          background: $color;
        }
        &::before {
          @include transition($time: 0.25);
        }
      }
      &[data-category="all"] {
        display: none;
      }
    }
  }
}
</style>
