<template>
  <div>API 호출</div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get("https://esgdevel.realsn.com/esgSystem/contact/inquiry/getIndustryCode")
      .then(function (_response) {
        console.log(_response);
      })
      .catch(function (_error) {
        console.log(_error);
      });
    // $.ajax({
    //   url: "https://esgdevel.realsn.com/esgSystem/contact/inquiry/getIndustryCode",
    //   method: "get",
    //   dataType: "json",
    //   async: false,
    //   timeout: 100000,
    //   cache: false,
    //   success: function (_result) {
    //     console.log(_result);
    //   },
    // });
  },
};
</script>

<style></style>
