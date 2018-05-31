import DFS from './maze_generators/dfs';
import DFSWeighted from './maze_generators/dfs_weighted';
import DFSUtil from './maze_generators/dfs_util';
import Kruskal from './maze_generators/kruskal';
import { createGridArray, createGridGraphic, createGridStatic, init, isScrolledIntoView } from './maze_generators/create_grid';
import BFS from './maze_solvers/bfs';

document.addEventListener('DOMContentLoaded', () => {
  createGridStatic();
  init();
  let weighted = document.getElementById('canvas-4');
  weighted.addEventListener("click", () => {
    new DFSWeighted(40, 40);
  });
  let dfsCanvas = document.getElementById('canvas-1');
  dfsCanvas.addEventListener("click", () => {
    let dfs = new DFS(40, 40, 'canvas-1');
    dfs.animate([0,0]);
  });
  let bfsCanvas = document.getElementById('canvas-5');
  bfsCanvas.addEventListener("click", () => {
    let bfs = new BFS([0, 0], [38, 38]);
    bfs.dfs.animate([0,0], () => bfs.animate(bfs.exploreNodes(), 'white'))
  });
  // if (isScrolledIntoView(document.getElementById('canvas-1'))) {
  // }
  let kruskal = document.getElementById('canvas-6');
  kruskal.addEventListener("click", () => {
    let kruskal = new Kruskal(40, 40);
  });

  // let dfsutil = new DFSUtil(5, 5, 'canvas-7');
  // dfsutil.generatePaths([0,0]);
});
