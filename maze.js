import BFS from './maze_generators/bfs';
import DFS from './maze_generators/dfs';
import { createGridArray, createGridGraphic } from './maze_generators/create_grid';

document.addEventListener('DOMContentLoaded', () => {
  let dfs = new DFS(20, 20);
  dfs.animate([0, 0]);
  // console.log(dfs.connector([2,2], [0,2]))
});
