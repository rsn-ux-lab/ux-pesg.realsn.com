<template>
  <div class="value-text">
    <h3 class="value-text__title ff-Jost">Value</h3>
    <p class="value-text__description">
      <span class="ff-Jost">P.ESG</span>와 <br />
      리스크 지표로 <br />
      기업 <span class="ff-Jost">RSI</span> 가치와의 <br />
      관계를 주목해 보세요.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.value-text {
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
