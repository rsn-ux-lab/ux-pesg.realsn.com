<template>
  <main id="container" role="main">
    <Visual></Visual>
    <Score></Score>
    <Compare></Compare>
    <Value></Value>
  </main>
</template>

<script>
import Visual from "./main/Visual.vue";
import Score from "./main/Score.vue";
import Compare from "./main/Compare.vue";
import Value from "./main/Value.vue";

export default {
  components: {
    Visual,
    Score,
    Compare,
    Value,
  },
};
</script>

<style lang="scss"></style>
