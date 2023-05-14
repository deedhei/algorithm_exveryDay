var numIslands = function (grid) {
  let rows = grid.length,
    cols = grid[0].length;
  if (rows == 0 || cols == 0) {
    return count;
  }
  let marked = new Array(rows);
  for (let i = 0; i < marked.length; i++) {
    marked[i] = new Array(cols).fill(false);
  }
  let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let count = 0;

  // console.log("[Log] marked-->", marked);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!marked[i][j] && grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  function dfs(currentX, currentY) {
    marked[currentX][currentY] = true;

    for (let k = 0; k < direction.length; k++) {
      let newX = currentX + direction[k][0];
      let newY = currentY + direction[k][1];
      if (
        isValid(newX, newY) &&
        !marked[newX][newY] &&
        grid[newX][newY] === "1"
      ) {
        dfs(newX, newY);
      }
    }
  }

  function isValid(vaildX, vaildY) {
    return vaildX >= 0 && vaildX < rows && vaildY >= 0 && vaildY < cols;
  }
  return count;
  console.log("[Log] count-->", count);
};
numIslands(
  (grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
