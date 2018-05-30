import * as manhattan from 'manhattan';
import * as DisjointSet from 'ml-disjoint-set';
import { createGridArray, createWallsArray } from './create_grid';
import DFS from './dfs';

export default class Kruskal2 {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    this.sets = this.createSets(width, height);
    this.edges = this.shuffle(this.createEdges(width, height));
    this.connectNodes()
  }

  connectNodes () {
    let dY = {'e': 2, 'w': -2, 'n': 0, 's': 0};
    let dX = {'e': 0, 'w': 0, 'n': -2, 's': 2};
    let oppositeDirections = {'e': 'w', 'w': 'e', 'n': 's', 's': 'n'};
    debugger
    while (this.edges.length > 0) {
      debugger
      let x = this.edges[0][0];
      let y = this.edges[0][1];
      let direction = this.edges[0][2];
      let nx = x + dX[direction];
      let ny = y + dY[direction];
      let set1 = this.findSetByLocation(x, y);
      let set2 = this.findSetByLocation(nx, ny);
      if (!set1.isConnected(set2)) {
        set1.connect(set2);
      }
    }
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

}


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

// class Node (row, col) {
//   constructor (row, col) {
//     this.row = row;
//     this.col = col;
//     this.parent = null;
//     this.children = [];
//   }
// }
