<template>
  <section class="portfolio l-section">
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
          <section class="swiper-slide" v-for="categorys in datas">
            <ul class="portfolio-list" v-if="categorys">
              <li class="portfolio-list__item" v-for="item in categorys">
                <div class="portfolio-list-thumb">
                  <img class="thumb" :src="item.imgUrl" @error="onError" alt="" />
                </div>
                <div class="portfolio-list-info">
                  <p class="tag" :data-type="item.ib_type_name">{{ item.ib_type_name }}</p>
                  <p class="tit clamp-1">{{ item.ib_title }}</p>
                  <p class="desc clamp-2">{{ item.ib_content }}</p>
                </div>
              </li>
            </ul>
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
      categorys: ["All", "Report", "Case Study", "View"],
      datas: null,
    };
  },
  created() {
    this.getData(() => {
      this.appendSwiper();
    });
  },
  methods: {
    /**
     *
     * API request
     *
     */
    getData(_callback) {
      axios
        .all([
          axios.post(`${SERVER.api}/esgSystem/insight/getInsightInfo?ib_type=0`),
          axios.post(`${SERVER.api}/esgSystem/insight/getInsightInfo?ib_type=1`),
          axios.post(`${SERVER.api}/esgSystem/insight/getInsightInfo?ib_type=2`),
          axios.post(`${SERVER.api}/esgSystem/insight/getInsightInfo?ib_type=3`),
        ])
        .then(
          axios.spread((..._response) => {
            this.datas = _response.map((_list) => {
              return _list.data.insightInfo.filter((_item) => (_item.imgUrl = SERVER.api + _item.imgUrl));
            });

            if (_callback) _callback();
          })
        )
        .catch((_error) => {
          console.log(_error);
        });
    },

    /**
     *
     * swiper 생성
     *
     */
    appendSwiper() {
      const $swiper = this.$el.querySelector(".swiper");

      this.swiper = new Swiper($swiper, {
        allowTouchMove: false,
        // autoHeight: true,
        effect: "fade",
        pagination: {
          el: this.$el.querySelector(".swiper-pagination"),
          clickable: true,
          renderBullet: (index, className) => {
            return `<button class=" ${className} js-anchor" data-anchor=".js-anchor-tab-point" data-category="${this.categorys[index]}" type="button" ><span class="txt">${this.categorys[index]}</span></button>`;
          },
        },
      });
    },
    onError(e) {
      e.target.src = require("@/assets/images/insight/onerror_portfolio_thumb.jpg");
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  padding-bottom: 5rem;
  background-color: #f0f4f6;
  &-list {
    $list: &;

    padding: 5rem;
    &__item {
      display: flex;
      align-items: center;
      overflow: hidden;
      height: 27rem;
      margin-bottom: 3rem;
      padding: 0 3rem;
      border-radius: $G-box-radius;
      background-color: #fff;
      box-shadow: 0 0.2rem 1em rgba(7, 7, 7, 0.08);
      #{$list}-thumb {
        margin-right: 3rem;
        .thumb {
          width: 31rem;
          height: 21rem;
          border-radius: 0.6em;
        }
      }
      #{$list}-info {
        width: 75rem;
        .tag {
          display: inline-flex;
          align-items: center;
          height: 3rem;
          padding: 0 2.4rem;
          margin-bottom: 1.5rem;
          border-radius: 2em;
          font-size: 1.5rem;
          font-weight: bold;
          line-height: 1em;
          color: #fff;
          background-color: #ccc;

          $types: "Report" #5064ac, "Case Study" #7664df, "View" #4dcdd6;

          @each $type, $color in $types {
            &[data-type="#{$type}"] {
              background-color: $color;
            }
          }
        }
        .tit {
          margin-bottom: 2.2rem;
          font-size: 3.3rem;
          font-weight: bold;
          line-height: 1em;
        }
        .desc {
          font-size: 2.5rem;
          font-weight: 500;
          color: #808080;
          word-break: keep-all;
        }
      }
      @for $i from 0 through 3 {
        &:nth-child(#{$i}) {
          opacity: 0;
          transform: translateY(-20%);

          .swiper-slide-active & {
            opacity: 1;
            transform: translateY(0);
            @include transition($time: 1, $delay: #{$i * 0.1});
          }
        }
      }
    }
  }
}
:deep() .swiper {
  margin: 0 -5rem;
  &-pagination {
    all: unset;
    display: flex;
    justify-content: space-between;
    width: auto !important;
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
      margin: 0 0.8rem !important;
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
        box-shadow: 0 0.3rem 1.7rem rgba(46, 43, 176, 0.4);
        &::after {
          right: -10px;
          background: $color;
        }
        &::before {
          @include transition($time: 0.25);
        }
      }
      &[data-category="All"] {
        display: none;
      }
    }
  }
  &-slide {
    opacity: 0;
  }
}
</style>
