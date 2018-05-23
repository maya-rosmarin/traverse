import * as manhattan from 'manhattan';
import createGrid from './create_grid';

export const generate = (width, height, root) => {
  let grid = createGrid(width, height)
  let queue = [root];
  let visitedNodes = [];
  // mark first node as visited
  grid[root] = true;
  while (queue.length) {
    let visited = queue.shift();
    grid[visited] = true;
    if (!children(visited, grid)) {
      continue;
    }
    for (let i = 0; i < children(visited, grid).length; i++) {
      queue.push(children(visited, grid)[i]);
    }
  }
  return unvisited(grid);
};

export const unvisited = (grid) => {
  let unvisited = [];
  for (let key in grid) {
    if (grid[key] === false) {
      unvisited.push(key)
    };
  }
  return unvisited;
}

export const children = (node, grid) => {
  let childrenNodes = [];
  for (let i = 0; i < grid.length; i++) {
    if ((grid[i][0] === (node[0] + 1)) || (grid[i][1] === node[1] + 1)) {
      childrenNodes.push(grid[i]);
    }
  }
  return childrenNodes;
}
