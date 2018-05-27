import DFS from './maze_generators/dfs';
import DFSWeighted from './maze_generators/dfs_weighted';
import { createGridArray, createGridGraphic, createGridStatic, init, isScrolledIntoView } from './maze_generators/create_grid';
import BFS from './maze_solvers/bfs';
import Random from './maze_generators/random';

document.addEventListener('DOMContentLoaded', () => {
  createGridStatic();
  init();
  let weighted = new DFSWeighted(40, 40);
  let dfs = new DFS(40, 40, 'canvas-1');
  let bfs = new BFS([0, 0], [18, 18])
  // if (isScrolledIntoView(document.getElementById('canvas-1'))) {
  // }
});
