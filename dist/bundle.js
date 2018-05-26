/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./maze.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./maze.js":
/*!*****************!*\
  !*** ./maze.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maze_generators_dfs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maze_generators/dfs */ "./maze_generators/dfs.js");
/* harmony import */ var _maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maze_generators/create_grid */ "./maze_generators/create_grid.js");
/* harmony import */ var _maze_solvers_bfs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maze_solvers/bfs */ "./maze_solvers/bfs.js");




document.addEventListener('DOMContentLoaded', () => {
  let bfs = new _maze_solvers_bfs__WEBPACK_IMPORTED_MODULE_2__["default"]([0, 0], [20, 20]);
  bfs.exploreNodes();
  bfs.moves();
});


/***/ }),

/***/ "./maze_generators/bfs.js":
/*!********************************!*\
  !*** ./maze_generators/bfs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! manhattan */ "./node_modules/manhattan/index.js");
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(manhattan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _create_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_grid */ "./maze_generators/create_grid.js");



class BFS {
  constructor (width, height) {
    this.grid = Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridArray"])(width, height)
    this.width = width;
    this.height = height;
    Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridGraphic"])(width*10, height*10);
  }

  // push all children of every node visited to queue

  generatePaths (startNode) {
    let queue = [[startNode]];
    let pathCells = [startNode];
    while (queue.length > 0) {
      let current = queue.shift();
      let child = this.selectRandomPathChild(this.children(current[0]), pathCells, queue);
      console.log("visiting " + child)
      // queue.push(this.children(current[0]))
      // pathCells.push(this.children(current[0]))
      // let children = this.children(current)
      // debugger
      // queue = queue.concat(children);
      // pathCells = pathCells.concat(children);
      this.animateChild(child, pathCells);
    }
    debugger
    // this.ensureLongPath(pathCells);
    //let tangent = this.generateTangentPaths(this.selectRandomUnvisitedCell());
    // console.log(tangent);
  };

  unvisited () {
    debugger
    let unvisited = [];
    for (let key in this.grid) {
      if (this.grid[key] === false) {
        unvisited.push(key)
      };
    }
    return unvisited;
  }

  nextStep (currentNode, unvisited) {
    debugger
    let children = this.children(currentNode);
    if (children) {
      children = children.filter(child => { return this.children(child).length >= 1 && this.arrayIncludes(unvisited, child) })
      let randomIndex = Math.floor(Math.random() * children.length)
      this.grid[children[randomIndex]] = true;
      return children[randomIndex];
    }
  }

