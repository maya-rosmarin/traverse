import * as manhattan from 'manhattan';
import { createGridArray } from './create_grid';

export default class Kruskal {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    this.walls = createGridArray(width, height, 1, 1);
    this.width = width;
    this.height = height;
  }

  join (node1, node2) {
    let value = node2.slice();
    this.delete(node2);
    let nodeIdx = this.grid.indexOf(node1);
    this.grid[nodeIdx] = [node1, value];
    return this.grid[nodeIdx];
  }

  delete (node) {
    let index = this.grid.indexOf(node);
    this.grid.splice(index, 1);
  }





}
