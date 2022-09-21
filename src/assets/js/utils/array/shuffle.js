Array.prototype.shuffle = function () {
  var curIdx = this.length,
    tempVal,
    rndIdx;
  while (0 !== curIdx) {
    rndIdx = Math.floor(Math.random() * curIdx);
    curIdx -= 1;
    tempVal = this[curIdx];
    this[curIdx] = this[rndIdx];
    this[rndIdx] = tempVal;
  }
};

/**
 *
 *  배열을 n 개씩 나누어 자르기
 *
 */
Array.prototype.division = function (_slice) {
  const beforeArr = this;
  const length = beforeArr.length;
  const divide = Math.floor(length / _slice) + (Math.floor(length % _slice) > 0 ? 1 : 0);
  const newArray = [];

  for (let i = 0; i <= divide; i++) {
    // 배열 0부터 n개씩 잘라 새 배열에 넣기
    newArray.push(beforeArr.splice(0, _slice));
  }

  return newArray;
};
