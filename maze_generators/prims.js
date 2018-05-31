import { createGridArray } from './create_grid';

export default class Prims () {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    this.width = width;
    this.height = height;
    this.frontier = [];
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
      neighbors.push(this.findCellByLocation(xCoord - 2, yCoord))
    }
    if (xCoord + 2 < this.height && this.findCellByLocation(yCoord, xCoord + 2)) {
      neighbors.push(this.findCellByLocation(xCoord + 2, yCoord))
    }
    if (yCoord > 0 && this.findCellByLocation(yCoord - 2, xCoord)) {
      neighbors.push(this.findCellByLocation(xCoord, yCoord - 2))
    }
    if (yCoord + 1 < this.)
  }

  findCellByLocation (xCoord, yCoord) {
    return this.grid.find(cell => cell[0] === xCoord && cell[1] === yCoord);
  }

  animate () {
    let canvas = document.getElementById('canvas-7');
    let context = canvas.getContext("2d");
    context.fillStyle='#B7979C';
    context.fillRect(0, 0, 10, 10)
  }
}
