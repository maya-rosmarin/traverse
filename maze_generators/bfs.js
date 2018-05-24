import * as manhattan from 'manhattan';
import { createGridArray, createGridGraphic } from './create_grid';

class BFS {
  constructor (width, height) {
    this.grid = createGridArray(width, height)
    createGridGraphic(width*5, height*5);
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

  nextStep (currentNode) {
    debugger
    let children = this.children(currentNode);
    children = children.filter(child => { return this.children(child).length >= 2 && this.arrayIncludes(this.unvisited(), child) })
    let randomIndex = Math.floor(Math.random() * children.length)
    this.grid[children[randomIndex]] = true;
    console.log(children[randomIndex]);
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

  generatePaths (startNode) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let queue = [[startNode]];
    let pathCells = [startNode];
    while (queue.length) {
      let current = queue.shift();
      let children = this.children(current[0]);
        debugger
        children = children.filter(child => { return this.children(child).length >= 1 && !this.arrayIncludes(pathCells, child) })
        let randomIndex = Math.floor(Math.random() * children.length)
        debugger
        this.grid[children[randomIndex]] = true;
        pathCells.push(children[randomIndex]);
        queue.push([children[randomIndex]])
        context.fillStyle='black';
        context.fillRect(5*children[randomIndex][0], 5*children[randomIndex][1], 5, 5);
        debugger
      }
      return pathCells;
    };



  //     for (let i = 0; i < children.length; i++) {
  //       if (this.children(children[i]).length >= 2) {
  //         queue.push(children[i]);
  //         pathCells.push(children[i]);
  //         context.fillStyle='black';
  //         context.fillRect(5*children[i][0], 5*children[i][1], 5, 5);
  //       }
  //     }
  //   }
  //   console.log(pathCells);
  //   console.log(queue);
  // }

  // if not already labeled as an open path, default to wall

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
