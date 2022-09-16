<template>
  <section class="video">
    <div class="inner">
      <ButtonPlayer :url="'https://www.youtube.com/watch?v=mkggXE5e2yk&t=71s'" :type="'youtube'" :title="'동영상 제목을 넣어주세요'"></ButtonPlayer>
    </div>
  </section>
</template>

<script>
import ButtonPlayer from "../../components/buttons/ButtonPlayer.vue";

export default {
  components: {
    ButtonPlayer,
  },
};
</script>

<style lang="scss" scoped>
.video {
  padding: 16rem 0;
}
</style>
