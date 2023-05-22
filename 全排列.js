var permute = function (nums) {
  const length = nums.length;
  console.log("[Log] length-->", length);
  let result = [],
    used = {};
  if (length == 0) return [];
  function dfs(path) {
    if (path.length == length) {
      result.push(path.slice()); //path path是数组所以你需要去拷贝不然会有问题
      return;
    }
    for (const item of nums) {
      if (used[item]) continue;
      path.push(item);
      used[item] = true;
      dfs(path);
      path.pop();
      used[item] = false;
    }
  }
  dfs([]);
  return result;
};
permute((nums = [1, 2, 3]));
