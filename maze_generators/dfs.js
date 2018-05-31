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
    this.stack = []
  }

  animate (startNode, callback, fillColor) {
      let canvas = document.getElementById(this.canvasId);
      let context = canvas.getContext("2d");
      let path = this.generatePaths(startNode);
      let connector;
      context.fillStyle='white'
      let i = 0;
      let interval = setInterval( () => {
        if (i === 0) {
          connector = null;
        } else {
          connector = this.connector(path[i-1], path[i])
        }
        if (connector) {
          context.fillRect(10*connector[0] + 10, 10*connector[1] + 10, 10, 10)
        }
        context.fillRect(10*path[i][0] + 10, 10*path[i][1] + 10, 10, 10);
        i++;
        if (i >= path.length) {
          clearInterval(interval);
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
    debugger
    startNode[2] = true;
    this.stack.push(startNode);
    let last = startNode;
    while (DFSUtil.unvisited(this.grid).length) {
      let step = this.nextStep(last);
      if (!step) {
        last = DFSUtil.backtrack(-1, this.stack, this.nextStep)
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
    let randomIndex = Math.floor(Math.random() * neighbors.length);
    return neighbors[randomIndex];
  }

}

// class Node {
//   constructor(row, col) {
//     this.row = row
//     this.col = col
//     this.visited = false
//   }
// }
