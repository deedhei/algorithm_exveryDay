/**
 * @param {number[]} nums
 * @return {number}
 */
// [-1, 2, -4, 3, 6, -3, 2, -1];
// var maxSubArray = function (nums) {
//   let pre = 0,
//     maxNum = nums[0];
//   nums.forEach((item) => {
//     pre = Math.max(pre + item, item);
//     maxNum = Math.max(maxNum, pre);
//   });
// };

var maxSubArray = function (nums) {
  let sum = 0,
    maxNum = nums[0];
  nums.forEach((item) => {
    if (sum > 0) {
      sum += item;
    } else {
      sum = item;
    }
    maxNum = Math.max(maxNum, sum);
  });
  return maxNum;
};
