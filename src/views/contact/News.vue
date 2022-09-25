<template>
  <section class="news l-section">
    <div class="inner">
      <h3 class="l-section__title">주요 소식</h3>
      <div data-loding-spinner="true">
        <ul class="news-list">
          <li class="news-list__item" v-for="item in this.currentDatas">
            <a class="news-list__link" :href="`${item.mn_url}`" target="_blank">
              <span class="txt clamp-1">{{ item.mn_title }}</span>
              <span class="date">{{ item.post_date }}</span>
            </a>
          </li>
        </ul>
        <ol class="news-pagination" :data-page-current="pageCurrentNum">
          <li class="news-pagination__item news-pagination__item--prev" :class="{ 'is-disable': !isPagePrev }">
            <button class="news-pagination__btn" @click="getCurrentData(--pageCurrentNum * pageCount - (pageCount - 1))" type="button">이전</button>
          </li>
          <li class="news-pagination__item" v-for="num in currentPages" :ref="setItemRef">
            <button class="news-pagination__btn" @click="getCurrentData(num)">
              {{ num }}
            </button>
          </li>
          <li class="news-pagination__item news-pagination__item--next" :class="{ 'is-disable': !isPageNext }">
            <button class="news-pagination__btn" @click="getCurrentData(pageCurrentNum++ * pageCount + 1)" type="button">다음</button>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "news",
  data() {
    return {
      itemRefs: [],
      currentDatas: null,
      itemCount: 4, //한 페이지에 나타낼 글 수
      itemCurrentNum: null, // 현재 보여지는 페이지 번호
      pageTotals: null,
      pageCount: 4, //페이징에 나타낼 button 수
      pageCurrentNum: 1, //현재 페이징 리스트 번호
      get isPagePrev() {
        return this.pageTotals === null ? false : this.pageCurrentNum > 1;
      },
      get isPageNext() {
        return this.pageTotals === null ? false : this.pageCurrentNum < this.pageTotals.length;
      },
      get currentPages() {
        return this.pageTotals === null ? null : this.pageTotals[this.pageCurrentNum - 1];
      },
    };
  },
  created() {
    this.getPageTotal();
    this.getCurrentData(this.pageCurrentNum);
  },
  methods: {
    /* API request - 전체글 개수  */
    getPageTotal() {
      axios
        .get(`${SERVER.api}/esgSystem/contact/news/getMainNewsInfoTotalCnt`)
        .then((_response) => {
          const totalCount = _response.data.newsInfoTotalCnt;

          this.pageTotals = Array.from({ length: totalCount / this.itemCount }, (v, i) => i + 1).division(this.pageCount);
        })
        .catch((_error) => {
          console.log(_error);
        });
    },
    /* API request - 글목록  */
    getCurrentData(_pageNum) {
      axios
        .post(`${SERVER.api}/esgSystem/contact/news/getMainNewsInfo?pageNum=${_pageNum - 1}`)
        .then((_response) => {
          this.currentDatas = _response.data.newsInfo;
          this.itemCurrentNum = _pageNum;
        })
        .catch((_error) => {
          console.log(_error);
        })
        .finally(() => {
          this.$el.querySelector("[data-loding-spinner]").setAttribute("data-loding-spinner", false);
        });
    },
    setItemRef(el) {
      this.itemRefs.push(el);
    },
  },
  updated() {
    /* pagination - active toggle */
    const $lis = this.itemRefs;

    $lis.forEach((_$li) => {
      if (Boolean(_$li) === false) return;

      const $btn = _$li.querySelector("button");
      const btnNum = Number($btn.innerHTML);
      const itemNum = this.itemCurrentNum;

      if (btnNum === itemNum) {
        _$li.classList.add("is-active");
      } else {
        _$li.classList.remove("is-active");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.news {
  background-color: #f8fafc;
  &-list {
    margin-bottom: 5.2rem;
    &:empty {
      &::after {
        [data-loding-spinner="false"] & {
          content: "데이터가 없습니다.";
          display: flex;
          justify-content: center;
          align-items: center;
          height: 10rem;
          padding: 0 3.5rem;
          font-size: 2.3rem;
          font-weight: bold;
          color: #ccc;
          border-radius: $G-box-radius;
          background-color: #fff;
          box-shadow: 0 0 0.8rem rgba(7, 7, 7, 0.08);
        }
      }
    }
    &__item {
      padding: 1rem 0;
    }
    &__link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10rem;
      padding: 0 3.5rem;
      font-size: 2.3rem;
      color: #505050;
      border-radius: $G-box-radius;
      background-color: #fff;
      box-shadow: 0 0 0.8rem rgba(7, 7, 7, 0.08);
      &:hover {
        color: #050505;
      }
      .txt {
        width: 85%;
      }
      .date {
        font-size: 2rem;
        color: #a3a3a3;
      }
    }
  }
  &-pagination {
    $p: &;

    display: flex;
    justify-content: center;
    &__item {
      padding: 0 1rem;
    }
    &__btn {
      font-size: 2rem;
      font-weight: 500;
      color: #b4b4b4;
      @include transition;

      .is-active & {
        color: #6794f7;
      }
      .is-disable & {
        pointer-events: none;
        opacity: 0.3;
      }
    }
  }
}
</style>
