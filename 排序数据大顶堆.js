/*
 * @description: 这里是描述
 * @date: 2023-04-27 18:56:39  @author: zhuxing
 * @param {arr}: 存储堆的数组
 * @param {n}: 数组的长度
 * @param {i}: 待维护节点的下标
 */
function heapify(arr, n, i) {
  let largest = i; // 父节点
  let lSon = i * 2 + 1; // 左孩子
  let rSon = i * 2 + 2; // 右孩子
  if (lSon < n && arr[largest] < arr[lSon]) largest = lSon;
  if (rSon < n && arr[largest] < arr[rSon]) largest = rSon;
  if (largest !== i) {
    [arr[largest], arr[i]] = [arr[i], arr[largest]];
    heapify(arr, n, largest);
  }
}

function heap_sort(arr, n) {
  // 建堆
  for (let i = n >> 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  // 排序
  for (let i = n - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0);
  }
}

function sortArray(arr) {
  let n = arr.length;
  heap_sort(arr, n);
  return arr;
}
sortArray([3, 4, 1, 5, 8, 2, 5]);
