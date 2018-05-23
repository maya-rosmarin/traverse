import { Kruskal } from './maze_generators/kruskal';
import * as BFS from './maze_generators/bfs';
import createGrid from './maze_generators/create_grid';

document.addEventListener('DOMContentLoaded', () => {
  console.log(BFS.generate(4, 4, [0,3]));
});
