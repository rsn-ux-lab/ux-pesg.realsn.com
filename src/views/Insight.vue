<template>
  <main id="container" role="main">
    <h2 class="visually-hidden">insight</h2>
    <SectionSubTitle :style="{ backgroundImage: `url(${require('@/assets/images/insight/sub-title_bg.jpg')})` }">
      <template slot="title">P.ESG Insight</template>
    </SectionSubTitle>
    <List />
  </main>
</template>

<script>
import SectionSubTitle from "../components/etc/SectionSubTitle.vue";
import List from "./insight/List";

export default {
  components: {
    SectionSubTitle,
    List,
  },
  mounted() {
    const $footer = document.querySelector("#footer");

    window.fitContainer({
      $target: this.$el,
      excepts: [$footer],
    });
  },
};
</script>

<style lang="scss" scoped></style>
