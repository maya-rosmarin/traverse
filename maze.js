import DFS from './maze_generators/dfs';
import { createGridArray, createGridGraphic } from './maze_generators/create_grid';
import BFS from './maze_solvers/bfs';

document.addEventListener('DOMContentLoaded', () => {
  let bfs = new BFS([0, 0], [20, 20]);
  bfs.exploreNodes();
  bfs.moves();
});
