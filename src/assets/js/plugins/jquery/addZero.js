/**
 *    [예 : 9 -> '09']
 *    addZero(9)
 *
 *    [예 : 9 -> '00009'];
 *    addZero({
 *        number : 9,
 *        size : 5
 *    });
 *
 *    or
 *
 *    addZero(9,5);
 */

import $ from "jquery";

$.addZero = function () {
  var arg = arguments[0];
  var num = arg && arg.number ? arg.number : arg;
  num = num.toString();
  var size = arg.size || arguments[1] || 2;
  var zero = "";
  for (var i = 0; i < size - num.length; i++) {
    zero = "0" + zero;
  }
  return zero + num;
};
