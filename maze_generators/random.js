import { createGridArray, createGridGraphic } from './create_grid';
import DFS from './dfs';

export default class Random {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
    createGridGraphic(width*10, height*10);
    this.width = width;
    this.height = height;
  }

}