  animate (coords) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let i = 0;
    let interval = setInterval( () => {
      context.fillStyle='white';
      context.fillRect(10*coords[i][0], 10*coords[i][1], 10, 10);
      i++;
    }, 100);
    if (i >= coords.length) {
      clearInterval(interval);
    }
  }


  animateChild (child, pathCells) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let i = 0;
    if (child) {
      let interval = setInterval( () => {
      context.fillStyle='black';
      context.fillRect(10*child[0], 10*child[1], 10, 10);
      i++;
    }, 200);
    if (i >= pathCells.length) {
      clearInterval(interval);
      }
    }
  }

  generateTangentPaths (startNode) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    // debugger
    let unvisited = this.unvisited();
    let steps = [];
    if (unvisited) {
      debugger
      let nextStep = this.nextStep(startNode, unvisited);
      for (let i = 0; i < 5; i++) {
        steps.push(nextStep);
        nextStep = this.nextStep(nextStep, unvisited);
      }
    }
    const array = steps.filter(step => step)
    array.forEach(step => {
      console.log(step)
      this.grid[step] = true;
      context.fillStyle='white';
      context.fillRect(10*step[0], 10*step[1], 10, 10);
    })
    return array
  }

  selectRandomUnvisitedCell () {
    // debugger
    let unvisited = this.unvisited();
    let randomIndex = (Math.floor(Math.random() * unvisited.length));
    this.grid[Object.keys(this.grid)[randomIndex]] = true;
    return Object.keys(this.grid)[randomIndex];
  }

  selectRandomPathChild (children, pathCells, queue) {
    children = children.filter(child =>
      { return this.children(child).length > 0 && !this.arrayIncludes(pathCells, child)});

    if (children && children.length > 0) {
      let randomIndex = Math.floor(Math.random() * children.length)
      let child = children[randomIndex];
      pathCells.push(child);
      queue.push([child])
      this.grid[child] = true;
      return child;
    }
  }

  ensureLongPath (pathCells) {
    let sorted;
    pathCells.splice(-1, 1);
    let filtered = pathCells.filter(cell => cell[0] === this.width-1)
    if (!filtered.length) {
      sorted = pathCells.sort((el1, el2) => {
        return el1[0] - el2[0];
      })
      // this.nextStep(sorted.pop(), this.unvisited());
      this.generatePaths(sorted.pop())
    }
  }

  generate (root) {
    let queue = [[root]];
    let visitedNodes = [root];
    while (queue.length) {
      let visited = queue.shift();
      if (typeof visited === "string") {
        visited = visited.split(",").map(i => Number(i));
      } else if (visited.length === 1) {
        visited = visited[0];
      }
      this.grid[visited] = true;
      let children = this.children(visited)
      if (!children.length) {
        continue;
      }
      for (let i = 0; i < children.length; i++) {
        if (!this.arrayIncludes(visitedNodes, children[i])) {
          queue.push(children[i]);
          visitedNodes.push(children[i])
        }
      }
    }
    return visitedNodes;
  };

  arrayIncludes (array, node) {
    if (typeof node === 'string') {
      node = node.split(',').map(i => Number(i));
    }
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'string') {
        array[i] = array[i].split(',').map(i => Number(i));
      }
      if (array[i][0] == node[0] && array[i][1] == node[1]) {
        return true;
      }
    }
    return false;
  }


  // animatePath (node, limit) {
  //   let i = 0;
  //   let interval = setInterval( () => {
  //     context.fillStyle='white';
  //     context.fillRect(10*node[0], 10*node[1], 10, 10);
  //     i++;
  //     },
  //   2000);
  //   if (i >= limit) {
  //     clearInterval(interval);
  //   }
  // }

  children (node) {
    if (node) {
      if (typeof node === 'string') {
        node = node.split(',').map(i => Number(i))
      }
    let childrenNodes = [];
      Object.keys(this.grid).map(key => {
        let coord = key.split(',').map(i => Number(i));
        if ((coord[0] == node[0] && coord[1] == node[1] + 1) || (coord[0] == node[0] && coord[1] == node[1] - 1) || (coord[0] == node[0] + 1 && coord[1] == node[1]) || (coord[0] == node[0] - 1 && coord[1] == node[1])) {
          childrenNodes.push(coord);
        }
      }
    )
    return childrenNodes;
  }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BFS);


/***/ }),

/***/ "./maze_generators/create_grid.js":
/*!****************************************!*\
  !*** ./maze_generators/create_grid.js ***!
  \****************************************/
/*! exports provided: createGridArray, createGridGraphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridArray", function() { return createGridArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridGraphic", function() { return createGridGraphic; });
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! manhattan */ "./node_modules/manhattan/index.js");
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(manhattan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bfs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bfs */ "./maze_generators/bfs.js");



const createGridArray = (width, height) => {
  let nodes = [];
  for (let i = 0; i < width; i+=2) {
    for (let j = 0; j < height; j+=2) {
      nodes.push([i, j, false]);
    }
  }
  return nodes;
}

const createGridGraphic = (width, height) => {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  context.fillStyle = 'black';
  context.fillRect(0, 0, width + 10, height + 10);
  context.fillStyle = 'white';
  context.fillRect(0, 10, 10, 10);
  context.fillRect(width, height - 10, 10, 10);
  // let bw = width;
  // let bh = height;
  // let p = 0;
  // function drawGrid () {
  //   for (let i = 0; i <= bw; i += 10) {
  //     context.moveTo(0.5 + i, 0);
  //     context.lineTo(0.5 + i, bh);
  //   }
  //   for (let j = 0; j <= bh; j += 10) {
  //     context.moveTo(0, 0.5 + j);
  //     context.lineTo(bw, 0.5 + j);
  //   }
  //   // context.strokeStyle = 'black';
  //   context.stroke();
  // }
  // drawGrid();
}


