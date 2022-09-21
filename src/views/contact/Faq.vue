<template>
  <section class="faq l-section">
    <div class="inner">
      <h3 class="l-section__title">자주 묻는 질문</h3>
      <ul class="faq-list">
        <li class="faq-list__item" v-for="item in datas">
          <section class="faq-list-wrapper">
            <header class="faq-list-header">
              <button class="btn btn-tit clamp-1" type="button">{{ item.if_title }}</button>
            </header>
            <main class="faq-list-body">
              <div class="faq-list-body__textarea">{{ item.if_content }}</div>
            </main>
          </section>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "faq",
  data() {
    return {
      datas: null,
    };
  },
  created() {
    this.getData();
  },
  updated() {
    this.setAccordion();
  },
  methods: {
    /**
     *
     * API request
     *
     */
    getData(_callback) {
      axios
        .all([axios.get(`${SERVER.api}/esgSystem/contact/faq/getFaqInfo`)])
        .then(
          axios.spread((..._response) => {
            this.datas = _response[0].data.faqInfo;

            if (_callback) _callback();
          })
        )
        .catch((_error) => {
          console.log(_error);
        });
    },

    /**
     *
     * 아코디언 메뉴 활성화
     *
     */
    setAccordion() {
      const $item = this.$el.querySelectorAll(".faq-list__item");

      $item.forEach((_arr) => {
        const option = {
          $wrapper: _arr.querySelector("section"),
          $header: _arr.querySelector("header"),
          $body: _arr.querySelector("main"),
        };

        // after resize
        window.onLoadResize(() => {
          option.headerH = option.$header.offsetHeight;
          option.bodyH = option.$body.offsetHeight;
          option.activeH = option.headerH + option.bodyH;

          _arr.classList.contains("is-active")
            ? (option.$wrapper.style.height = `${option.activeH}px`)
            : (option.$wrapper.style.height = `${option.headerH}px`);
        });

        // transition
        option.$wrapper.style.transition = "height 0.25s cubic-bezier(0.5, 0, 0.5, 1)";

        // click event
        _arr.querySelector("header button").addEventListener("click", function () {
          _arr.classList.contains("is-active")
            ? (option.$wrapper.style.height = `${option.headerH}px`)
            : (option.$wrapper.style.height = `${option.activeH}px`);
          _arr.classList.toggle("is-active");
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.faq {
  background: #746bf0 url("~@/assets/images/contact/faq_bg.jpg") center center no-repeat;
  background-size: 100% auto;
  .l-section__title {
    color: #fff;
  }
  &-list {
    $headerH: 10rem;

    &:empty {
      &::after {
        content: "데이터가 없습니다.";
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: $headerH;
        font-size: 2.4rem;
        color: #ccc;
        background-color: #fff;
        border-radius: $G-box-radius;
      }
    }
    &__item {
      padding: 1rem 0;
    }
    &-wrapper {
      overflow: hidden;
      background-color: #fff;
      border-radius: $G-box-radius;
    }
    &-header {
      position: relative;
      .btn-tit {
        justify-content: flex-start;
        height: $headerH;
        width: 90%;
        padding-left: 4rem;
        font-size: 2.6rem;
        font-weight: bold;
        color: #586afa;
        text-align: left;
        @include transition($tgs: color);

        &:hover {
          color: $G-color-active;
        }
        &::before {
          content: "Q.";
          display: inline-block;
          margin-right: 0.5rem;
        }
        &:empty {
          &::before {
            color: #ccc;
          }
          &::after {
            content: "제목이 없습니다.";
            color: #ccc;
          }
        }
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 3.5rem;
        width: 1.5rem;
        height: 1.5rem;
        background-image: svgIcon(triangle-down, 5184F6);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100%;
        transform: translateY(-50%);
        transform-origin: 50% 25%;
        .is-active & {
          transform: rotate(180deg);
        }
      }
    }
    &-body {
      overflow: hidden;
      border-top: 1px solid #c4c4c4;
      &__textarea {
        padding: 4rem 6rem;
        font-size: 2.4rem;
        line-height: 2em;
        word-break: keep-all;
        &:empty {
          &::after {
            content: "내용이 없습니다.";
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>
