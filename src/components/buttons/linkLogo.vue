<template>
  <h1 class="logo">
    <router-link
      class="logo__link"
      to="/"
      title="메인으로 이동하기"
      :style="{ backgroundImage: `url(${require('@/assets/images/common/logo.png')})` }"
    ></router-link>
  </h1>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  $font-size: 3.6rem;

  font-size: $font-size;
  &__link {
    display: block;
    width: fz-in-em(94, $font-size);
    height: 1em;
    background-size: cover;
  }
}
</style>
