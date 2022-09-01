<template>
  <div>list</div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get("http://esgdevel.realsn.com/esgSystem/contact/inquiry/getIndustryCode")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style></style>
