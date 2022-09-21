<template>
  <section class="contact l-section">
    <div class="inner">
      <h3 class="l-section__title">Contact</h3>
      <p class="l-section__description">
        P.ESG 데이터 등 저희의 도움이 필요하시다면<br />
        다음의 이메일 주소 및 연락처로 문의 주시면 빠르게 회신드리겠습니다.
      </p>
      <ul class="contact-list">
        <li class="contact-list__item">E-Mail : <a href="mailto:p.esg@prone.co.kr">p.esg@prone.co.kr</a></li>
        <li class="contact-list__item">Tel : <a herf="tel:02-6370-3732">82)02-6370-3732~6</a></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style lang="scss" scoped>
.l-section {
  background-color: #35353d;
  &__title {
    color: #fff;
  }
  &__description {
    color: #979797;
  }
}

.contact {
  &-list {
    display: flex;
    justify-content: center;
    &__item {
      padding: 0 2rem;
      font-size: 2.8rem;
      font-weight: 500;
      color: #fff;
    }
  }
}
</style>
