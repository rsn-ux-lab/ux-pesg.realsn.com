<template>
  <div class="score-text">
    <h3 class="score-text__title ff-Jost">Score</h3>
    <p class="score-text__description">
      국내 상장기업의<br />
      현재 <span class="ff-Jost">P.ESG</span> 점수를<br />
      확인하세요.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.score-text {
  position: absolute;
  top: 0;
  left: 0;
  &__title {
    font-size: 5rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
  &__description {
    font-size: 5.5rem;
    font-weight: bold;
    line-height: 1.3em;
    color: $G-color-primary;
  }
}
</style>
