/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxStr = "";
  let length = s.length;
  for (let i = 0; i < length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }
  function helper(l, r) {
    // console.log("前", l, r);
    while (l >= 0 && s[l] === s[r] && r < s.length) {
      l--;
      r++;
    }
    let temMaxStr = s.slice(l + 1, r);
    if (maxStr.length < temMaxStr.length) {
      maxStr = temMaxStr;
    }
    // console.log("后", l, r, temMaxStr);
  }
  console.log(maxStr);
  return maxStr;
};
