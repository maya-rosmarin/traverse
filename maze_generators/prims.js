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

  // connectCells () {
  //   debugger
  //   let shuffled = this.randomElement(this.grid);
  //   this.fill.push(shuffled);
  //   this.mark(shuffled[0], shuffled[1]);
  //   while (this.frontier.length > 0) {
  //     console.log(this.frontier);
  //     let randomElement = this.randomElement(this.frontier);
  //     if (!randomElement) {
  //       randomElement = this.randomElement(this.frontier);
  //     }
  //     this.fill.push(randomElement);
  //     let x = randomElement[0];
  //     let y = randomElement[1];
  //     delete this.frontier[this.frontier.indexOf(this.findFrontierByLocation(x, y))];
  //     let neighbors = this.neighbors(this.findCellByLocation(x, y)[0], this.findCellByLocation(x, y)[1]);
  //     let randomNeighbor = this.randomElement(neighbors);
  //     if (!randomNeighbor) {
  //       randomNeighbor = this.randomElement(neighbors);
  //     }
  //     this.fill.push(randomNeighbor);
  //     let nx = randomNeighbor[0];
  //     let ny = randomNeighbor[1];
  //     let direction = this.direction(x, y, nx, ny);
  //     let oppositeDirection = this.oppositeDirection(x, y, nx, ny);
  //     this.findCellByLocation(y, x)[2] = direction;
  //     this.findCellByLocation(ny, nx)[2] = oppositeDirection;
  //     this.mark(x, y);
  //   }
  //   return this.fill;
  // }

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
      return this.fill;
  }

  mark (xCoord, yCoord) {
    this.findCellByLocation(xCoord, yCoord)[2] = IN
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

  // direction (fx, fy, tx, ty) {
  //   if (fx < tx) {
  //     return 4;
  //   } else if (fx > tx) {
  //     return 8;
  //   } else if (fy < ty) {
  //     return 2;
  //   } else if (fy > ty) {
  //     return 1;
  //   }
  // }
  //
  // oppositeDirection (fx, fy, tx, ty) {
  //   if (fx < tx) {
  //     return 8;
  //   } else if (fx > tx) {
  //     return 4;
  //   } else if (fy < ty) {
  //     return 1;
  //   } else if (fy > ty) {
  //     return 2;
  //   }
  // }

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

  animate () {
    let canvas = document.getElementById('canvas-7');
    let context = canvas.getContext("2d");
    context.fillStyle='#B7979C';
    // context.fillRect(0, 0, 10, 10);
    let fill = this.fill;
    let i = 0;
    let interval = setInterval( () => {
      context.fillRect(10*fill[i][0], 10*fill[i][1], 10, 10);
      i++;
      if (i >= fill.length) {
        if (callback) {
          return callback();
        }
        clearInterval(interval);
      }
    }, 2);
  }
}
