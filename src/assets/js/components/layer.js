/**
 *
 *  레이어 팝업
 *
 *  // 기본화면
 *  $.layer({
 *    ClassName : //_layer.scss에서 스타일 가져오기,
 *    url : //*.jsp 파일 load()
 *    fadeIn: false, // fadeIn Class 제거
 *    fadeOut: false, // fadeOut Class 제거
 *    callback({ ...args }) {
 *        //callback
 *     }
 *  });
 *
 * // 확인창
 *  $.layer({
 *    ClassName : confirm,
 *    message: "메세지 입력" ,
 *    btnAgree : "전송", // ture 버튼명 설정가능(빈값이면 "확인" 자동 적용)
 *    callback({ ...args }) {
 *        //callback
 *     }
 *  });
 *
 */

$.layer = ({ ...args }) => {
    let default_option = {
        fadeIn: true,
        fadeOut: true,
        fadeOutDelay: 600,
        callback: false,
        on: {
            start: false,
            complete: false,
            close: false,
        },
    };
    let option = $.extend(default_option, args);

    if (option.on.start) option.on.start(); // start callback
    if ($(option.className).length) return; // 중복클릭방지    

    let $layer = $(`<article class="layer layer-${option.className}" style="opacity:0"><div class="layer-wrapper"></div><i class="layer-dimmed"></i></article>`);

    $("body").append($layer);

    let $wrapper = $layer.find(".layer-wrapper");
    callback_option = {
        $layer: $layer,
        $target: $layer,
        close() {            
            let delay = option.fadeOut ? option.fadeOutDelay : 0;

            $layer.addClass("layer--is-disabled");

            setTimeout(() => {
                $layer.remove();
                $.unlockBody(); // body 스크롤을 풀기
                if (option.on.close) option.on.close(option); // execute close callback
            }, delay);
        },
    };
    option = $.extend(default_option, callback_option);

    // 공통 팝업 - URL
    switch (option.className) {
        case "alert":
        case "confirm":
            if (HOST.localip || HOST.publish) {
                option.url = SERVER.view + "/components/layer-confirm.jsp";
            } else (
                option.url = "AI플랫폼에서 URL값 입력해주세요"
            )
            break;
    }

    // layer load
    if (option.url) $wrapper.load(option.url + cache, afterLayerLoad);
    else afterLayerLoad();

    // after layer load
    function afterLayerLoad() {
        $layer.css("opacity", "");
        
        // 공통 팝업 - append
        switch (option.className) {
            case "alert":
                $layer.find(".layer-header__title").html(option.message);
                $layer.find(".btn-cancel").remove();
                $layer
                    .find(".btn-agree")
                    .addClass("btn-02")
                    .removeClass("btn-01")
                    .on("click", () => {
                        option.close();
                    });
                break;
            case "confirm":
                $layer.find(".layer-header__title").html(option.message);
                $layer.find(".btn-agree .txt").text(option.btnAgree);
                break;
        }

        // DOM 생성 완료 후
        if (option.fadeIn) $layer.addClass("layer--is-active");
        $layer.formTamplate(); // form 요소 인러랙션 일괄 적용
        $.lockBody(); // body 스크롤을 막기

        // 창닫기
        let $close = $layer.find(".layer__js-btn-close");
        let $dimmed = $layer.find(".layer-dimmed");
        $close.add($dimmed).on("click", () => option.close());        
        
        // complete callback
        if (option.callback) option.callback(option);
        if (option.on.complete) option.on.complete(option);
    }
};
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
