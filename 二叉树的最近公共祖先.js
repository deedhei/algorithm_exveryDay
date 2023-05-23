var lowestCommonAncestor = function (root, p, q) {
  if (root == null || root == p || root == q) {
    return root;
  }
  let l = lowestCommonAncestor(root.left, p, q);
  let r = lowestCommonAncestor(root.right, p, q);
  if (l == null) return r;
  if (r == null) return l;
  console.log("[Log] root-->", root);
  return root;
};
let data = lowestCommonAncestor(
  (root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
  (p = 5),
  (q = 1)
);
console.log("[Log] root-->", data);
