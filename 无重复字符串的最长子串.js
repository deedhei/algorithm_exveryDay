// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) {
    return 0;
  }
  let maxLength = 0,
    num = 0;
  let set = new Set();
  while (num < s.length) {
    for (let index = num; index < s.length; index++) {
      let item = s[index];
      if (!set.has(item)) {
        set.add(item);
      } else {
        if (set.size > maxLength) {
          maxLength = set.size;
        }
        set = new Set();
        num++;
        break;
      }
    }
  }
  console.log([...set].length, maxLength, set);
  return maxLength;
};

lengthOfLongestSubstring("pwwkew");
