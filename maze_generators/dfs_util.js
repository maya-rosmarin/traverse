import { createGridArray, createGridGraphic } from './create_grid';

  export const connector = (startNode, node) => {
    debugger
    let connector;
      if (startNode[0] == node[0] && startNode[1] == node[1] + 2) {
        connector = [node[0], node[1] + 1];
      } else if (startNode[0] == node[0] && startNode[1] == node[1] - 2) {
        connector = [node[0], node[1] - 1];
      } else if (startNode[0] == node[0] + 2 && startNode[1] == node[1]) {
        connector = [node[0] + 1, node[1]];
      } else if (startNode[0] == node[0] - 2 && startNode[1] == node[1]) {
        connector = [node[0] - 1, node[1]];
      }
    return connector;
  }

  export const generatePaths = (startNode) => {
    debugger
    startNode[2] = true;
    this.stack.push(startNode);
    let last = startNode;
    while (this.unvisited().length) {
      let step = this.nextStep(last);
      if (!step) {
        last = this.backtrack(-1);
      } else {
        step[2] = true;
        this.stack.push(step);
        last = this.stack.slice(-1)[0];
      }
    }
    return this.stack;
  }

  export const unvisited = (grid) => {
    return grid.filter(cell => !isVisited(cell))
  }

  export const isVisited = (node) => {
    return node[2] === true
  }

  export const backtrack = (n, stack, callback) => {
    let current = stack.slice(n)[0];
    if (callback(current)) {
      stack.push(current)
      return current;
    } else {
      n--;
      return backtrack(n);
    }
  }

  export const neighbors = (startNode, grid) => {
    debugger
    let nodes = [];
    grid.forEach((node) => {
      if ((startNode[0] == node[0] && startNode[1] == node[1] + 2) || (startNode[0] == node[0] && startNode[1] == node[1] - 2) || (startNode[0] == node[0] + 2 && startNode[1] == node[1]) || (startNode[0] == node[0] - 2 && startNode[1] == node[1])) {
        nodes.push(node);
      }
    })
    return nodes;
  }
