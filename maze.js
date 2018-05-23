import { Kruskal } from './maze_generators/kruskal';
import BFS from './maze_generators/bfs';
import createGrid from './maze_generators/create_grid';

document.addEventListener('DOMContentLoaded', () => {
  let bfs = new BFS(4,4);
  // bfs.generate([0,0])
  // console.log(bfs.generate([1,2]));
});
