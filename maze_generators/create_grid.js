import * as manhattan from 'manhattan';
import BFS from './bfs';

export const createGridArray = (width, height) => {
  let nodes = [];
  for (let i = 0; i < width; i+=2) {
    for (let j = 0; j < height; j+=2) {
      nodes.push([i, j, false]);
    }
  }
  return nodes;
}

export const createGridGraphic = (width, height) => {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  context.fillStyle = 'black';
  context.fillRect(0, 0, width + 10, height + 10);
  let bw = width;
  let bh = height;
  let p = 0;
}
