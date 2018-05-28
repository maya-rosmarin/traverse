// import { createGridArray, createGridGraphic } from './create_grid';
// import DFS from './dfs';
//
// export default class Random {
//   constructor (width, height) {
//     this.grid = createGridArray(width, height);
//     createGridGraphic(width*10, height*10);
//     this.width = width;
//     this.height = height;
//     this.path = [];
//     this.dfs = new DFS(width, height)
//   }
//
//   generatePaths (startNode) {
//     startNode[2] = true;
//     while (this.dfs.unvisited().length) {
//       this.path.push(startNode);
//       this.path.push(this.dfs.neighbors(startNode));
//     }
//     console.log(this.path);
//   }
//
// }
