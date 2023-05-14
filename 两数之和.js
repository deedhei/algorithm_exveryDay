var twoSum = function (nums, target) {
  const preNum = {};
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i];
    let targetNum = target - curNum;
    let targetIndex = preNum[targetNum];
    if (targetIndex !== undefined) {
      return [targetIndex, i];
    } else {
      preNum[curNum] = i;
    }
  }
};
console.log(
  "[Log] twoSum((nums = [2, 7, 11, 15]), (target = 9))-->",
  twoSum((nums = [2, 7, 11, 15]), (target = 9))
);
