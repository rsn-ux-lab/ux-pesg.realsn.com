<template>
  <header id="header" class="header" role="banner">
    <div class="inner">
      <h1 class="header-h1">
        <a href="/" class="header-h1__link">
          <img class="header-h1__logo" src="@/assets/images/common/logo.png" alt="P-ESG" />
        </a>
      </h1>
      <nav class="header-gnb">
        <router-link class="header-gnb__link" to="/">Index</router-link>
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

<style lang="scss">
.header {
  height: 8.4rem;
  // background-color: $G-colorPrimary;
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
  &-gnb {
    display: inline-flex;
    flex: 1;
    &__link {
      margin-right: 40px;
      font-family: "Jost";
      font-size: 1.8rem;
      &--is-active {
        color: $G-colorPrimary;
      }
    }
  }
  &-utill {
    display: inline-flex;
    justify-content: flex-end;
    flex-basis: 240px;
  }
}
</style>

<script></script>
