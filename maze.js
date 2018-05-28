import DFS from './maze_generators/dfs';
import DFSWeighted from './maze_generators/dfs_weighted';
import { createGridArray, createGridGraphic, createGridStatic, init, isScrolledIntoView } from './maze_generators/create_grid';
import BFS from './maze_solvers/bfs';
import Random from './maze_generators/random';

document.addEventListener('DOMContentLoaded', () => {
  createGridStatic();
  init();
  let weighted = document.getElementById('canvas-4');
  weighted.addEventListener("click", () => {
    new DFSWeighted(40, 40);
  })
  let dfsCanvas = document.getElementById('canvas-1');
  dfsCanvas.addEventListener("click", () => {
    let dfs = new DFS(40, 40, 'canvas-1');
    dfs.animate();
  })
  let bfsCanvas = document.getElementById('canvas-5');
  bfsCanvas.addEventListener("click", () => {
    let bfs = new BFS([0, 0], [38, 38]);
    // bfs.animate();
  });
  // if (isScrolledIntoView(document.getElementById('canvas-1'))) {
  // }
});
