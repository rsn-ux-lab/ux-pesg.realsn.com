<template>
  <h1 class="link-logo">
    <router-link class="link-logo__link js-anchor" to="/" title="메인으로 이동하기" data-anchor="#wrap">
      <Logo></Logo>
    </router-link>
  </h1>
</template>

<script>
import Logo from "../icons/Logo.vue";

export default {
  name: "link-logo",
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.link-logo {
  .logo {
    font-size: 3.6rem;
  }
}
</style>
