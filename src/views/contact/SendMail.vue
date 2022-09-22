<template>
  <section class="send-mail l-section">
    <div class="inner">
      <h3 class="l-section__title">문의사항</h3>
      <p class="l-section__description">P.ESG 관련 문의사항을 남겨주시면 담당 컨설턴트가 빠르게 연락드리겠습니다.</p>
      <div class="form">
        <fieldset class="form-fieldset" data-fieldset="신청자정보">
          <h4 class="form-fieldset__title">신청자 정보</h4>
          <div class="form-row form-text" data-row="이름">
            <label for="name" class="form-text__label"><span class="txt">이름</span></label>
            <input id="name" class="form-text__input" type="text" placeholder="이름을 입력하세요" />
          </div>
          <div class="form-row form-text" data-row="연락처">
            <label for="phone" class="form-text__label"><span class="txt">연락처</span></label>
            <input id="phone" class="form-text__input" type="text" placeholder="예) 010-1234-5678" />
          </div>
          <div class="form-row form-text" data-row="기관">
            <label for="corp" class="form-text__label"><span class="txt">회사 또는 단체명</span></label>
            <input id="corp" class="form-text__input" type="text" placeholder="회사 또는 단체명 입력" />
          </div>
          <div class="form-row form-text" data-row="직책">
            <label for="position" class="form-text__label"><span class="txt">직책</span></label>
            <input id="position" class="form-text__input" type="text" placeholder="담당하고 계시는 직책" />
          </div>
          <div class="form-row form-text" data-row="이메일">
            <label for="position" class="form-text__label"><span class="txt">이메일 주소</span></label>
            <input id="position" class="form-text__input" type="text" placeholder="예) pesg123@prone.com" />
          </div>
          <div class="form-row form-select" data-row="산업군">
            <label for="job" class="form-text__label"><span class="txt">산업군</span></label>
            <select class="form-select__select">
              <option>전체</option>
              <option v-for="code in this.codes" :value="code.code">{{ code.code_name }}</option>
            </select>
          </div>
          <div class="form-row form-text" data-row="문의사항" style="height: 20rem">
            <label for="textarea" class="form-text__label"><span class="txt">문의사항</span></label>
            <textarea id="textarea" class="form-text__textarea" placeholder="문의사항을 입력해 주세요"></textarea>
          </div>
        </fieldset>
        <fieldset class="form-fieldset" data-fieldset="필수동의항목">
          <div class="form-row form-check" data-row="동의">
            <input id="agreement" class="form-check__input" type="checkbox" />
            <label for="agreement" class="form-check__label">
              <span class="txt">
                [필수] 요청하신 문의 내용에 대한 서비스제공을 위해서 필요한 최소한의 <strong>[개인정보]</strong>이므로 동의하셔야 서비스를 이용할 수 있습니다.
              </span>
            </label>
          </div>
        </fieldset>
        <div class="btn-area text-center pt-65">
          <button class="btn btn-round-grad btn-round-grad--xlg w-40" type="button"><span class="txt">문의하기</span></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "send-mail",
  data() {
    return {
      codes: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    /**
     *
     * API request
     *
     */
    getData() {
      axios
        .get(`${SERVER.api}/esgSystem/contact/inquiry/getIndustryCode`)
        .then((_response) => {
          this.codes = _response.data.industryCode;
        })
        .catch((_error) => {
          console.log(_error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.send-mail {
  background-color: #f8fafc;
}
.form {
  $fo: &;

  padding: 4.5rem 8rem 4.8rem;
  border-radius: $G-box-radius;
  background-color: #fff;
  box-shadow: $G-box-shadow;
  &-fieldset {
    $fi: &;

    &[data-fieldset="신청자정보"] {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -1.75rem;
      #{$fi}__title {
        flex-basis: 100%;
        margin-bottom: 3.6rem;
        padding-left: 1.75rem;
        font-size: 3.2rem;
        font-weight: bold;
      }
      #{$fo}-row {
        flex: 1 1 50%;
        height: 7.8rem;
        margin-bottom: 2.5rem;
        padding: 3.2rem 1.75rem 0;
        .form-text__label {
          position: absolute;
          top: 0;
          font-size: 1.8rem;
        }
      }
    }
    &[data-fieldset="필수동의항목"] {
      #{$fo}-row {
        &[data-row="동의"] {
          .form-check__input {
            margin-right: 1rem;
            border-radius: 100%;
            background-size: 50%;
          }
          .form-check__label {
            strong {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
