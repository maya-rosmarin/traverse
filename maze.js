import DFS from './maze_generators/dfs';
import DFSWeighted from './maze_generators/dfs_weighted';
import DFSUtil from './maze_generators/dfs_util';
import Kruskal from './maze_generators/kruskal';
import Prims from './maze_generators/prims';
import { createGridArray, createGridGraphic, createGridStatic, init, isScrolledIntoView } from './maze_generators/create_grid';
import BFS from './maze_solvers/bfs';

document.addEventListener('DOMContentLoaded', () => {
  createGridStatic();
  init();
  let weighted = document.getElementById('dfs-weighted-run');
  let dfsWeighted = new DFSWeighted(40, 40, 'canvas-4');
  weighted.addEventListener("click", (event) => {
    event.preventDefault();
    dfsWeighted.animate([-2, 0]);
  });
  let weightedReset = document.getElementById('dfs-weighted-reset');
  weighted.addEventListener("click", (event) => {
    event.preventDefault();
    dfsWeighted.clearCanvas();
  });
  let dfsCanvas = document.getElementById('dfs-random-run');
  let dfs = new DFS(40, 40, 'canvas-1');
  dfsCanvas.addEventListener("click", (event) => {
    event.preventDefault();
    dfs.animate([0,0]);
  });
  let dfsReset = document.getElementById('dfs-random-reset');
  dfsReset.addEventListener("click", (event) => {
    event.preventDefault();
    dfs.clearCanvas();
  })
  let bfsCanvas = document.getElementById('bfs-solver-run');
  bfsCanvas.addEventListener("click", () => {
    let bfs = new BFS([0, 0], [38, 38]);
    bfs.dfs.animate([0,0], () => bfs.animate(bfs.exploreNodes(), 'white'))
  });
  let bfsReset = document.getElementById('bfs-solver-reset');
  bfsReset.addEventListener("click", () => {
    bfs.clearCanvas();
  })
  let kruskal = document.getElementById('kruskal-run');
  let kruskalCanvas = new Kruskal(40, 40);
  kruskal.addEventListener("click", () => {
    kruskalCanvas.animate();
  });
  let kruskalReset = document.getElementById('kruskal-reset');
  kruskalReset.addEventListener("click", () => {
    kruskalCanvas.clearCanvas();
  });
  let prims = new Prims(40, 40);
  prims.isNeighbor([2,2], [0,0])
  prims.connectCells();
  prims.animate();
  // let dfsutil = new DFSUtil(5, 5, 'canvas-7');
  // dfsutil.generatePaths([0,0]);
});
