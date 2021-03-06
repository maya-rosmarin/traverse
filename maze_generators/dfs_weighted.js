import * as manhattan from 'manhattan';
import { createGridArray, createGridGraphic } from './create_grid';
import * as DFSUtil from './dfs_util';

export default class DFSWeighted {
  constructor (width, height, canvasId) {
    this.grid = createGridArray(width, height);
    createGridGraphic(width*10, height*10);
    this.canvasId = canvasId;
    this.stack = []
    this.interval = null;
  }

  clearCanvas () {
    let canvas = document.getElementById(this.canvasId);
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  animate (startNode) {
    let canvas = document.getElementById(this.canvasId);
    let context = canvas.getContext("2d");
    let path = this.generatePaths(startNode);
    let connector;
    let i = 0;
    this.interval = setInterval( () => {
      if (i === 0) {
        connector = null;
      } else {
        connector = DFSUtil.connector(path[i-1], path[i])
      }
      if (connector) {
        context.fillRect(10*connector[0], 10*connector[1], 10, 10) }
        context.fillRect(10*path[i][0], 10*path[i][1], 10, 10);
        i++;
        if (i >= path.length) {
          clearInterval(this.interval);
        }
      }, 20);
      context.fillStyle='#B7979C';
      context.fillRect(0, 10, 10, 10);
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
    let neighbors = DFSUtil.neighbors(startNode, this.grid).filter(neighbor => !DFSUtil.isVisited(neighbor));
    if (neighbors == null || neighbors.length == 0) {
      return null;
    }
    neighbors = neighbors.sort((node1, node2) => {
      return manhattan(node1.slice(-1)[0], [18, 18]) - manhattan(node2.slice(-1)[0], [18, 18])
    });
    return neighbors[0];
  }

}
