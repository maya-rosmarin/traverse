import * as manhattan from 'manhattan';
import createGrid from './create_grid';

class BFS {
  constructor (width, height) {
    this.grid = createGrid(width, height)
  }

  generate (root) {
    let queue = [root];
    let unvisited = [];
    for (let key in this.grid) {
      if (this.grid[key] === false) {
        unvisited.push(key)
      };
    }
    // mark first node as visited
    this.grid[root] = true;
    while (queue.length) {
      visited = queue.shift();
      this.grid[visited] = true;
      if (!visited.children) {
        continue;
      }
      for (let i = 0; i < visited.children.length; i++) {
        queue.push(visited.children[i]);
      }
    }
  };
}
