import { Kruskal } from './maze_generators/kruskal';
import BFS from './maze_generators/bfs';
import { createGridArray, createGridGraphic } from './maze_generators/create_grid';

document.addEventListener('DOMContentLoaded', () => {
  let bfs = new BFS(12,12);
  console.log(bfs.generate([0,0]));
  createGridGraphic();
});
