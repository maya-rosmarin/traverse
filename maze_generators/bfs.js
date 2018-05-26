import * as manhattan from 'manhattan';
import { createGridArray, createGridGraphic } from './create_grid';

class BFS {
  constructor (width, height) {
    this.grid = createGridArray(width, height)
    this.width = width;
    this.height = height;
    createGridGraphic(width*10, height*10);
  }

  // push all children of every node visited to queue

  generatePaths (startNode) {
    let queue = [[startNode]];
    let pathCells = [startNode];
    while (queue.length > 0) {
      let current = queue.shift();
      let child = this.selectRandomPathChild(this.children(current[0]), pathCells, queue);
      console.log("visiting " + child)
      // queue.push(this.children(current[0]))
      // pathCells.push(this.children(current[0]))
      // let children = this.children(current)
      // debugger
      // queue = queue.concat(children);
      // pathCells = pathCells.concat(children);
      this.animateChild(child, pathCells);
    }
    debugger
    // this.ensureLongPath(pathCells);
    //let tangent = this.generateTangentPaths(this.selectRandomUnvisitedCell());
    // console.log(tangent);
  };

  unvisited () {
    debugger
    let unvisited = [];
    for (let key in this.grid) {
      if (this.grid[key] === false) {
        unvisited.push(key)
      };
    }
    return unvisited;
  }

  nextStep (currentNode, unvisited) {
    debugger
    let children = this.children(currentNode);
    if (children) {
      children = children.filter(child => { return this.children(child).length >= 1 && this.arrayIncludes(unvisited, child) })
      let randomIndex = Math.floor(Math.random() * children.length)
      this.grid[children[randomIndex]] = true;
      return children[randomIndex];
    }
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


  animateChild (child, pathCells) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let i = 0;
    if (child) {
      let interval = setInterval( () => {
      context.fillStyle='black';
      context.fillRect(10*child[0], 10*child[1], 10, 10);
      i++;
    }, 200);
    if (i >= pathCells.length) {
      clearInterval(interval);
      }
    }
  }

  generateTangentPaths (startNode) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    // debugger
    let unvisited = this.unvisited();
    let steps = [];
    if (unvisited) {
      debugger
      let nextStep = this.nextStep(startNode, unvisited);
      for (let i = 0; i < 5; i++) {
        steps.push(nextStep);
        nextStep = this.nextStep(nextStep, unvisited);
      }
    }
    const array = steps.filter(step => step)
    array.forEach(step => {
      console.log(step)
      this.grid[step] = true;
      context.fillStyle='white';
      context.fillRect(10*step[0], 10*step[1], 10, 10);
    })
    return array
  }

  selectRandomUnvisitedCell () {
    // debugger
    let unvisited = this.unvisited();
    let randomIndex = (Math.floor(Math.random() * unvisited.length));
    this.grid[Object.keys(this.grid)[randomIndex]] = true;
    return Object.keys(this.grid)[randomIndex];
  }

  selectRandomPathChild (children, pathCells, queue) {
    children = children.filter(child =>
      { return this.children(child).length > 0 && !this.arrayIncludes(pathCells, child)});

    if (children && children.length > 0) {
      let randomIndex = Math.floor(Math.random() * children.length)
      let child = children[randomIndex];
      pathCells.push(child);
      queue.push([child])
      this.grid[child] = true;
      return child;
    }
  }

  ensureLongPath (pathCells) {
    let sorted;
    pathCells.splice(-1, 1);
    let filtered = pathCells.filter(cell => cell[0] === this.width-1)
    if (!filtered.length) {
      sorted = pathCells.sort((el1, el2) => {
        return el1[0] - el2[0];
      })
      // this.nextStep(sorted.pop(), this.unvisited());
      this.generatePaths(sorted.pop())
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
      if (typeof node === 'string') {
        node = node.split(',').map(i => Number(i))
      }
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
