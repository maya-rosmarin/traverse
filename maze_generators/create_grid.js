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
  let canvas = document.getElementById("canvas-1");
  let context = canvas.getContext("2d");
  context.fillStyle = 'black';
  context.fillRect(0, 0, width + 10, height + 10);
  context.fillStyle = 'white';
  context.fillRect(0, 10, 10, 10);
  context.fillRect(width, height - 10, 10, 10);
}

export const createGridStatic = (width, height) => {
  let canvas = document.getElementById("canvas-2");
  let context = canvas.getContext("2d");
  context.fillStyle = 'white';
  context.fillRect(0, 0, 500, 500);
  let bw = 500;
  let bh = 500;
  let p = 0;
  function drawGrid () {
    for (let i = 0; i <= bw; i += 50) {
      context.moveTo(0.5 + i, 0);
      context.lineTo(0.5 + i, bh);
    }
    for (let j = 0; j <= bh; j += 50) {
      context.moveTo(0, 0.5 + j);
      context.lineTo(bw, 0.5 + j);
    }
    context.strokeStyle = 'black';
    context.stroke();
  }
  drawGrid();
}

export const init = () => {
  updateCanvas();
}

function updateCanvas () {
  var width = 500;
  var height = 500;
  var myCanvas = document.getElementById("canvas-3");
    myCanvas.width = width;
    myCanvas.height = height;

  var context = myCanvas.getContext("2d");
    context.clearRect(0,0,width,height);
    context.fillStyle = "white";
    context.fillRect(0,0,width,height);

    var rad=10;
    var gaps= rad*2;
    var widthCount = parseInt(width/gaps);
    var heightCount = parseInt(height/gaps);
    for(var x=0; x<widthCount;x++){
      for(var y=0; y<heightCount;y++){
        if (x % 2 === 0 || y % 2 === 0) {
          context.fillStyle = 'gray';
        } else {
          context.fillStyle = 'lightgray'
        }
        // if (y % 2 === 0) {
        //   let interval = setInterval(() => {
        //     context.fillStyle = 'gray'
        //   }, 500)
        // }
        // context.fillStyle = 'pink'
        context.beginPath();
        context.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true );
        context.closePath();
        context.fill();
      }
    }
}
