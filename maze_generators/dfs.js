import * as manhattan from 'manhattan';
import { createGridArray, createGridGraphic } from './create_grid';
import * as DFSUtil from './dfs_util';

export default class DFS {
  constructor (width, height, canvasId) {
    this.grid = createGridArray(width, height);
    createGridGraphic(width*10, height*10);
    this.canvasId = canvasId;
    this.width = width;
    this.height = height;
    this.stack = [];
    this.interval = null;
  }

  clearCanvas () {
    let canvas = document.getElementById(this.canvasId);
    let context = canvas.getContext('2d');
    context.clearRect(10, 10, canvas.width, canvas.height);
  }

  animate (startNode, callback, fillColor) {
    let canvas = document.getElementById(this.canvasId);
    let context = canvas.getContext("2d");
    let path = this.generatePaths(startNode);
    let connector;
    context.fillStyle='#B7979C'
    let i = 0;
    this.interval = setInterval( () => {
      if (i === 0) {
        connector = null;
      } else {
        connector = DFSUtil.connector(path[i-1], path[i])
      }
      if (connector && !this.arrayIncludes(path, connector)) {
        context.fillRect(10*connector[0] + 10, 10*connector[1] + 10, 10, 10)
      }
      context.fillRect(10*path[i][0] + 10, 10*path[i][1] + 10, 10, 10);
      i++;
      if (i >= path.length) {
        clearInterval(this.interval);
        context.fillRect(410, 400, 10, 10)
        document.getElementById("real-thing").innerHTML = 'Looks like the real thing!'
        if (callback) {
          document.getElementById("solved").innerHTML = 'Solving...'
          return callback();
        }
        return 'finished';
      }
    }, 20);
  }

  generatePaths (startNode) {
    startNode[2] = true;
    this.stack.push(startNode);
    let last = startNode;
    while (DFSUtil.unvisited(this.grid).length) {
      let step = this.nextStep(last);
      if (!step) {
        last = this.backtrack(-1);
      } else {
        step[2] = true;
        this.stack.push(step);
        last = this.stack.slice(-1)[0];
      }
    }
    return this.stack;
  }

  nextStep (startNode) {
    let neighbors = this.neighbors(startNode).filter(neighbor => !DFSUtil.isVisited(neighbor));
    if (neighbors == null || neighbors.length == 0) {
      return null;
    }
    let randomIndex = Math.floor(Math.random() * neighbors.length);
    return neighbors[randomIndex];
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

  arrayIncludes (array, node) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] == node[0] && array[i][1] == node[1]) {
        return true;
      }
    }
    return false;
  }

}
