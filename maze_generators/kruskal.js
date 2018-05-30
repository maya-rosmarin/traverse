import * as manhattan from 'manhattan';
import * as DisjointSet from 'ml-disjoint-set';
import { createGridArray, createWallsArray } from './create_grid';
import DFS from './dfs';

export default class Kruskal {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    this.sets = this.createSets()[0];
    this.setValues = this.createSets()[1];
    this.edges = this.shuffle(this.getEdges(height, width));
    this.dfs = new DFS(5, 5, 'canvas-6');
    this.neighbors = this.dfs.neighbors;
    this.fill = [];
    console.log(this.sets);
    console.log(this.edges);
  }

  createSets () {
    let sets = new DisjointSet();
    let setValues = [];
    for (let i = 0; i < this.grid.length; i++) {
      sets.add(this.grid[i]);
      setValues.push(this.grid[i]);
    }
    return [sets, setValues];
  }

  getEdges (height, width) {
    let edges = [];
    for (let i = 0; i < height; i+=2) {
      for (let j = 0; j < width; j+=2) {
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

  animate () {
    // let canvas = document.getElementById('canvas-6');
    // let context = canvas.getContext("2d");
    // let fill = this.connectNodes();
    // console.log(fill);
    // context.fillStyle='white';
    // let i = 0;
    // debugger
    // let interval = setInterval( () => {
    //   context.fillRect(10*fill[i][0], 10*fill[i][1], 10, 10);
    //   i++;
    //   if (i >= fill.length) {
    //     clearInterval(interval);
    //   }
    // }, 10);
  }

  shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  connectNodes () {
    debugger
    let dY = {'e': 2, 'w': -2, 'n': 0, 's': 0};
    let dX = {'e': 0, 'w': 0, 'n': -2, 's': 2};
    let oppositeDirections = {'e': 'w', 'w': 'e', 'n': 's', 's': 'n'};
    while (this.edges.length > 0) {
      debugger
      let x = this.edges[0][0];
      let y = this.edges[0][1];
      let direction = this.edges[0][2];
      let nx = x + dX[direction];
      let ny = y + dY[direction];
      let set1 = this.sets[y][x];
      let set2 = this.sets[ny][nx];
      this.edges.shift();
      if (!this.sets.connected(set1, set2)) {
        this.sets.union(set1, set2);
        this.grid[y][x][2] = direction;
        this.grid[ny][nx][2] = oppositeDirections[direction];
      }
    }
    return this.sets;
    // // while (this.removed.length < this.grid.length - 1) {
    //   let current = this.randomNode(this.grid);
    //   let walledNeighbors = [];
    //   let neighbors = this.neighbors(current);
    //   for (let i = 0; i < neighbors.length; i++) {
    //     debugger
    //     if (this.isWallUp(current, neighbors[i])) {
    //       walledNeighbors.push(neighbors[i]);
    //     }
    //   }
    //   if (walledNeighbors.length) {
    //     debugger
    //     let randomNeighbor = this.randomNode(walledNeighbors);
    //     let wall = this.wall(current, randomNeighbor);
    //        this.delete(wall, this.walls);
    //        this.removed.push(wall);
    //        this.fill.push(wall);
    //        this.fill.push(current);
    //        this.fill.push(randomNeighbor);
    //   }
    // // }
    // return this.fill;

  }

  // if any of a nodes neighbors exist in the set, break down wall between them

  // join (node1, node2) {
  //   let value = node2.slice();
  //   this.delete(node2, this.grid);
  //   let nodeIdx = this.indexOf(this.grid, node1);
  //   node1 = node1.concat([node2])
  //   this.grid[nodeIdx] = node1;
  //   return node1;
  // }

  wall (node1, node2) {
    let xCoord = (node1[0] + node2[0])/2;
    let yCoord = (node1[1] + node2[1])/2;
    return [xCoord, yCoord];
  }

  isWallUp (node1, node2) {
    if (this.arrayIncludes(this.walls, this.wall(node1, node2))) {
      return true;
    }
    return false;
  }

  randomNode (arr) {
    let length = arr.length;
    let index = Math.floor(Math.random() * length);
    return arr[index];
  }

  delete (node, array) {
    let index = this.indexOf(array, node);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  indexOf (arr, el) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === el[0] && arr[i][1] === el[1]) {
        return i;
      }
    }
  }

  arrayIncludes (array, node) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] == node[0] && array[i][1] == node[1]) {
        return true;
      }
    }
    return false;
  }

}
