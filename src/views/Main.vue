<template>
  <main id="container" role="main">
    <Visual></Visual>
    <Score></Score>
    <Compare></Compare>
    <Value></Value>
    <Video></Video>
    <Partner></Partner>
  </main>
</template>

<script>
import Visual from "./main/Visual.vue";
import Score from "./main/Score.vue";
import Compare from "./main/Compare.vue";
import Value from "./main/Value.vue";
import Video from "./main/Video.vue";
import Partner from "./main/Partner.vue";

export default {
  components: {
    Visual,
    Score,
    Compare,
    Value,
    Video,
    Partner,
  },
};
</script>

<style lang="scss"></style>
