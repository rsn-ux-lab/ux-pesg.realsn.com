<template>
  <main id="container" role="main">
    <h1>contact</h1>
  </main>
</template>

<script>
export default {
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
