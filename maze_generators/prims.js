import { createGridArray } from './create_grid';

const IN = 0x10;
const FRONTIER = 0x20;

export default class Prims {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    this.width = width;
    this.height = height;
    this.frontier = [];
    this.fill = [];
  }

  connectCells () {
      let startNode = this.randomElement(this.grid);
      this.fill.push(startNode);
      this.mark(startNode[0], startNode[1]);
      while (this.frontier.length) {
        let nextNode = this.randomElement(this.frontier);
        if (!nextNode) {
          debugger;
        }
        if (nextNode) {
          this.mark(nextNode[0], nextNode[1]);
          let last = this.fill[this.fill.length - 1];
          this.fill.push(nextNode);
          // this.fill.push(this.wall(last, nextNode));
          delete this.frontier[this.frontier.indexOf(nextNode)];
          this.frontier = this.filter(this.frontier);
        }
      }
      debugger
      console.log(this.fill);
      let path = this.animatePath();
      console.log(path)
      return this.fill;
  }

  mark (xCoord, yCoord) {
    // this.findCellByLocation(xCoord, yCoord)[2] = IN
    this.addFrontier(xCoord-2, yCoord)
    this.addFrontier(xCoord+2, yCoord)
    this.addFrontier(xCoord, yCoord-2)
    this.addFrontier(xCoord, yCoord+2)
  }

  addFrontier(xCoord, yCoord) {
    if (xCoord >= 0 && yCoord >= 0 && xCoord < this.width && yCoord < this.height && !this.arrayIncludes(this.fill, [xCoord, yCoord])) {
      this.findCellByLocation(xCoord, yCoord)[2] = FRONTIER;
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
    return neighbors;
  }


  findCellByLocation (xCoord, yCoord) {
    return this.grid.find(cell => cell[0] === xCoord && cell[1] === yCoord);
  }

  findFrontierByLocation (xCoord, yCoord) {
    for (let i = 0; i < this.frontier.length; i++) {
      if (this.frontier[i] && this.frontier[i][0] === xCoord && this.frontier[i][1] === yCoord) {
        return this.frontier[i]
      }
    }
  }

  shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  randomElement (array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    if (!array[randomIndex]) {
      this.randomElement(array);
    } else {
      return array[randomIndex];
    }
  }

  filter (array) {
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== undefined && array[i] != null) {
        filtered.push(array[i])
      }
    }
    return filtered;
  }

  arrayIncludes (array, node) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] == node[0] && array[i][1] == node[1]) {
        return true;
      }
    }
    return false;
  }

  wall (node1, node2) {
    let xCoord = (node1[0] + node2[0])/2;
    let yCoord = (node1[1] + node2[1])/2;
    return [xCoord, yCoord];
  }

  // animatePath () {
  //   debugger
  //   let path = [];
  //   let connectors = [];
  //   for (let i = 0; i < this.fill.length; i++) {
  //     debugger
  //     let node = this.fill[i];
  //     if (this.isNeighbor(node, this.fill[i+1])) {
  //       path.push(node);
  //       path.push(this.wall(node, this.fill[i+1]));
  //     } else {
  //       let neighbors = this.neighbors(this.fill[i][0], this.fill[i][1]);
  //       for (let j = 0; j < neighbors.length; j++) {
  //         if (this.arrayIncludes(path, neighbors[j])) {
  //           connectors.push(neighbors[j])
  //         };
  //       }
  //       path.push(this.wall(this.fill[i], this.randomElement(connectors)));
  //       path.push(this.fill[i])
  //     }
  //   }
  //   debugger
  //   return path;
  // }

  animatePath () {
    debugger
    let path = [this.fill[0]];
    for (let i = 1; i < this.fill.length; i++) {
      let last = path[path.length - 1];
      if (this.isNeighbor(this.fill[i], last)) {
        path.push(this.wall(this.fill[i], last));
        path.push(this.fill[i]);
      } else {
        let neighbors = this.neighbors(this.fill[i][0], this.fill[i][1]);
        for (let j = 0; j < neighbors.length; j++) {
          if (this.arrayIncludes(path, neighbors[j])) {
            path.push(this.wall(neighbors[j], this.fill[i]));
            path.push(this.fill[i]);
            break;
          }
        }
      }
    }
    return path;
  }

  isNeighbor (node1, node2) {
    let neighbors = this.neighbors(node1[0], node1[1]);
    if (this.arrayIncludes(neighbors, node2)) {
      return true;
    } else {
      return false;
    }
  }

  animate () {
    let canvas = document.getElementById('canvas-7');
    let context = canvas.getContext("2d");
    context.fillStyle='#B7979C';
    // context.fillRect(0, 0, 10, 10);
    // let fill = this.filter(this.fill);
    let fill = this.filter(this.animatePath())
    let i = 0;
    let interval = setInterval( () => {
      if (!fill[i]) {
        debugger
      }
      context.fillRect(10*fill[i][0], 10*fill[i][1], 10, 10);
      i++;
      if (i >= fill.length) {
        // if (callback) {
        //   return callback();
        // }
        clearInterval(interval);
      }
    }, 5);
  }
}
