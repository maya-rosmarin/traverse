import * as manhattan from 'manhattan';
import createGrid from './create_grid';

class BFS {
  constructor (width, height) {
    this.grid = createGrid(width, height)
  }

  generate (root) {
    let queue = [root];
    let visitedNodes = [];
    // mark first node as visited
    while (queue.length) {
      let visited = queue.shift();
      if (typeof visited === "string") {
        visited = visited.split(",").map(i => Number(i));
      }
      this.grid[visited] = true;
      let children = this.children(visited)
      if (!children) {
        continue;
      }
      for (let i = 0; i < children.length; i++) {
        if (!visitedNodes.includes(children[i])) {
          queue.push(children[i]);
          visitedNodes.push(children[i])
        }
      }
      console.log(queue)
    }
    // let unvisited = this.unvisited(this.grid);
    return visitedNodes;
  };

  unvisited () {
    let unvisited = [];
    for (let key in this.grid) {
      if (this.grid[key] === false) {
        unvisited.push(key)
      };
    }
    return unvisited;
  }

  children (node) {
    let childrenNodes = [];
      Object.keys(this.grid).map(key => {
        if ((key[0] == node[0] && key[2] == node[1] + 1) || (key[0] == node[0] && key[2] == node[1] - 1) || (key[0] == node[0] + 1 && key[2] == node[1]) || (key[0] == node[0] - 1 && key[2] == node[1])) {
          childrenNodes.push(key);
        }
      }
    )
    return childrenNodes;
  }
}

export default BFS
