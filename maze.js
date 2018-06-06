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
    clearInterval(dfsWeighted.interval)
    dfsWeighted.clearCanvas();
    dfsWeighted.animate([-2, 0]);
  });
  let weightedReset = document.getElementById('dfs-weighted-reset');
  weightedReset.addEventListener("click", (event) => {
    clearInterval(dfsWeighted.interval);
    dfsWeighted.clearCanvas();
  });
  let dfsCanvas = document.getElementById('dfs-random-run');
  let dfs = new DFS(100, 100, 'canvas-1');
  let path = dfs.generatePaths([0,0]);
  dfsCanvas.addEventListener("click", (event) => {
    event.preventDefault();
    clearInterval(dfs.interval);
    dfs.clearCanvas();
    dfs.animate([0,0], () => {}, '#B7979C', path);
  });
  let dfsReset = document.getElementById('dfs-random-reset');
  dfsReset.addEventListener("click", (event) => {
    event.preventDefault();
    clearInterval(dfs.interval);
    dfs.clearCanvas();
  })
  let bfsCanvas = document.getElementById('bfs-solver-run');
  let bfs = new BFS([0, 0], [98, 98], 'canvas-5');
  bfsCanvas.addEventListener("click", () => {
    clearInterval(bfs.dfs.interval);
    clearInterval(bfs.interval)
    bfs.dfs.clearCanvas();
    bfs.clearCanvas();
    bfs.dfs.animate([0,0], () => bfs.animate(bfs.exploreNodes(), 'white', 5, 10), 'white', bfs.maze)
  });
  let bfsReset = document.getElementById('bfs-solver-reset');
  bfsReset.addEventListener("click", () => {
    clearInterval(bfs.dfs.interval);
    clearInterval(bfs.interval)
    bfs.dfs.clearCanvas();
    bfs.clearCanvas();
    bfs.clearCanvas();
  })
  let kruskal = document.getElementById('kruskal-run');
  let kruskalCanvas = new Kruskal(100, 100, 'canvas-6', 5)
  kruskal.addEventListener("click", () => {
    kruskalCanvas.clearCanvas();
    let canvas = document.getElementById('canvas-6');
    let context = canvas.getContext("2d");
    context.fillStyle = 'white';
    context.fillRect(0, 5, 5, 5)
    context.fillRect(500, 495, 5, 5)
    clearInterval(kruskalCanvas.interval);
    kruskalCanvas.animate();
  });
  let kruskalReset = document.getElementById('kruskal-reset');
  kruskalReset.addEventListener("click", () => {
    clearInterval(kruskalCanvas.interval);
    kruskalCanvas.clearCanvas();
  });
  let prims = document.getElementById('prims-run');
  let primsCanvas = new Prims(100, 100);
  let primsBFS = new BFS([0,0], [98, 98], 'canvas-7');
  prims.addEventListener("click", () => {
    primsCanvas.clearCanvas();
    primsBFS.clearCanvas();
    clearInterval(primsCanvas.interval);
    clearInterval(primsBFS.interval);
    primsCanvas.animate(() => primsBFS.animate(primsCanvas.fill, 'lightgray', 0, 5));
  })
  let primsReset = document.getElementById('prims-reset');
  primsReset.addEventListener("click", () => {
    primsBFS.clearCanvas();
    clearInterval(primsCanvas.interval);
    clearInterval(primsBFS.interval);
    primsCanvas.clearCanvas();
    }
  )
});
