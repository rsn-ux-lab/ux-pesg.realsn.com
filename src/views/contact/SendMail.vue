<template>
  <section class="send-mail l-section">
    <div class="inner">
      <h3 class="l-section__title">문의사항</h3>
      <p class="l-section__description">P.ESG 관련 문의사항을 남겨주시면 담당 컨설턴트가 빠르게 연락드리겠습니다.</p>
      <form class="form" @submit="checkForm">
        <fieldset class="form-fieldset" data-fieldset="신청자정보">
          <h4 class="form-fieldset__title">신청자 정보</h4>
          <div class="form-row form-text" data-row="이름">
            <label for="name" class="form-text__label">
              <span class="txt">이름</span>
              <span class="error" v-if="errors.name">({{ errors.name }})</span>
            </label>
            <input id="name" class="form-text__input" type="text" v-model="forms.name" placeholder="이름을 입력하세요" />
          </div>
          <div class="form-row form-text" data-row="연락처">
            <label for="phone" class="form-text__label">
              <span class="txt">연락처</span>
              <span class="error" v-if="errors.phone_nm">({{ errors.phone_nm }})</span>
            </label>
            <input id="phone" class="form-text__input" type="text" v-model="forms.phone_nm" placeholder="예) 010-1234-5678" />
          </div>
          <div class="form-row form-text" data-row="기관">
            <label for="corp" class="form-text__label">
              <span class="txt">회사 또는 단체명</span>
              <span class="error" v-if="errors.group_name">({{ errors.group_name }})</span>
            </label>
            <input id="corp" class="form-text__input" type="text" v-model="forms.group_name" placeholder="회사 또는 단체명 입력" />
          </div>
          <div class="form-row form-text" data-row="직책">
            <label for="position" class="form-text__label">
              <span class="txt">직책</span>
              <span class="error" v-if="errors.position">({{ errors.position }})</span>
            </label>
            <input id="position" class="form-text__input" type="text" v-model="forms.position" placeholder="담당하고 계시는 직책" />
          </div>
          <div class="form-row form-text" data-row="이메일">
            <label for="position" class="form-text__label">
              <span class="txt">이메일 주소</span>
              <span class="error" v-if="errors.email">({{ errors.email }})</span>
            </label>
            <input id="position" class="form-text__input" type="text" v-model="forms.email" placeholder="예) pesg123@prone.com" />
          </div>
          <div class="form-row form-select" data-row="산업군">
            <label for="job" class="form-text__label">
              <span class="txt">산업군</span>
              <span class="error" v-if="errors.industry_name">({{ errors.industry_name }})</span>
            </label>
            <select class="form-select__select" v-model="forms.industry_name">
              <option disabled value="">메뉴를 선택해 주세요</option>
              <option v-for="code in this.industryCodes" :value="code.code_name">{{ code.code_name }}</option>
            </select>
          </div>
          <div class="form-row form-text" data-row="문의사항" style="height: 20rem">
            <label for="textarea" class="form-text__label">
              <span class="txt">문의사항</span>
              <span class="error" v-if="errors.content">({{ errors.content }})</span>
            </label>
            <textarea id="textarea" class="form-text__textarea" v-model="forms.content" placeholder="문의사항을 입력해 주세요"></textarea>
          </div>
        </fieldset>
        <fieldset class="form-fieldset" data-fieldset="필수동의항목">
          <div class="form-row form-check" data-row="동의">
            <input id="agreement" class="form-check__input" type="checkbox" v-model="forms.consent" />
            <label for="agreement" class="form-check__label">
              <span class="txt">
                [필수] 요청하신 문의 내용에 대한 서비스제공을 위해서 필요한 최소한의 <strong>[개인정보]</strong>이므로 동의하셔야 서비스를 이용할 수 있습니다.
              </span>
              <br />
              <span class="error" v-if="errors.consent">({{ errors.consent }})</span>
            </label>
          </div>
        </fieldset>
        <div class="btn-area text-center pt-65">
          <button class="btn btn-round-grad btn-round-grad--xlg w-40 js-submit" type="submit">
            <span class="txt">문의하기</span>
          </button>
        </div>
      </form>
    </div>
    <ModalAlert @getShow="getShow" :isShow="isCompleteModal" :frameset="'#container'">
      <template slot="message">문의사항이 발송되었습니다.</template>
    </ModalAlert>
  </section>
