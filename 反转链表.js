var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  console.log("[Log] prev-->", prev);
  return prev;
};
reverseList([1, 2, 3, 4]);
