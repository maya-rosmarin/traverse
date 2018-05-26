import * as manhattan from 'manhattan';
import { createGridArray, createGridGraphic } from './create_grid';

export default class DFS {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    createGridGraphic(width*10, height*10);
    this.stack = []
  }

  animate (startNode) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let path = this.generatePaths(startNode);
    let i = 0;
    let interval = setInterval( () => {
      context.fillStyle='white';
      context.fillRect(10*path[i][0], 10*path[i][1], 10, 10);
      i++;
    }, 100);
    if (i >= path.length) {
      clearInterval(interval);
    }
  }

  generatePaths (startNode) {
    debugger
    startNode[2] = true;
    this.stack.push(startNode);
    let last = startNode;
    while (this.unvisited().length) {
      let step = this.nextStep(last);
      if (!step) {
        debugger
        last = this.backtrack(-1);
      } else {
        step[2] = true;
        this.stack.push(step);
        last = this.stack.slice(-1)[0];
      }
    }

    console.log(this.stack)
    return this.stack;
  }

  nextStep (startNode) {
    let neighbors = this.neighbors(startNode).filter(neighbor => !this.is_visited(neighbor));
    if (neighbors == null || neighbors.length == 0) {
      return null;
    }
    let randomIndex = Math.floor(Math.random() * neighbors.length);
    return neighbors[randomIndex];
  }

  unvisited () {
    return this.grid.filter(cell => !this.is_visited(cell))
  }

  is_visited(cell) {
    return cell[2] === true
  }

  backtrack (n) {
    debugger
    // if (n < -(this.stack.length)) {
      let current = this.stack.slice(n)[0];
      if (this.nextStep(current)) {
        this.stack.push(current)
        return current;
      } else {
        n--;
        return this.backtrack(n);
      }
    // }
  }

  neighbors (startNode) {
    let nodes = [];
    this.grid.forEach((node) => {
      if ((startNode[0] == node[0] && startNode[1] == node[1] + 1) || (startNode[0] == node[0] && startNode[1] == node[1] - 1) || (startNode[0] == node[0] + 1 && startNode[1] == node[1]) || (startNode[0] == node[0] - 1 && startNode[1] == node[1])) {
        nodes.push(node);
      }
    })
    return nodes;
  }


}

class Node {
  constructor(row, col) {
    this.row = row
    this.col = col
    this.visited = false
  }
}
