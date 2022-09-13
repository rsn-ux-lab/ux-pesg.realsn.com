/**
 *
 *  Device, 웹브러우저 정보 가져오기
 *
 */

import "./jquery/getDevice";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *  *.SVG 파일을 XML 변환
 *
 *  [html 작성 예]
 *  <img src='주소.svg'>
 *
 *  [script 작성 예]
 *  $('img[src*=".svg"]').makeSvg();
 *
 *  [출처]
 *  https://lottoking.tistory.com/425
 *
 */

import "./jquery/makeSvg";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *  jquery setTimeout
 *
 *  [script 작성 예]
 *    $("body").wait(3000).hide(); //3초 후 body 숨기기
 *
 * [출처]
 *  https://github.com/madbook/jquery.wait
 *
 */

import "./jquery/wait";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *    window resize event ▼
 *    [script 작성 예]
 *        $.loadResize(function () {
 *           console.log("callback");
 *        });
 *
 *    [console 출력결과]
 *        callback
 *
 */

import "./jquery/onloadResize";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *   $.scrollAction({
 *       target: '#cont1',
 *       top: 0, // 0~100
 *       scrollDownAction : function(){
 *           // 스크롤 DOWN 액션
 *       },
 *       scrollUpAction : function(){
 *           // 스크롤 UP 액션
 *       }
 *   });
 *
 */

import "./jquery/scrollAction";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *   클릭시 스크롤 애니메이션
 *
 *   $.moveTo({
 *       wrap : 스크롤 개체, (기본 : window)
 *       speed : 속도,
 *       top : 탑기준 0 (단위 : px),
 *       target : 이동할 타겟,
 *       focus : 포커스 타겟,
 *       afterAction : 콜백
 *   })
 *
 */

import "./jquery/moveTo";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *   파라미터 값으로 화면 스크롤 이동
 *
 *   [URL 작성 예]
 *   https://도메인/?moveto=data-card=감성추이 // $("[data-card='감성추이']") 위치로 이동
 *   https://도메인/?moveto=section // $("#section") 위치로 이동
 *   https://도메인/?moveto=card // $(".card") 위치로 이동
 *   https://도메인/?moveto=card--.js-sticky // $(".js-sticky") 높이값을 제외한 $(".card") 위치로 이동
 *   https://도메인/?moveto=card--50 // 50px 높이값을 제외한 $(".card") 위치로 이동
 *
 */

import "./jquery/moveToParams";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *  클릭시 해당 위치로 스크롤 이동
 *
 *  [html 작성 예]
 *  <button class="js-anchor" data-anchor="선택자", data-anchor-except="제외할 높이(숫자 또는 선택자)"></button>
 *
 */

import "./jquery/anchor";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *    [예 : 9 -> '09']
 *    $.addZero(9)
 *
 *    [예 : 9 -> '00009'];
 *    $.addZero({
 *        number : 9,
 *        size : 5
 *    });
 *
 *    or
 *
 *    $.addZero(9,5);
 */

import "./jquery/addZero";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 * 숫자 0 -> ??,???
 *    $(선택자).animateNumber({
 *         addComma : true,
 *         numberSize : 애니메이션 숫자 자리수, // 숫자 : 변환자리수, true : endValue자릿수, false : 자리수변환 없음 (구현중)
 *         interval : 올라가는 속도,
 *         totalPlayTime : 애니메이션시간,
 *         startNumber : 시작 숫자,
 *         endNumber : 끝나는 숫자,
 *         startValue : 시작전 값,
 *         endValue : 끝나고 바뀔 값, // 없을경우 endNumber로 대체
 *         callback : function(){}
 *         increase : 증가수, // 증가수이 있을경우 totalPlayTime는 무시됨
 *     });
 *    $(선택자) 에 .end를 주는 즉시 애니메이션이 끝난다.
 *
 */

import "./jquery/animateNumber";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 * 더블탭(확대기능) 방지
 *
 */

import "./jquery/disabledDoubleTab";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *   TEXT 말줄임 ▼
 *
 *   [script 작성 예]
 *       $(".js-clamp-1").clamp(1); //1줄 말줄임
 *       $(".js-clamp-2").clamp(2); //2줄 말줄임
 *       $(".js-clamp-3").clamp(3); //3줄 말줄임
 *
 *   [출처]
 *   https://www.npmjs.com/package/multi-clamp
 *
 */

import "./jquery/clamp";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *  px를 rem 변환 후 style 속성,값 추가
 *
 *  [HTML 작성 예]
 *  <div data-px2rem="width:800px;height:400px"></div>
 *
 *  [HTML 출력 상태]
 *  <div data-px2rem="width:41.6rem;height:20.8rem"></div>
 *
 */

import "./jquery/insertConvertedPixel";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *
 *
 */

import "./jquery/moveBody";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

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

import "./jquery/lodingSpinner";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *
 *
 */

import "./jquery/attrchange";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */

/**
 *
 *
 *
 */

import "./jquery/keyframes";

/*
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 */
