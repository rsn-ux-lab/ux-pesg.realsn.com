<template>
  <main id="container" role="main">
    <SectionSubTitle :style="{ backgroundImage: `url(${require('@/assets/images/dashboard/sub-title_bg.jpg')})` }">
      <template slot="title">P.ESG Dashboard</template>
    </SectionSubTitle>
  </main>
</template>

<script>
import SectionSubTitle from "../components/etc/SectionSubTitle.vue";

export default {
  components: {
    SectionSubTitle,
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

<style scoped lang="scss"></style>
