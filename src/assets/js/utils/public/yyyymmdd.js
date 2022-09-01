import "../number/number";

window.yyyymmdd = function (date) {
    let result = date.getFullYear() + "-" + (date.getMonth() + 1).numToStr_addZero() + "-" + date.getDate().numToStr_addZero();

    return result;
};
