var addStrings = function (num1, num2) {
  let res = "";
  num1 = num1.split("");
  num2 = num2.split("");
  let temp = 0;
  while (num1.length || num2.length || temp) {
    temp += ~~num1.pop() + ~~num2.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  console.log("[Log] res-->", res);
  return res;
};
addStrings((num1 = "11"), (num2 = "123"));
