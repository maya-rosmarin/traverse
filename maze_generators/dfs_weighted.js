import * as manhattan from 'manhattan';
import { createGridArray, createGridGraphic } from './create_grid';
import * as DFS from './dfs';

export default class DFSWeighted {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    createGridGraphic(width*10, height*10);
    this.width = width;
    this.height = height;
    this.stack = []
  }

  animate (startNode) {
    debugger
    let canvas = document.getElementById("canvas-4");
    let context = canvas.getContext("2d");
    let path = this.generatePaths(startNode);
    debugger
    let connector;
    let i = 0;
    let interval = setInterval( () => {
      if (i === 0) {
        connector = null;
      } else {
        connector = this.connector(path[i-1], path[i])
      }
      if (connector) {
        context.fillRect(10*connector[0] + 10, 10*connector[1] + 10, 10, 10) }
        context.fillRect(10*path[i][0], 10*path[i][1], 10, 10);
        i++;
        if (i >= path.length) {
          clearInterval(interval);
        }
      }, 30);
      context.fillStyle='pink';
      context.fillRect(0, 10, 10, 10);
  }

  connector (startNode, node) {
    debugger
    let connector;
      if (startNode[0] == node[0] && startNode[1] == node[1] + 2) {
        connector = [node[0], node[1] + 1];
      } else if (startNode[0] == node[0] && startNode[1] == node[1] - 2) {
        connector = [node[0], node[1] - 1];
      } else if (startNode[0] == node[0] + 2 && startNode[1] == node[1]) {
        connector = [node[0] + 1, node[1]];
      } else if (startNode[0] == node[0] - 2 && startNode[1] == node[1]) {
        connector = [node[0] - 1, node[1]];
      }
    return connector;
  }

  generatePaths (startNode) {
    debugger
    startNode[2] = true;
    this.stack.push(startNode);
    let last = startNode;
    while (this.unvisited().length) {
      let step = this.nextStep(last);
      if (!step) {
        last = this.backtrack(-1);
      } else {
        step[2] = true;
        this.stack.push(step);
        last = this.stack.slice(-1)[0];
      }
    }
    console.log(this.stack);
    return this.stack;
  }

  nextStep (startNode) {
    let neighbors = this.neighbors(startNode).filter(neighbor => !this.isVisited(neighbor));
    if (neighbors == null || neighbors.length == 0) {
      return null;
    }
    neighbors = neighbors.sort((node1, node2) => {
      return manhattan(node1.slice(-1)[0], [18, 18]) - manhattan(node2.slice(-1)[0], [18, 18])
    });
    return neighbors[0];
  }

  unvisited () {
    return this.grid.filter(cell => !this.isVisited(cell))
  }

  isVisited (node) {
    return node[2] === true
  }

  backtrack (n) {
    let current = this.stack.slice(n)[0];
    if (this.nextStep(current)) {
      this.stack.push(current)
      return current;
    } else {
      n--;
      return this.backtrack(n);
    }
  }

  neighbors (startNode) {
    let nodes = [];
    this.grid.forEach((node) => {
      if ((startNode[0] == node[0] && startNode[1] == node[1] + 2) || (startNode[0] == node[0] && startNode[1] == node[1] - 2) || (startNode[0] == node[0] + 2 && startNode[1] == node[1]) || (startNode[0] == node[0] - 2 && startNode[1] == node[1])) {
        nodes.push(node);
      }
    })
    return nodes;
  }
}