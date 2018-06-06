import * as manhattan from 'manhattan';

export const createGridArray = (width, height, start1 = 0, start2 = 0) => {
  let nodes = [];
  for (let i = start1; i < width; i+=2) {
    for (let j = start2; j < height; j+=2) {
      nodes.push([i, j, false]);
    }
  }
  return nodes;
}

export const createWallsArray = (height, width) => {
  let walls = [];
  for (let i = 0; i < width + 1; i++) {
    for (let j = 0; j < height + 1; j++) {
      // either i or j is odd
      if (i % 2 !== 0 ^ j % 2 !== 0) {
        walls.push([i, j])
      }
    }
  }
  return walls;
}

export const createGridGraphic = (width, height) => {
  let canvas = document.getElementById("canvas-1");
  let context = canvas.getContext("2d");
  context.fillStyle = 'white';
  context.fillRect(0, 0, width + 10, height + 10);
}

export const createGridStatic = (width, height) => {
  let canvas = document.getElementById("canvas-2");
  let context = canvas.getContext("2d");
  context.fillStyle = '#d6c4c7';
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
  context.fillStyle = '#A67D7D';
  for (let k = 0; k < 450; k += 100) {
    context.fillRect(k, 0, 50, 2000)
    context.fillRect(0, k, 2000, 50)
  }
  context.fillStyle = '#d6c4c7';
  let l = 100;
  let m = 50;
  let interval = setInterval(() => {
    context.fillRect(l, m, 50, 50)
    if (l > 250) {
      l = 0;
      m += 100;
    } else if (m > 350) {
      clearInterval(interval);
    }
    l += 100;
  }, 670)
}

export const init = () => {
  updateCanvas();
}

function updateCanvas () {
  let width = 500;
  let height = 500;
  let myCanvas = document.getElementById("canvas-3");
    myCanvas.width = width;
    myCanvas.height = height;

  let context = myCanvas.getContext("2d");
    context.clearRect(0,0,width,height);
    context.fillStyle = "white";
    context.fillRect(0,0,width,height);

    let rad=10;
    let gaps= rad*2;
    let widthCount = parseInt(width/gaps);
    let heightCount = parseInt(height/gaps);
    let coords = []
    for(let x=0; x<widthCount;x++){
      for(let y=0; y<heightCount;y++){
        if (x % 2 === 0 || y % 2 === 0) {
          context.fillStyle = '#996D73';
        } else {
          context.fillStyle = '#d6c4c7'
        }
        context.beginPath();
        context.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true );
        context.closePath();
        context.fill();
      }
      let x2 = 2;
      let y2 = 1;
      let interval = setInterval(() => {
        context.beginPath();
        context.arc(rad+gaps*x2,rad+ gaps*y2, rad, 0, Math.PI*2, true );
        context.closePath();
        context.fill();
        if (x2 === 22) {
          x2 = 0;
          y2 += 2;
        } else if (y2 === 22) {
          clearInterval(interval);
        }
        x2++;
      }, 100)
      context.fillStyle = '#d6c4c7';
    }
}

export const isScrolledIntoView = (el) => {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}
