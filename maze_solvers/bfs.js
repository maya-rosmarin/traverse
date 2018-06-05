import DFS from '../maze_generators/dfs';

export default class BFS {
  constructor (startNode, targetNode) {
    this.startNode = startNode;
    this.targetNode = targetNode;
    this.dfs = new DFS(40, 40, 'canvas-5');
    this.maze = this.dfs.generatePaths([0,0]);
    this.mazePaths = this.moves();
  }

  clearCanvas () {
    let canvas = document.getElementById('canvas-5');
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  animate (path, fillColor) {
    let canvas = document.getElementById("canvas-5");
    let context = canvas.getContext("2d");
    context.fillRect(0, 10, 10, 10);
    context.fillRect(400, 390, 10, 10);
    context.fillStyle=fillColor;
    let connector;
    let i = 0;
    let interval = setInterval(() => {
        context.fillStyle=fillColor;
        context.fillRect(10*path[i][0] + 10, 10*path[i][1] + 10, 10, 10);
        i++;
        document.getElementById("solved").innerHTML = 'Solving...'

      if (i >= path.length) {
        document.getElementById("solved").innerHTML = 'Solved!'
        clearInterval(interval);
      }
    }, 30)
  }

  exploreNodes () {
    let queue = [this.startNode];
    let visited = [this.startNode];
    let path = [this.startNode];
    while (queue.length) {
      let current = queue.shift();
      let neighbors = this.neighbors(current);
      for (let i = 0; i < neighbors.length; i++) {
        if (!this.arrayIncludes(visited, neighbors[i]) && this.mazePathsIncludes([current, neighbors[i]])) {
          queue.push(neighbors[i]);
          path.push(neighbors[i]);
          visited.push(neighbors[i]);
        };
        if (this.isSameNode(neighbors[i], this.targetNode)) {
          queue.push(neighbors[i]);
          path.push(neighbors[i]);
          visited.push(neighbors[i]);
          return path;
        }
      }
    }
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
    return moves;
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

  mazePathsIncludes (nodesArr) {
    for (let i = 0; i < this.mazePaths.length; i++) {
      if (this.arrayIncludes(this.mazePaths[i], nodesArr[0]) && this.arrayIncludes(this.mazePaths[i], nodesArr[1])) {
        return true;
      }
    }
    return false;
  }

}
