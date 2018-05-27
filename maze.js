import DFS from './maze_generators/dfs';
import { createGridArray, createGridGraphic, createGridStatic, init } from './maze_generators/create_grid';
import BFS from './maze_solvers/bfs';
import Random from './maze_generators/random';

document.addEventListener('DOMContentLoaded', () => {
  // let bfs = new BFS([0, 0], [20, 20]);
  // bfs.exploreNodes();
  // bfs.moves();
  // let random = new Random(20, 20);
  // random.generatePaths([0,0]);
  let dfs = new DFS(40, 40);
  dfs.animate([0,0]);
  createGridStatic();
  init();
});
