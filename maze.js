import BFS from './maze_generators/bfs';
import { createGridArray, createGridGraphic } from './maze_generators/create_grid';

document.addEventListener('DOMContentLoaded', () => {
  let bfs = new BFS(15, 15);
  bfs.generatePaths([0,0]);
});
