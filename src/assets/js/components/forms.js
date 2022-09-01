import $ from "jquery";

/**
 *
 * form 요소 인러랙션 일괄 적용
 *
 */
$.fn.formTamplate = function () {
  let $this = $(this);
  let $inputs = $this.find("input[class*='__input']");
  let $inputSearchs = $this.find(".form-search__input");
  let $inputCalendars = $this.find(".form-calendar__input");
  let $allCheckeds = $this.find(".form-check__input--js-all-checked");
  let $selects = $this.find(".form-select__select");

  $inputs.f_getInboundValue(); // input Value 가져오기
  $inputSearchs.f_focusOutKeyboard(); // input[type="search"] 영역 외 선택시 가상키보드 닫기
  $inputSearchs.f_addInputClearBtn(); // input[type="search"] 내용 초기화 버튼
  $allCheckeds.f_allCheckbox(); // input[type="checkbox"] 모두 선택 / 해제
  $inputCalendars.f_getDataPicker(); // input[type="date"] 날짜 가져오기
  $selects.f_getInboundValue(); // select checked value 가져오기
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  Mobile 가상 키보드 감지
 *
 *  [script 작성 예]
 *  $.hasOnKeyboard({
 *     $target: $("input"),
 *     openCallback() {
 *         // 키보드 열릴때 callback
 *     },
 *     closeCallback() {
 *         // 키보드 닫을때 callback
 *     },
 * });
 *
 * [출처]
 *  https://me2.kr/vasox
 *
 */

$.hasOnKeyboard = ({ ...args }) => {
  args.$target.on("focus blur", toggleFocus);

  function toggleFocus(e) {
    switch (e.type) {
      case "focus":
        if (args.openCallback) args.openCallback();
        break;
      case "blur":
        if (args.closeCallback) args.closeCallback();
        break;
    }
  }
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  input 영역 외 선택시 가상키보드 닫기
 *
 */

$.fn.f_focusOutKeyboard = function () {
  $(this).each(function () {
    let $input = $(this);
    let status;

    // 가상키보드  on, off 변화 감지
    $.hasOnKeyboard({
      $target: $input,
      openCallback: function () {
        status = true;
        $("body")
          .off()
          .on("touchstart touchmove", (e) => {
            if (status && e.target !== $input[0]) $input.blur();
          });
      },
      closeCallback: function () {
        status = false;
      },
    });
  });
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  input 내용 초기화 버튼
 *
 */

$.fn.f_addInputClearBtn = function () {
  $(this).each(function () {
    let $input = $(this);
    let $row = $input.closest(".form-row");
    let input_padding = parseFloat($input.css("padding-left")) / 1.3;
    let row_Padding = parseFloat($row.css("padding-left"));
    let right = input_padding + row_Padding;
    let $btnClear = $(`<button class='form-search__btn-clear' style="right:${right}px" type='button' title="입력내용삭제"></button>`);

    // clear button 추가
    $input.after($btnClear);

    // value 초기화
    $btnClear.on("click", (e) => {
      if ($input.val().length) {
        $input.val("");
        $row.attr("data-inbound-value", "");
      }
    });
  });
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  form Value 가져오기
 *
 */

$.fn.f_getInboundValue = function () {
  $(this).each(function () {
    let $each = $(this);
    let $row = $each.closest(".form-row");

    if ($each.is("input")) isInputControl(); // input tag
    else if ($each.is("select")) isSelectControl(); // select tag

    // input control
    function isInputControl() {
      $each.on("propertychange change keyup paste", function () {
        let $this = $(this);
        let type = $this.prop("type");

        switch (type) {
          case "text":
          case "search":
            let val = $this.val();
            $row.attr("data-inbound-value", val);
            break;
        }
      });
    }

    // select control
    function isSelectControl() {
      $each.on("change", function () {
        let $this = $(this);
        let $selected = $this.find("option:selected");
        let val = $selected.val();
        let text = $selected.text();

        $row.attr("data-inbound-value", val);
        $row.attr("data-inbound-text", text);
        $this.blur(); // focus 해제
      });
    }
  });
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * input[type="date"] 날짜 가져오기
 *
 */

$.fn.f_getDataPicker = function () {
  $(this).each(function () {
    let $input = $(this);
    let $label = $input.next("label");

    // show datePicker
    $label.on("click", function () {
      $input[0].showPicker();
    });

    // 선택된 날짜 표시
    $input.on("change", function () {
      $label.text($input.val());
    });
  });
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  fieldset > input[type="checkbox"] 모두 선택 / 해제
 *
 */

$.fn.f_allCheckbox = function () {
  $(this).each(function () {
    let $input = $(this);
    let $fieldset = $input.closest("fieldset");
    let $siblings = $fieldset.find("input[type='checkbox']").not($input);
    let length = $fieldset.has("fieldset").length;

    // checkbox 모두 선택
    $input.on("change", function () {
      if ($input.prop("checked")) {
        $siblings.prop("checked", true);
      } else {
        $siblings.prop("checked", false);
      }
      $siblings.trigger("change");
    });

    // checkbox 상태 확인
    $siblings.on("change", function () {
      let filter = $siblings.filter((idx, el) => el.checked);
      if (filter.length === $siblings.length) {
        $input.prop("checked", true);
        // group fieldset
        if (length === 0) {
          let $fieldset_fisrt_all_check = $fieldset.parent("fieldset").find(".form-check__input--js-all-checked").eq(0);

          $fieldset_fisrt_all_check.prop("checked", true);
        }
      } else {
        $input.prop("checked", false);
      }
    });
  });
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
