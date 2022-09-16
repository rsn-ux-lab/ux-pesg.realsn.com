<template>
  <section class="partner">
    <div class="inner">
      <h2 class="partner__title"><span class="ff-Jost">P.ESG</span>에 등록된 코스피/코스닥 상장기업</h2>
      <ul class="partner-list">
        <li class="partner-list__item"><img class="partner-list__logo" src="@/assets/images/main/partner_logo/graylog.png" alt="graylog" /></li>
        <li class="partner-list__item"><img class="partner-list__logo" src="@/assets/images/main/partner_logo/segment.png" alt="segment" /></li>
        <li class="partner-list__item"><img class="partner-list__logo" src="@/assets/images/main/partner_logo/mastodon.png" alt="mastodon" /></li>
        <li class="partner-list__item"><img class="partner-list__logo" src="@/assets/images/main/partner_logo/spree.png" alt="spree" /></li>
        <li class="partner-list__item"><img class="partner-list__logo" src="@/assets/images/main/partner_logo/tnw.png" alt="tnw" /></li>
        <li class="partner-list__item"><img class="partner-list__logo" src="@/assets/images/main/partner_logo/helpscout.png" alt="helpscout" /></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.partner {
  padding: 10rem 0 20rem;
  .inner {
    width: 132rem;
  }
  &__title {
    font-size: 4.8rem;
    font-weight: bold;
    text-align: center;
    line-height: 1em;
    margin-bottom: 13rem;
  }
  &-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__logo {
      width: auto;
      max-height: 4rem;
    }
  }
}
</style>
