//leetcode.cn/problems/string-to-integer-atoi/solutions/2266588/bi-ren-zhi-jie-regexp-by-sktxinpeng-tv8k/
/**
 * @param {string} s
 * @return {number}
 */
https: var myAtoi = function (s: string) {
  const number = parseInt(s, 10);

  if (isNaN(number)) {
    return 0;
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
    return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
    return number;
  }
};
