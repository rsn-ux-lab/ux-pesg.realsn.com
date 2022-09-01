/**
 *
 * 데이터 불러오는 동안 대기상태 표시
 *
 * [html 작성 예]
 * <div data-loding-spinner="true"></div> // 로딩 표시
 * <div data-loding-spinner="false"></div> // 로딩 감추기
 * <div data-loding-spinner="true dimmed"></div> // 딤드 효과 추가 및 로딩 컬리 흰색 변경(기본값 : 검은색)
 * <div data-loding-spinner="true 1rem"></div> // rem 단위로 숫자 삽입하는 경우 크기 변경됨(기본값 : 6rem)
 *
 */

import $ from "jquery";
import "./attrchange";
import "./keyframes";

$.fn.lodingSpinner = function () {
  $(this).each(function () {
    const $this = $(this);
    let isSize = $this.attr("data-loding-spinner").match(/[\w\-\.]+\w+em/g);
    let isActive = $this.attr("data-loding-spinner").includes("true");
    let isDimmed = $this.attr("data-loding-spinner").includes("dimmed");
    const $spinner = $(
      `<svg class="loding__spinner" viewBox="0 0 50 50"> <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle> </svg>`
    );
    const $loding = $(`<div class="loding"><span class="visually-hidden">데이터를 불러오고 있습니다.</span></div>`);

    $loding.css({
      position: "absolute",
      zIndex: 2,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: isDimmed ? "rgba(0,0,0,0.5)" : "transparent",
    });

    $spinner
      .css({
        animation: "rotate 2s linear infinite",
        zIndex: 1,
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "1em",
        height: "1em",
        fontSize: isSize ? isSize[0] : "6rem",
        transform: "translate(-50%, -50%)",
      })
      .find(".path")
      .css({
        stroke: isDimmed ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.6)",
        animation: "dash 1.5s ease-in-out infinite",
      });

    $.keyframe.define([
      {
        name: "rotate",
        "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
      },
      {
        name: "dash",
        "0%": {
          "stroke-dasharray": "1, 150",
          "stroke-dashoffset": "0",
        },
        "50%": {
          "stroke-dasharray": "90, 150",
          "stroke-dashoffset": "-35",
        },
        "100%": {
          "stroke-dasharray": "90, 150",
          "stroke-dashoffset": "-124",
        },
      },
    ]);

    $loding.prepend($spinner);

    let changedSpinner;
    (changedSpinner = function () {
      if (isActive) {
        activeSpinner();
      } else {
        removeSpinner();
      }
    })();

    $this.attrchange({
      callback: function () {
        isActive = $this.attr("data-loding-spinner").includes("true");

        changedSpinner();
      },
    });

    function activeSpinner() {
      $this
        .css({
          overflow: "hidden",
          position: "relative",
        })
        .prepend($loding);
    }

    function removeSpinner() {
      $this.css({
        overflow: "",
        position: "",
      });
      $loding.remove();
    }
  });
};
