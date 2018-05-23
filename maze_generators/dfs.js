import * as manhattan from 'manhattan';
import createGrid from './create_grid';

export default class BFS {
  constructor (width, height) {
    this.grid = createGrid(width, height)
  }

  generate (root) {
    let this.grid = createGrid(width, height)
    let queue = [root];
    let visitedNodes = [];
    // mark first node as visited
    this.grid[root] = true;
    while (queue.length) {
      let visited = queue.shift();
      this.grid[visited] = true;
      if (!children(visited, this.grid)) {
        continue;
      }
      for (let i = 0; i < children(visited, this.grid).length; i++) {
        queue.push(children(visited, this.grid)[i]);
      }
    }
    return queue;
  };

  unvisited (this.grid) {
    let unvisited = [];
    for (let key in this.grid) {
      if (this.grid[key] === false) {
        unvisited.push(key)
      };
    }
    return unvisited;
  }

  children (node, this.grid) {
    let childrenNodes = [];
    for (let i = 0; i < this.grid.length; i++) {
      if ((this.grid[i][0] === (node[0] + 1)) || (this.grid[i][1] === node[1] + 1)) {
        childrenNodes.push(this.grid[i]);
      }
    }
    return childrenNodes;
  }
}
