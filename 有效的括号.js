var isValid = function (s) {
  let str = ["(", ")", "[", "]", "{", "}"];
  let length = s.length;
  if (length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < length / 2; i++) {
    s = s.replace("{}", "");
    s = s.replace("()", "");
    s = s.replace("[]", "");
  }
  return s.length == 0 ? true : false;
};
console.log('[Log] isValid((s = "()[]{}"))-->', isValid((s = "()[]{}")));
