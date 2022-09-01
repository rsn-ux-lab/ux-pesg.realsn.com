<template>
  <header id="header" class="header" role="banner">
    <div class="inner">
      <h1 class="header-h1">
        <a href="/" class="header-h1__link">
          <img class="header-h1__logo" src="@/assets/images/common/logo.png" alt="P-ESG" />
        </a>
      </h1>
      <nav class="header-gnb">
        <router-link class="header-gnb__link" to="/">index</router-link>
        <router-link class="header-gnb__link" to="/dashboard">Dashboard</router-link>
        <router-link class="header-gnb__link" to="/insight">Insight</router-link>
        <router-link class="header-gnb__link" to="/contact">Contact</router-link>
      </nav>
      <div class="header-utill">
        <a href="https://esgdevel.realsn.com" target="_blank"><span class="txt">로그인</span></a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 8.4rem;
  .inner {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  &-h1 {
    display: inline-flex;
    justify-content: start;
    flex-basis: 220px;
  }
  &-gnb {
    display: inline-flex;
    flex: 1;
  }
  &-utill {
    display: inline-flex;
    justify-content: end;
    flex-basis: 240px;
  }
}
</style>

<script>
export default {
  mounted() {
    $(function () {
      // DOCUMENT READY...
      /*
        ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        */ (function () {
        //
      })(); /*
        ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        */
    }); // DOCUMENT READY...
  },
};
</script>
