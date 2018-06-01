import { createGridArray, createWallsArray } from './create_grid';

export default class Kruskal {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    this.sets = this.createSets(width, height);
    this.edges = this.shuffle(this.createEdges(width, height));
    this.fill = [];
    this.connectNodes()
  }

  clearCanvas () {
    let canvas = document.getElementById('canvas-6');
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  animate (callback) {
    let canvas = document.getElementById('canvas-6');
    let context = canvas.getContext("2d");
    let fill = this.fill;
    context.fillStyle='white';
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

  connectNodes () {
    let dY = {'e': 2, 'w': -2, 'n': 0, 's': 0};
    let dX = {'e': 0, 'w': 0, 'n': -2, 's': 2};
    let oppositeDirections = {'e': 'w', 'w': 'e', 'n': 's', 's': 'n'};
    while (this.edges.length > 0) {
      let x = this.edges[0][0];
      let y = this.edges[0][1];
      let direction = this.edges[0][2];
      let nx = x + dX[direction];
      let ny = y + dY[direction];
      this.edges.shift();
      let set1 = this.findSetByLocation(x, y);
      let set2 = this.findSetByLocation(nx, ny);
      if (!set1.isConnected(set2)) {
        set1.connect(set2);
        this.fill.push(set1.location);
        this.fill.push(set2.location);
        this.fill.push(this.wall(set1.location, set2.location))
        this.findCellByLocation(x, y)[2] = direction;
        this.findCellByLocation(nx, ny)[2] = oppositeDirections[direction];
      }
    }
    return this.fill;
  }

  createSets (width, height) {
    let sets = [];
    for (let i = 0; i < this.grid.length; i++) {
      sets.push(new Tree([this.grid[i][0],this.grid[i][1]]))
    }
    return sets;
  }

  createEdges (width, height) {
    let edges = [];
    for (let i = 0; i < width; i+=2) {
      for (let j = 0; j < height; j+=2) {
        if (i > 0) {
          edges.push([i, j, 'n'])
        }
        if (j > 0) {
          edges.push([i, j, 'w'])
        }
      }
    }
    return edges;
  }

  shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  findSetByLocation (xCoord, yCoord) {
    return this.sets.find(set => set.location[0] === xCoord && set.location[1] === yCoord);
  }

  findCellByLocation (xCoord, yCoord) {
    return this.grid.find(cell => cell[0] === xCoord && cell[1] === yCoord);
  }

  wall (node1, node2) {
    let xCoord = (node1[0] + node2[0])/2;
    let yCoord = (node1[1] + node2[1])/2;
    return [xCoord, yCoord];
  }

};

class Tree {
  constructor (location) {
    this.parent = null;
    this.location = location;
  }

  root () {
    return this.parent ? this.parent.root() : this
  }

  isConnected (tree) {
    return this.root() === tree.root();
  }

  connect (tree) {
    return tree.root().parent = this;
  }
}
