import BFS from './maze_generators/bfs';
import DFS from './maze_generators/dfs';
import { createGridArray, createGridGraphic } from './maze_generators/create_grid';

document.addEventListener('DOMContentLoaded', () => {
  let dfs = new DFS(20, 20);
  // console.log(dfs.neighbors([5,5]))
  // console.log(dfs.nextStep([5,5]));
  // dfs.generatePaths([0,0]);
  dfs.animate([0, 0]);
});
