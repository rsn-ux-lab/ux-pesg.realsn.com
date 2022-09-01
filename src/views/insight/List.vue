<template>
  <div class="data">API 호출</div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get("/esgSystem/contact/inquiry/getIndustryCode")
      .then(function (_response) {
        _response.data.industryCode.forEach((_each) => {
          $(".data").append(`<p>${_each.code_name}</p>`);
        });
      })
      .catch(function (_error) {
        console.log(_error);
      });
  },
};
</script>

<style></style>
