import * as manhattan from 'manhattan';
import BFS from './bfs';

export const createGridArray = (width, height) => {
  let nodes = {};
  let xCoords = [];
  let yCoords = [];
  for (let i = 0; i < width; i++) {
    xCoords.push(i)
  }
  for (let j = 0; j < height; j++) {
    yCoords.push(j)
  }
  for (let i = 0; i < xCoords.length; i++) {
    for (let j = 0; j < yCoords.length; j++) {
      nodes[[xCoords[i], yCoords[j]]] = 'empty';
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
  context.fillStyle = 'white';
  context.fillRect(0, 0, 5, 5);
  function drawGrid () {
    for (let i = 0; i <= bw; i += 5) {
      context.moveTo(0.5 + i, 0);
      context.lineTo(0.5 + i, bh);
    }
    for (let j = 0; j <= bh; j += 5) {
      context.moveTo(0, 0.5 + j);
      context.lineTo(bw, 0.5 + j);
    }
    context.strokeStyle = 'black';
    context.stroke();
  }
  drawGrid();
}
