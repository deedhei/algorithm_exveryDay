var findKthLargest = function (nums, k) {
  let ans = nums[0];
  const quickSort = (nums, k) => {
    if (nums.length < 2) {
      ans = nums[0];
      return;
    }
    // const midIndex = Math.floor(Math.random(nums.length)); // 随机取下标，耗时更长
    const minIndex = nums.length >> 1;
    const mid = nums[minIndex];
    let leftArr = [],
      rightArr = [];
    for (let i = 0; i < nums.length; i++) {
      if (i == minIndex) {
        continue;
      }
      if (nums[i] <= mid) {
        leftArr.push(nums[i]);
      }
      if (nums[i] > mid) {
        rightArr.push(nums[i]);
      }
    }
    const q = rightArr.length + 1;
    if (q == k) {
      ans = mid;
      return;
    } else if (q > k) {
      quickSort(rightArr, k);
    } else {
      quickSort(leftArr, k - q);
    }
  };
  quickSort(nums, k);
  return ans;
};
findKthLargest([3, 2, 1, 4, 6, 5], (k = 2));
