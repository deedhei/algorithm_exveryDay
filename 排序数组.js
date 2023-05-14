// 冒泡排序
// var sortArray = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//       }
//     }
//   }
//   return nums;
// };

// [3, 4, 1, 5, 8, 2, 5];
// 选择排序
// var sortArray = function (nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let midValue = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[midValue] > nums[j]) {
//         midValue = j;
//       }
//     }
//     [nums[midValue], nums[i]] = [nums[i], nums[midValue]];
//   }
//   console.log("[Log] nums-->", nums);
//   return nums;
// };

//  插入排序
// var sortArray = function (nums) {
//   let preIndex, current;
//   for (let i = 1; i < nums.length; i++) {
//     preIndex = i - 1;
//     // preIndex = 1 , current = 1 ,   3,4,4,5,6,2,5
//     // preIndex = 0, current = 1,
//     current = nums[i];
//     while (preIndex >= 0 && nums[preIndex] > current) {
//       nums[preIndex + 1] = nums[preIndex];
//       preIndex--;
//     }
//     nums[preIndex + 1] = current;
//   }
//   console.log("[Log] nums-->", nums);
//   return nums;
// };

// 希尔排序
// var sortArray = function (nums) {
//   let n = nums.length;
//   for (let gap = n >> 1; gap > 0; gap >>= 1) {
//     for (let i = 0; i < gap; i++) {
//       for (let j = i + gap; j < n; j += gap) {
//         let preIndex = j - gap;
//         let current = nums[j];
//         while (preIndex >= 0 && nums[preIndex] > current) {
//           nums[preIndex + gap] = nums[preIndex];
//           preIndex -= gap;
//         }
//         nums[preIndex + gap] = current;
//       }
//     }
//   }
//   console.log("[Log] nums-->", nums);
// };

// 0, 1, 2, 3, 4, 5, 6;
sortArray([3, 4, 1, 5, 8, 2, 5]);
