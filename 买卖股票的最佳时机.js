// var maxProfit = function (prices) {
//   let maxNum = 0;
//   for (let i = 0; i < prices.length; i++) {
//     let l = i,
//       r = prices.length - 1;
//     while (l < r) {
//       console.log("[Log] [2,4,1]-->", l, r);
//       if (prices[l] - prices[r] <= 0) {
//         maxNum =
//           maxNum < Math.abs(prices[l] - prices[r])
//             ? Math.abs(prices[l] - prices[r])
//             : maxNum;
//       }
//       r--;
//     }
//   }
//   console.log("[Log] maxNum-->", maxNum);
//   return maxNum;
// };

var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  for (const price of prices) {
    max = Math.max(max, price - min);
    min = Math.min(min, price);
  }
  console.log("[Log] max-->", max);
  return max;
};
maxProfit([7, 1, 5, 3, 6, 4]);
