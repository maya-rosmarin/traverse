import DFS from './maze_generators/dfs';
import DFSWeighted from './maze_generators/dfs_weighted';
import { createGridArray, createGridGraphic, createGridStatic, init } from './maze_generators/create_grid';
import BFS from './maze_solvers/bfs';
import Random from './maze_generators/random';

document.addEventListener('DOMContentLoaded', () => {
  let dfs = new DFS(40, 40);
  // dfs.animate([0,0]);
  createGridStatic();
  init();
  let weighted = new DFSWeighted(40, 40);
  weighted.animate([0,0]);
});
