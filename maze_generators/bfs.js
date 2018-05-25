import * as manhattan from 'manhattan';
import { createGridArray, createGridGraphic } from './create_grid';

class BFS {
  constructor (width, height) {
    this.grid = createGridArray(width, height)
    this.grid.width = width;
    this.grid.height = height;
    createGridGraphic(width*10, height*10);
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
    let unvisited = this.unvisited();
    let children = this.children(currentNode);
    children = children.filter(child => { return this.children(child).length >= 2 && this.arrayIncludes(unvisited, child) })
    let randomIndex = Math.floor(Math.random() * children.length)
    this.grid[children[randomIndex]] = true;
    return children[randomIndex];
  }

  animate (coords) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let i = 0;
    let interval = setInterval( () => {
      context.fillStyle='white';
      context.fillRect(10*coords[i][0], 10*coords[i][1], 10, 10);
      i++;
    }, 100);
    if (i >= coords.length) {
      clearInterval(interval);
    }
  }

  generatePaths (startNode) {
    let queue = [[startNode]];
    let pathCells = [startNode];
    let wallCells = [];
    let walls;
    while (queue.length) {
      let current = queue.shift();
        let child = this.selectRandomPathChild(this.children(current[0]), pathCells, wallCells, queue);
          debugger
        this.animateChild(child, pathCells);
          // let i = 0;
          // if (child) {
          //   interval = setInterval( () => {
          //   context.fillStyle='white';
          //   context.fillRect(10*child[0], 10*child[1], 10, 10);
          //   i++;
          // }, 200);
          // if (i >= pathCells.length) {
          //   clearInterval(interval);
          // }
          // for (let j = 0; j < wallCells.length; j++) {
          //   context.fillStyle='black';
          //   context.fillRect(10*wallCells[j][0], 10*wallCells[j][1], 10, 10);
          // }
        // }
      }
    this.ensureLongPath(pathCells);
    console.log(`wallcells: ${wallCells.length}`);
    console.log(`unvisited: ${this.unvisited().length}`);
    console.log(`pathcells: ${pathCells.length}`);
  };

  animateChild (child, pathCells) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    debugger
    let i = 0;
    if (child) {
      let interval = setInterval( () => {
      context.fillStyle='white';
      context.fillRect(10*child[0], 10*child[1], 10, 10);
      i++;
    }, 200);
    if (i >= pathCells.length) {
      clearInterval(interval);
      }
    }
  }

  generateTangentPaths (startNode, unvisited) {
    let length = unvisited.length;
    while (length) {
      this.generatePaths(startNode);
    }
  }

  selectRandomPathChild (children, pathCells, wallCells, queue) {
    if (children) {
    let randomIndex = Math.floor(Math.random() * children.length)
      children = children.filter(child =>
        { return this.children(child).length >= 1 && !this.arrayIncludes(pathCells, child) && !this.arrayIncludes(wallCells, child)});
      wallCells = wallCells.concat(children.slice(0, randomIndex).concat(children.slice(randomIndex + 1)))
      let child = children[randomIndex];
      pathCells.push(child);
      queue.push([child])
      this.grid[child] = true;
      return child;
      debugger
    }
  }

  ensureLongPath (pathCells) {
    let sorted;
    pathCells.splice(-1, 1);
    let filtered = pathCells.filter(cell => cell[0] === this.grid.width-1)
    if (!filtered.length) {
      sorted = pathCells.sort((el1, el2) => {
        return el1[0] - el2[0];
      })
      this.generatePaths(sorted.pop());
    }
  }

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


  // animatePath (node, limit) {
  //   let i = 0;
  //   let interval = setInterval( () => {
  //     context.fillStyle='white';
  //     context.fillRect(10*node[0], 10*node[1], 10, 10);
  //     i++;
  //     },
  //   2000);
  //   if (i >= limit) {
  //     clearInterval(interval);
  //   }
  // }

  children (node) {
    if (node) {
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

}

export default BFS
