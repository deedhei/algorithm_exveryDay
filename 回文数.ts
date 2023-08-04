function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  if (x >= 0 && x <= 9) {
    return true;
  }
  if (x > 9 && x % 10 === 0) {
    return false;
  }
  let ans = 0;
  let cur = x;
  while (cur > 0) {
    ans = ans * 10 + (cur % 10);
    cur = Math.floor(cur / 10);
  }
  return ans === x;
}
isPalindrome(121);
