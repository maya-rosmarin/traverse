import DFS from './maze_generators/dfs';
import DFSWeighted from './maze_generators/dfs_weighted';
import Kruskal2 from './maze_generators/kruskal2';
import { createGridArray, createGridGraphic, createGridStatic, init, isScrolledIntoView } from './maze_generators/create_grid';
import BFS from './maze_solvers/bfs';

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
    dfs.animate([0,0]);
  })
  let bfsCanvas = document.getElementById('canvas-5');
  bfsCanvas.addEventListener("click", () => {
    let bfs = new BFS([0, 0], [38, 38]);
  });
  // if (isScrolledIntoView(document.getElementById('canvas-1'))) {
  // }
  let kruskal = new Kruskal2(5, 5);
  // kruskal.getEdges();
  // console.log(kruskal.join([0,2, false], [2,2, false]));
  // console.log(kruskal.connectNodes());
  // console.log(kruskal.animate());
});
