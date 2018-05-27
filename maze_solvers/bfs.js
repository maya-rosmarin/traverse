import DFS from '../maze_generators/dfs';

export default class BFS {
  constructor (startNode, targetNode) {
    this.startNode = startNode;
    this.targetNode = targetNode;
    let dfs = new DFS(20, 20);
    // dfs.animate([0, 0]);
    this.maze = dfs.generatePaths([0,0]);
  }

  exploreNodes () {
    debugger
    let canvas = document.getElementById("canvas-1");
    let context = canvas.getContext("2d");
    let queue = [this.startNode];
    let visited = [this.startNode];
    while (queue.length) {
      let current = queue.shift();
      if (this.neighbors(current)) {
        this.neighbors(current).map(neighbor => {
          if (this.isSameNode(neighbor, this.targetNode)) {
            return visited;
          }
          if (!this.arrayIncludes(visited, neighbor)) {
            queue.push(neighbor);
            visited.push(neighbor);
          }
        })
      };
    }
    // console.log(visited)
    visited.map(node => {

      // context.fillStyle="pink";
      // context.fillRect(10*node[0], 10*node[1], 10, 10);
    })
  }

  neighbors (startNode) {
    let neighbors = [];
    this.maze.forEach((node) => {
      if ((startNode[0] == node[0] && startNode[1] == node[1] + 2) || (startNode[0] == node[0] && startNode[1] == node[1] - 2) || (startNode[0] == node[0] + 2 && startNode[1] == node[1]) || (startNode[0] == node[0] - 2 && startNode[1] == node[1])) {
        neighbors.push(node);
      }
    })
    return neighbors;
  }

  moves () {
    let moves = [];
    this.maze.forEach((node, idx) => {
        if (idx === 0) {
          return;
        } else {
          moves.push([this.maze[idx-1], node])
        }
      }
    )
    console.log(moves);
  }

  isSameNode (node1, node2) {
    return node1[0] === node2[0] && node1[1] === node2[1];
  }

  arrayIncludes (array, node) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] == node[0] && array[i][1] == node[1]) {
        return true;
      }
    }
    return false;
  }

}