/***/ }),

/***/ "./maze_generators/dfs.js":
/*!********************************!*\
  !*** ./maze_generators/dfs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DFS; });
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! manhattan */ "./node_modules/manhattan/index.js");
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(manhattan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _create_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_grid */ "./maze_generators/create_grid.js");



class DFS {
  constructor (width, height) {
    this.grid = Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridArray"])(width, height);
    Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridGraphic"])(width*10, height*10);
    this.width = width;
    this.height = height;
    this.stack = []
  }

  animate (startNode) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let path = this.generatePaths(startNode);
    let connector;
    let i = 0;
    let interval = setInterval( () => {
      if (i === 0) {
        connector = null;
      } else {
        connector = this.connector(path[i-1], path[i])
      }
      context.fillStyle="white";
      if (connector) {
        context.fillRect(10*connector[0] + 10, 10*connector[1] + 10, 10, 10)
      }
      context.fillRect(10*path[i][0] + 10, 10*path[i][1] + 10, 10, 10);
      i++;
      if (i >= path.length) {
        context.fillStyle = 'white';
        context.fillRect(0, 10, 10, 10);
        context.fillRect(this.width, this.height - 10, 10, 10);
        clearInterval(interval);
      }
    }, 10);
  }

  connector (startNode, node) {
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

  generatePaths (startNode) {
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

  nextStep (startNode) {
    let neighbors = this.neighbors(startNode).filter(neighbor => !this.isVisited(neighbor));
    if (neighbors == null || neighbors.length == 0) {
      return null;
    }
    let randomIndex = Math.floor(Math.random() * neighbors.length);
    return neighbors[randomIndex];
  }

  unvisited () {
    return this.grid.filter(cell => !this.isVisited(cell))
  }

  isVisited(cell) {
    return cell[2] === true
  }

  backtrack (n) {
    let current = this.stack.slice(n)[0];
    if (this.nextStep(current)) {
      this.stack.push(current)
      return current;
    } else {
      n--;
      return this.backtrack(n);
    }
  }

  neighbors (startNode) {
    let nodes = [];
    this.grid.forEach((node) => {
      if ((startNode[0] == node[0] && startNode[1] == node[1] + 2) || (startNode[0] == node[0] && startNode[1] == node[1] - 2) || (startNode[0] == node[0] + 2 && startNode[1] == node[1]) || (startNode[0] == node[0] - 2 && startNode[1] == node[1])) {
        nodes.push(node);
      }
    })
    return nodes;
  }

}

class Node {
  constructor(row, col) {
    this.row = row
    this.col = col
    this.visited = false
  }
}


/***/ }),

/***/ "./maze_solvers/bfs.js":
/*!*****************************!*\
  !*** ./maze_solvers/bfs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BFS; });
/* harmony import */ var _maze_generators_dfs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maze_generators/dfs */ "./maze_generators/dfs.js");


class BFS {
  constructor (startNode, targetNode) {
    this.startNode = startNode;
    this.targetNode = targetNode;
    let dfs = new _maze_generators_dfs__WEBPACK_IMPORTED_MODULE_0__["default"](20, 20);
    debugger
    dfs.animate([0, 0]);
    this.maze = dfs.generatePaths([0,0]);
  }

  exploreNodes () {
    let canvas = document.getElementById("canvas");
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


/***/ }),

/***/ "./node_modules/manhattan/index.js":
/*!*****************************************!*\
  !*** ./node_modules/manhattan/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function distance(a, b) {
  var distance = 0
  var dimensions = Math.max(a.length, b.length)
  for (var i = 0; i < dimensions; i++) {
    distance += Math.abs((b[i] || 0) - (a[i] || 0))
  }
  return distance
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map