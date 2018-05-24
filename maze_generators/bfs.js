import * as manhattan from 'manhattan';
import { createGridArray, createGridGraphic } from './create_grid';

class BFS {
  constructor (width, height) {
    this.grid = createGridArray(width, height)
    createGridGraphic(width*5, height*5);
  }



  animate (coords) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let i = 0;
      let interval = setInterval( () => {
        context.fillStyle='black';
        context.fillRect(5*coords[i][0], 5*coords[i][1], 5, 5);
        i++;
      }, 100);
      if (i >= coords.length) {
        clearInterval(interval);
      }
  }

  unvisited () {
    let unvisited = [];
    for (let key in this.grid) {
      if (this.grid[key] === false) {
        unvisited.push(key)
      };
    }
    return unvisited;
  }

  generateSteps (startNode) {
    let path = [];
    let children = this.children(startNode);
    for (i = 0; i < children.length; i++) {
      
    }
  }

  // if not already labeled as an open path, deault to wall

  generate (root) {
    let queue = [[root]];
    let visitedNodes = [root];
    while (queue.length) {
      let visited = queue.shift();
      if (typeof visited === "string") {
        visited = visited.split(",").map(i => Number(i));
      } else if (visited.length === 1) {
        visited = visited[0];
      }
      this.grid[visited] = true;
      let children = this.children(visited)
      if (!children.length) {
        continue;
      }
      for (let i = 0; i < children.length; i++) {
        if (!this.arrayIncludes(visitedNodes, children[i])) {
          queue.push(children[i]);
          visitedNodes.push(children[i])
        }
      }
    }
    return visitedNodes;
  };

  arrayIncludes (array, node) {
    if (typeof node === 'string') {
      node = node.split(',').map(i => Number(i));
    }
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'string') {
        array[i] = array[i].split(',').map(i => Number(i));
      }
      if (array[i][0] == node[0] && array[i][1] == node[1]) {
        return true;
      }
    }
    return false;
  }

  children (node) {
    let childrenNodes = [];
      Object.keys(this.grid).map(key => {
        let coord = key.split(',').map(i => Number(i));
        if ((coord[0] == node[0] && coord[1] == node[1] + 1) || (coord[0] == node[0] && coord[1] == node[1] - 1) || (coord[0] == node[0] + 1 && coord[1] == node[1]) || (coord[0] == node[0] - 1 && coord[1] == node[1])) {
          childrenNodes.push(coord);
        }
      }
    )
    return childrenNodes;
  }

}

export default BFS
