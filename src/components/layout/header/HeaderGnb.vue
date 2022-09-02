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
  mounted() {
    /**
     *
     * GNB Active
     *
     */

    const $linkGnbs = document.querySelectorAll(".header-gnb__link");
    const links = [...$linkGnbs].map((_el) => _el.getAttribute("href"));

    function addClass() {
      const path = location.pathname;
      const idx = links.indexOf(path);

      $linkGnbs[idx].classList.add("is-active");
    }
    addClass();

    $linkGnbs.forEach((_each) => {
      _each.addEventListener("click", function () {
        addClass();
      });
    });
  },
};
</script>

<style lang="scss">
.header-gnb {
  display: inline-flex;
  flex: 1;
  &__link {
    margin-right: 40px;
    font-family: "Jost";
    font-size: 1.8rem;
    &.is-active {
      color: $G-colorPrimary;
    }
  }
}
</style>
