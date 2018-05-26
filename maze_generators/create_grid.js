import * as manhattan from 'manhattan';
import BFS from './bfs';

export const createGridArray = (width, height) => {
  let nodes = [];
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      nodes.push([i, j, false]);
    }
  }
  return nodes;
}

export const createGridGraphic = (width, height) => {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  context.fillStyle = 'pink';
  context.fillRect(0, 0, width, height);
  let bw = width;
  let bh = height;
  let p = 0;
  context.fillStyle = 'black';
  context.fillRect(0, 0, 10, 10);
  function drawGrid () {
    for (let i = 0; i <= bw; i += 10) {
      context.moveTo(0.5 + i, 0);
      context.lineTo(0.5 + i, bh);
    }
    for (let j = 0; j <= bh; j += 10) {
      context.moveTo(0, 0.5 + j);
      context.lineTo(bw, 0.5 + j);
    }
    context.strokeStyle = 'white';
    context.stroke();
  }
  drawGrid();
}
