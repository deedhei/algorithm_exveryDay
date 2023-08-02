var reverse = function (x) {
  let num = "",
    j = 0;
  while (x != 0) {
    if (x < 0) {
      x = Math.abs(x);
      num += x % 10;
      num = "-" + num;
      x = Math.floor(x / 10);
    } else {
      num = num + (x % 10);
      x = Math.floor(x / 10);
    }
  }
  console.log("[Log] num-->", num);
  return Math.abs(num) < 2147483648 ? num : 0;
};
reverse(-123);
