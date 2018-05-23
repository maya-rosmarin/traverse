import Kruskal from './maze_generators/kruskal';
import BFS from './maze_generators/bfs';
import createGrid from './maze_generators/create_grid';

document.addEventListener('DOMContentLoaded', () => {
  let grid = createGrid(4,4)
  let root = [0,0];
  let unvisited = [];
  grid[root] = true
  grid[[1,1]] = true
  for (let key in grid) {
    if (grid[key] === false) {
      unvisited.push(key)
    }
  }
  let queue = [root];
  console.log(grid)

});