</template>

<script>
import axios from "axios";
import ModalAlert from "../../components/modal/ModalAlert.vue";

export default {
  name: "send-mail",
  components: {
    ModalAlert,
  },
  data() {
    return {
      isCompleteModal: false,
      industryCodes: null,
      errors: new Object(),
      forms: {
        consent: false,
        name: null,
        phone_nm: null,
        group_name: null,
        position: null,
        email: null,
        industry_name: "",
        content: null,
      },
    };
  },
  created() {
    this.getIndustryCode();
  },
  methods: {
    /* API - 산업군  */
    getIndustryCode() {
      axios
        .get(`${SERVER.api}/esgSystem/contact/inquiry/getIndustryCode`)
        .then((_response) => (this.industryCodes = _response.data.industryCode))
        .catch((_error) => {
          console.log(_error);
        });
    },

    /* API - 메일 전송  */
    sendMail() {
      axios
        .post(`${SERVER.api}/esgSystem/contact/inquiry/send-mail`, {
          i_name: this.forms.name,
          i_phone_nm: this.forms.phone_nm,
          i_group_name: this.forms.group_name,
          i_position: this.forms.position,
          i_email: this.forms.email,
          i_industry_name: this.forms.industry_name,
          i_content: this.forms.content,
        })
        .then((_response) => {
          this.onLoading(false, () => {
            this.isCompleteModal = true;
          });
        })
        .catch((_error) => {
          console.log(_error);
        });
    },

    /* 유효성검사  */
    checkForm(e) {
      e.preventDefault();
      this.errors = new Object();
      // 이름
      if (!this.forms.name) {
        this.errors.name = "이름은 필수입니다.";
      }

      // 연락처
      if (!this.forms.phone_nm) {
        this.errors.phone_nm = "연락처는 필수입니다.";
      } else if (!this.validPhone(this.forms.phone_nm)) {
        this.errors.phone_nm = "연락처 형식을 확인하세요.";
      }

      // 회사명
      if (!this.forms.group_name) {
        this.errors.group_name = "회사 또는 단체명은 필수입니다.";
      }

      // 회사명
      if (!this.forms.position) {
        this.errors.position = "직책은 필수입니다.";
      }

      // 이메일
      if (!this.forms.email) {
        this.errors.email = "이메일은 필수입니다.";
      } else if (!this.validEmail(this.forms.email)) {
        this.errors.email = "이메일 형식을 확인하세요.";
      }

      // 회사명
      if (!this.forms.industry_name) {
        this.errors.industry_name = "직책은 필수입니다.";
      }

      // 문의사항
      if (!this.forms.content) {
        this.errors.content = "문의사항은 필수입니다.";
      }

      // 개인정보동의
      if (!this.forms.consent) {
        this.errors.consent = "개인정보동의는 필수입니다.";
      }

      // submit
      if (Object.keys(this.errors).length === 0) {
        this.sendMail();
        this.onLoading(true);
      }
    },

    /* 이메일 검사 */
    validEmail: function (_email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(_email);
    },

    /* 연락처 검사 */
    validPhone: function (_phone) {
      const re = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
      return re.test(_phone);
    },

    /* loading */
    onLoading(_boolean, _callback) {
      const $wrap = document.querySelector("#wrap");
      if (_boolean) {
        window.lockBody(); //body scroll lock
        $wrap.setAttribute("data-loding-spinner", "true dimmed fixed"); // lading dimmed remove
      } else {
        window.unlockBody(); //body scroll unlock
        $wrap.setAttribute("data-loding-spinner", "false dimmed fixed"); // lading dimmed remove
      }

      if (_callback) setTimeout(() => _callback(), 800);
    },

    /* 발송완료 확인창 */
    getShow(_boolean) {
      this.isCompleteModal = _boolean;
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
          display: flex;
          align-items: center;
          position: absolute;
          top: 0;
          font-size: 1.8rem;
          .txt {
            margin-right: 1rem;
            &::after {
              content: "*";
              display: inline-block;
              padding-left: 0.3rem;
              color: #f24e1e;
            }
          }
          .error {
            font-size: 1.2rem;
            color: #f24e1e;
          }
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
          .error {
            position: absolute;
            top: 2.8rem;
            left: 0;
            font-size: 1.2rem;
            color: #f24e1e;
          }
        }
      }
    }
  }
}
</style>
