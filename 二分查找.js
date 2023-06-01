var search = function (nums, target) {
  let length = nums.length;
  if (length == 0) {
    return -1;
  }
  let find = -1;
  function seatchMid(left, right) {
    let mid = Math.floor((right - left) / 2) + left;
    console.log("[Log] mid-->", left, mid, nums[mid], right);
    if (left == right + 1) {
      return;
    } else if (nums[mid] > target) {
      seatchMid(left, mid - 1);
    } else if (nums[mid] < target) {
      seatchMid(mid + 1, right);
    } else if (nums[mid] == target) {
      find = mid;
    }
  }

  seatchMid(0, length);
  return find;
};
let value = search((nums = [5]), (target = 1));
console.log("[Log] value-->", value);
