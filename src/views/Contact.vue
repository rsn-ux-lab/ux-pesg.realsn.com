<template>
  <main id="container" role="main">
    <h2 class="visually-hidden">contact</h2>
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
