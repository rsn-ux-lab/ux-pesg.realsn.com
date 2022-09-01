<template>
  <header id="header" class="header" role="banner">
    <div class="inner">
      <h1 class="header-h1">
        <router-link class="header-h1__link" to="/">
          <img class="header-h1__logo" src="@/assets/images/common/logo.png" alt="P-ESG" />
        </router-link>
      </h1>
      <HeaderGnb />
      <div class="header-utill">
        <a href="https://esgdevel.realsn.com" target="_blank"><span class="txt">로그인</span></a>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  height: 8.4rem;
  .inner {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  &-h1 {
    display: inline-flex;
    justify-content: flex-start;
    flex-basis: 220px;
  }
  &-utill {
    display: inline-flex;
    justify-content: flex-end;
    flex-basis: 240px;
  }
}
</style>

<script>
import HeaderGnb from "./header/HeaderGnb";

export default {
  components: {
    HeaderGnb,
  },
  mounted() {
    //
  },
};
</script>
