import BFS from './maze_generators/bfs';
import { createGridArray, createGridGraphic } from './maze_generators/create_grid';

document.addEventListener('DOMContentLoaded', () => {
  let bfs = new BFS(100, 100);
  // createGridGraphic(400, 400);
  // bfs.animate(bfs.generate([0,0]));
  // console.log(bfs.unvisited().length);
  // console.log(bfs.nextStep([5,5]))
  // console.log(bfs.unvisited().length);  console.log(bfs.nextStep([5,6]))
});
