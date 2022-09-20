<template>
  <section class="service l-section">
    <div class="inner">
      <h3 class="l-section__title">서비스 이용정책</h3>
      <p class="l-section__description">간단한 절차로 회원에 가입하여 국내 코스피, 코스닥 기업들의P-ESG 현황을 확인하실 수 있습니다.</p>
      <ul class="service-list">
        <li class="service-list__item">
          <section class="service-list-wrapper">
            <header class="service-list-header">
              <p class="tag ff-Jost"></p>
              <p class="type ff-Jost">Free</p>
              <h4 class="tit">무료 회원가입</h4>
            </header>
            <main class="service-list-body">
              <ul class="spec-list">
                <li class="spec-list__item">
                  <p class="tit">ESG 종합지표</p>
                  <p class="desc">코스피 200, 코스닥 150 기업</p>
                </li>
              </ul>
            </main>
            <footer class="service-list-footer">
              <a class="btn btn-round-border btn-round-border--lg w-100" href="//esgdevel.realsn.com" target="_blank">
                <span class="txt">무료회원 가입하기</span>
              </a>
            </footer>
          </section>
        </li>
        <li class="service-list__item service-list__item--report">
          <section class="service-list-wrapper">
            <header class="service-list-header">
              <p class="tag ff-Jost">Report</p>
              <p class="type ff-Jost">Web Report</p>
              <h4 class="tit">1인당 <span class="num ff-Jost">50</span>만원</h4>
            </header>
            <main class="service-list-body">
              <ul class="spec-list">
                <li class="spec-list__item">
                  <p class="tit">37개 ESG 세부지표</p>
                  <p class="desc">기업 맞춤형 데이터 수집</p>
                </li>
                <li class="spec-list__item">
                  <p class="tit">분야별 SWOT 분석</p>
                </li>
              </ul>
            </main>
            <footer class="service-list-footer">
              <router-link class="btn btn-round btn-round--white btn-round--lg w-100" to="/contact?sendmail=report">
                <span class="txt">리포트 가입하기</span>
              </router-link>
            </footer>
          </section>
        </li>
        <li class="service-list__item service-list__item--dashboard">
          <section class="service-list-wrapper">
            <header class="service-list-header">
              <p class="tag ff-Jost">Dashboard</p>
              <p class="type ff-Jost">Dashboard</p>
              <h4 class="tit">월간 <span class="num ff-Jost">20</span>만원</h4>
              <h4 class="tit">연간 <span class="num ff-Jost">100</span>만원</h4>
            </header>
            <main class="service-list-body">
              <ul class="spec-list">
                <li class="spec-list__item">
                  <p class="tit">37개 ESG 세부지표</p>
                </li>
                <li class="spec-list__item">
                  <p class="tit">Web Report (월 1회)</p>
                </li>
                <li class="spec-list__item">
                  <p class="tit">실시간 전용 대시보드</p>
                </li>
              </ul>
            </main>
            <footer class="service-list-footer">
              <router-link class="btn btn-round btn-round--white btn-round--lg w-100" to="/contact?sendmail=dashboard">
                <span class="txt">대시보드 가입하기</span>
              </router-link>
            </footer>
          </section>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "service",
};
</script>

<style lang="scss" scoped>
.service {
  position: relative;
  overflow: hidden;
  background: #f9fbfe url(~@/assets/images/dashboard/service_bg_wave.png) center center no-repeat;
  background-size: 100% auto;
  .inner {
    min-width: 12.3rem;
  }
  &-list {
    $list: &;

    display: flex;
    justify-content: space-between;
    padding-top: 10rem;
    &__item {
      width: 36.2rem;
      padding: 3.2rem;
      border-radius: $G-box-radius;
      background-color: #fff;
      box-shadow: $G-box-shadow;
      &--report {
        background-color: #584aff;
        box-shadow: 0 0.3rem 1.7rem rgba(#584aff, 0.7);
        #{$list}-body {
          .spec-list {
            &__item {
              &::after {
                background-image: svgIcon(check, rgba($G-color-primary, 0));
              }
            }
          }
        }
      }
      &--dashboard {
        background-color: #a44aff;
        box-shadow: 0 0.3rem 1.7rem rgba(#a44aff, 0.7);
        #{$list}-body {
          .spec-list {
            &__item {
              &::after {
                background-image: svgIcon(check, rgba($G-color-active, 0));
              }
            }
          }
        }
      }
      &[class*="service-list__item--"] {
        #{$list}-header {
          .type {
            color: #fff;
          }
          .tit {
            color: #fff;
          }
        }
        #{$list}-body {
          border-color: rgba(#fff, 0.16);
          .spec-list {
            &__item {
              color: #fff;
              &::after {
                background-color: #fff;
              }
            }
          }
        }
      }
    }
    &-header {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 3rem;
      height: 27.2rem;
      .tag {
        display: flex;
        align-items: center;
        position: absolute;
        top: -3.2rem;
        left: 50%;
        height: 5.5rem;
        padding: 0 3.2rem;
        border-radius: 2em;
        color: #fff;
        font-weight: 500;
        background-color: #000;
        transform: translate(-50%, -50%);
        &:empty {
          display: none;
        }
      }
      .type {
        position: absolute;
        top: 1rem;
        left: 0;
        font-size: 2.5rem;
        font-weight: 600;
        color: $G-color-primary;
      }
      .tit {
        font-size: 3.5rem;
        font-weight: bold;
        color: #535258;
        text-align: center;
        .num {
          font-size: 6.4rem;
        }
      }
    }
    &-body {
      height: 27rem;
      padding-top: 3rem;
      border-top: 1px solid rgba(#000000, 0.16);
      .spec-list {
        &__item {
          position: relative;
          margin-bottom: 1.8rem;
          padding-left: 4.4rem;
          color: #6b6b6b;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 2.4rem;
            height: 2.4rem;
            border-radius: 100%;
            background-color: $G-color-primary;
            background-image: svgIcon(check, fff);
            background-size: 40%;
            transform: translateY(-50%);
          }
          .tit {
            font-size: 2rem;
            font-weight: bold;
          }
          .desc {
            font-size: 1.6rem;
            font-weight: 500;
            &::before {
              content: "\00B7";
              display: inline-block;
              padding: 0 0.8rem 0 0.5rem;
            }
          }
        }
      }
    }
    &-footer {
      text-align: center;
      .btn:not(.btn-round-border) {
        &::after {
          background: #000;
        }
      }
    }
  }
}
</style>
