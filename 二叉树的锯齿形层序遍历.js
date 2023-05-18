// https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/submissions/
var zigzagLevelOrder = function (root) {
  const dp = [];
  const check = function (node, level, direction) {
    if (!node) {
      return;
    }
    if (!dp[level]) {
      dp[level] = [node.val];
    } else if (direction) {
      dp[level].push(node.val);
    } else {
      dp[level].unshift(node.val);
    }
    check(node.left, level + 1, !direction);
    check(node.right, level + 1, !direction);
  };
  check(root, 0, true);
  return dp;
};
zigzagLevelOrder((root = []));
