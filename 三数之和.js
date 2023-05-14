var threeSum = function (nums) {
  let ans = [];
  const length = nums.length;
  if (nums == null || nums.length < 3) {
    return ans;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let L = i + 1;
    let R = length - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) L++; // 去重
        while (L < R && nums[R] === nums[R - 1]) R--;
        R--;
        L++;
      } else if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      }
    }
  }
  return ans;
};
