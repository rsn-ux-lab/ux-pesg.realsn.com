<template>
  <nav class="header-gnb">
    <router-link class="header-gnb__link" to="/index">Index</router-link>
    <router-link class="header-gnb__link" to="/dashboard">Dashboard</router-link>
    <router-link class="header-gnb__link" to="/insight">Insight</router-link>
    <router-link class="header-gnb__link" to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: "header-gnb",
};
</script>

<style lang="scss">
.header-gnb {
  display: inline-flex;
  flex: 1;
  &__link {
    margin-right: 4rem;
    font-family: "Jost";
    font-size: 1.8rem;
    &:hover,
    &.router-link-active {
      color: $G-color-primary;
    }
  }
}
</style>
