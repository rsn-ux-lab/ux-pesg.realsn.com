<template>
  <div class="value-text">
    <h2 class="value-text__title ff-Jost">Value</h2>
    <p class="value-text__desc">
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
.value-text {
  position: absolute;
  top: 0;
  left: 0;
  &__title {
    font-size: 5rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
  &__desc {
    font-size: 5.5rem;
    font-weight: bold;
    line-height: 1.3em;
    color: $G-color-primary;
  }
}
</style>
