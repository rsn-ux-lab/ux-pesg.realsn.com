<template>
  <footer id="footer" class="footer" role="contentinfo">
    <div class="footer-overlay"></div>
    <div class="footer-inner">
      <div class="inner">
        <div class="about">
          <linkLogo></linkLogo>
          <div class="about-list">
            <a class="about-list__link" @click="isShow('popupTerms')">서비스 이용약관</a>
            <a class="about-list__link" @click="isShow('popupPersonal')">개인정보 처리방침</a>
            <a class="about-list__link" @click="isShow('popuprRefusal')">이메일무단수집거부</a>
          </div>
        </div>
        <div class="contact">
          <p class="contact-address">서울특별시 마포구 마포대로 109 롯데캐슬프레지던트 제 28층 제오 2801호</p>
          <div class="contact-list">
            <p class="contact-list__txt">Tel. <a href="tel:0263703732">02 6370 3732</a></p>
            <p class="contact-list__txt">Fax. <a href="tel:0263703798">02 6370 3798-9</a></p>
            <p class="contact-list__txt">Email. <a href="mailto:p.esg@prone.co.kr">p.esg@prone.co.kr</a></p>
          </div>
          <p class="contact-corpyright">© P-ESG Corp. All rights reserved.</p>
        </div>
      </div>
    </div>
    <div class="footer-bg"></div>
  </footer>
</template>

<script>
import * as eventBus from "@/eventBus.js";
import linkLogo from "../buttons/linkLogo.vue";

export default {
  components: {
    linkLogo,
  },
  watch: {
    $route() {
      this.scrollingAction();
      this.moveFooterFix();
    },
  },
  methods: {
    isShow(_key) {
      eventBus[_key].$emit("isShow", "true");
    },
    moveFooterFix() {
      /**
       *
       *  Footer 위치를 하단에 붙이기
       *
       */
      const $container = document.querySelector("#container");
      const $footer = document.querySelector("#footer");

      // window resize event
      window.onLoadResize(() => {
        const winH = window.innerHeight;
        const footerH = $footer.offsetHeight;
        const afterContainerH = Math.abs(winH - footerH);

        $container.style.minHeight = afterContainerH + "px";
      });
    },
    scrollingAction() {
      /**
       *
       *  Footer 스크롤 인터랙션
       *
       */
      const $container = document.querySelector("#container");
      const $footer = document.querySelector("#footer");
      let status;

      document.addEventListener("scroll", () => {
        const scrollBottom = window.scrollY + window.innerHeight;
        const containerH = $container.offsetHeight;
        const footerH = $footer.offsetHeight;

        if (scrollBottom >= containerH) {
          let posT = Math.abs(((scrollBottom - containerH) / footerH) * 1);
          let Y = posT >= 1 ? 1 : posT;

          if (status) {
            $footer.querySelector(".footer-overlay").style.opacity = Math.abs(Y - 1);
            $footer.querySelector(".inner").style.transform = "translateY(" + Math.abs(Y * 100 - 100) + "px)";
          }
          status = true;
        } else status = false;
      });

      // $footer.querySelector(".inner").style.transform = "translateY(0)";
      $footer.querySelector(".footer-overlay").style.opacity = 0;

      // window.onLoadResize(() => {
      //   const winH = window.innerHeight;
      //   const containerH = $container.offsetHeight;

      //   if (winH >= containerH) $footer.querySelector(".footer-overlay").style.opacity = 0;
      // });
    },
  },
  mounted() {
    this.scrollingAction();
    this.moveFooterFix();
  },
};
</script>

<style lang="scss" scoped>
/* footer */
.footer {
  $footerH: 37.5rem;

  position: relative;
  padding: 10rem 0;
  height: $footerH;
  &-inner {
    position: fixed;
    bottom: 0;
    width: 100%;
    min-width: $G-inner-width;
    height: $footerH;
    transform: translateY(10rem);
  }
  &-overlay {
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: $footerH;
    background-color: #ccc;
    pointer-events: none;
  }
  &-bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: #f9f9f9;
  }
}

//서비스 이용정보
.about {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  margin-bottom: 6.2rem;
  border-bottom: 0.1rem solid #d0d1e5;
  .logo {
    font-size: 3.6rem;
  }
  &-list {
    display: flex;
    align-items: center;
    &__link {
      margin-left: 6rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: #4d4d5b;
    }
  }
}

// 연락처
.contact {
  font-size: 1.5rem;
  color: #4d4d5b;
  text-align: center;
  &-address {
    margin-bottom: 0.5rem;
  }
  &-list {
    display: inline-flex;
    &__txt {
      position: relative;
      margin-bottom: 2rem;
      padding: 0 1rem;
      letter-spacing: 0.02em;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        height: 1.1rem;
        width: 0.1rem;
        background-color: #4d4d5b;
        transform: translateY(-50%);
      }
      &:first-child::after {
        display: none;
      }
    }
  }
}
</style>
