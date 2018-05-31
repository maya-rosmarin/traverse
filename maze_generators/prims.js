import { createGridArray } from './create_grid';

export default class Prims () {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    this.width = width;
    this.height = height;
    this.frontier = [];
    this.fill = [];
  }

  connectCells () {
    let shuffled = this.randomElement(this.grid);
    this.mark(shuffled[0], shuffled[1]);
    while (this.frontier.length > 0) {
      let x = this.randomElement(this.frontier)[0];
      let y = this.randomElement(this.frontier)[1];
      delete this.findFrontierByLocation(x, y);
      let neighbors = this.neighbors(x, y);
      let nx = this.randomElement(neighbors)[0];
      let ny = this.randomElement(neighbors)[1];
    }
  }

  mark (xCoord, yCoord) {
    this.findCellByLocation(xCoord, yCoord)[2] = 'in'
    this.addFrontier(xCoord-2, yCoord)
    this.addFrontier(xCoord+2, yCoord)
    this.addFrontier(xCoord-2, yCoord)
    this.addFrontier(xCoord+2, yCoord)
  }

  addFrontier(xCoord, yCoord) {
    if (xCoord >= 0 && yCoord >= 0 && xCoord < this.width && yCoord < this.height) {
      this.findCellByLocation(xCoord, yCoord)[2] = 'frontier';
      this.frontier.push([xCoord, yCoord]);
    }
  }

  neighbors (xCoord, yCoord) {
    let neighbors = [];
    if (xCoord > 0 && this.findCellByLocation(yCoord, xCoord - 2)) {
      neighbors.push(this.findCellByLocation(xCoord - 2, yCoord));
    }
    if (xCoord + 2 < this.width && this.findCellByLocation(yCoord, xCoord + 2)) {
      neighbors.push(this.findCellByLocation(xCoord + 2, yCoord));
    }
    if (yCoord > 0 && this.findCellByLocation(yCoord - 2, xCoord)) {
      neighbors.push(this.findCellByLocation(xCoord, yCoord - 2));
    }
    if (yCoord + 2 < this.height && this.findCellByLocation(yCoord + 2, xCoord)) {
      neighbors.push(this.findCellByLocation(xCoord, yCoord + 2));
    }
  }

  findCellByLocation (xCoord, yCoord) {
    return this.grid.find(cell => cell[0] === xCoord && cell[1] === yCoord);
  }

  findFrontierByLocation (xCoord, yCoord) {
    return this.frontier.find(cell => cell[0] === xCoord && cell[1] === yCoord);
  }

  shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  randomElement (array) {
    let randomIndex = Math.floor(Math.random() * neighbors.length);
    return array[randomIndex];
  }

  animate () {
    let canvas = document.getElementById('canvas-7');
    let context = canvas.getContext("2d");
    context.fillStyle='#B7979C';
    context.fillRect(0, 0, 10, 10)
  }
}
