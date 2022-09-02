<template>
  <header id="header" class="header" role="banner">
    <div class="inner">
      <HeaderH1 />
      <HeaderGnb />
      <HeaderUtill />
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
}
</style>

<script>
import HeaderH1 from "./header/HeaderH1";
import HeaderGnb from "./header/HeaderGnb";
import HeaderUtill from "./header/HeaderUtill.vue";

export default {
  components: {
    HeaderH1,
    HeaderGnb,
    HeaderUtill,
  },
  mounted() {
    //
  },
};
</script>
