<template>
  <div id="wrap" data-target-device="pc">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "wrap",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss"></style>
