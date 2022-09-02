<template>
  <main id="container" role="main">
    <Visual></Visual>
    <Score></Score>
    <Position></Position>
    <Value></Value>
  </main>
</template>

<script>
import Visual from "./main/Visual.vue";
import Score from "./main/Score.vue";
import Position from "./main/Position.vue";
import Value from "./main/Value.vue";

export default {
  components: {
    Visual,
    Score,
    Position,
    Value,
  },
};
</script>

<style lang="scss"></style>
