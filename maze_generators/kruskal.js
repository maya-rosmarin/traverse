import * as manhattan from 'manhattan';
import * as DisjointSet from 'ml-disjoint-set';
import { createGridArray, createWallsArray } from './create_grid';
import DFS from './dfs';

export default class Kruskal {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    this.sets = this.createSets();
    // this.walls = createWallsArray(4, 4);
    // this.removed = [];
    this.width = width;
    this.height = height;
    this.dfs = new DFS(5, 5, 'canvas-6');
    this.neighbors = this.dfs.neighbors;
    this.fill = [];
    // let a = new DisjointSet();
    // let b = new DisjointSet();
    // console.log(a)
    // let c = a.add([0,0]);
    // let d = a.add([2,2]);
    // let f = a.add([4,4]);
    // // console.log(a)
    // let e = a.union(c, d)
    // console.log(a)
  }

  createSets () {
    let sets = new DisjointSet();
    for (let i = 0; i < this.grid.length; i++) {
      sets.add(this.grid[i]);
    }
    return sets;
  }

  getEdges () {
    let edges = [];
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (i > 0) {
          edges.push([i, j, N])
        }
      }
    }
  }

  animate () {
    let canvas = document.getElementById('canvas-6');
    let context = canvas.getContext("2d");
    let fill = this.connectNodes();
    console.log(fill);
    context.fillStyle='white';
    let i = 0;
    debugger
    let interval = setInterval( () => {
      context.fillRect(10*fill[i][0], 10*fill[i][1], 10, 10);
      i++;
      if (i >= fill.length) {
        clearInterval(interval);
      }
    }, 10);
  }

  connectNodes () {
    // debugger
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

  join (node1, node2) {
    let value = node2.slice();
    this.delete(node2, this.grid);
    let nodeIdx = this.indexOf(this.grid, node1);
    node1 = node1.concat([node2])
    this.grid[nodeIdx] = node1;
    return node1;
  }

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
