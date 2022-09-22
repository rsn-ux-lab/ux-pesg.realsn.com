<template>
  <section class="news l-section">
    <div class="inner">
      <h3 class="l-section__title">주요 소식</h3>
      <ul class="news-list">
        <li class="news-list__item" v-for="item in this.option.currentDatas">
          <a class="news-list__link" :href="`${item.mn_url}`" target="_blank">
            <span class="txt clamp-1">{{ item.mn_title }}</span>
            <span class="date">{{ item.post_date }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";
// import datas from "../../assets/json/news.json";

export default {
  name: "news",
  data() {
    return {
      option: {
        totalDatas: null,
        perPage: 4, //한 페이지에 나타낼 글 수
        pageCount: 4, //페이징에 나타낼 페이지 수
        currentPage: 1, //현재 페이지
        currentDatas: null,
      },
    };
  },
  created() {
    this.getData(() => {
      this.setCurrentPage();
    });
  },
  updated() {
    // this.getData(() => {
    //   this.setCurrentPage();
    // });
  },
  methods: {
    /**
     *
     * API request
     *
     */
    getData(_callback) {
      axios
        .all([axios.post(`${SERVER.api}/esgSystem/contact/news/getMainNewsInfo?pageNum=0`)])
        .then(
          axios.spread((..._response) => {
            this.option.totalDatas = _response[0].data.newsInfo;

            if (_callback) _callback();
          })
        )
        .catch((_error) => {
          console.log(_error);
        });
    },
    setCurrentPage() {
      const currentIdx = this.option.currentPage - 1;
      const slice = this.option.pageCount;
      const newArr = this.option.totalDatas.division(slice)[currentIdx].filter((_arr) => {
        return (_arr.mn_url = _arr.mn_url.search(/\/\//) === -1 ? "//" + _arr.mn_url : _arr.mn_url);
      });

      this.option.currentDatas = newArr;
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  background-color: #f8fafc;
  &-list {
    &:empty {
      &::after {
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
}
</style>
