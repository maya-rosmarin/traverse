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
/* harmony import */ var _maze_generators_dfs_weighted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maze_generators/dfs_weighted */ "./maze_generators/dfs_weighted.js");
/* harmony import */ var _maze_generators_kruskal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maze_generators/kruskal */ "./maze_generators/kruskal.js");
/* harmony import */ var _maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maze_generators/create_grid */ "./maze_generators/create_grid.js");
/* harmony import */ var _maze_solvers_bfs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maze_solvers/bfs */ "./maze_solvers/bfs.js");






document.addEventListener('DOMContentLoaded', () => {
  Object(_maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_3__["createGridStatic"])();
  Object(_maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_3__["init"])();
  let weighted = document.getElementById('canvas-4');
  weighted.addEventListener("click", () => {
    new _maze_generators_dfs_weighted__WEBPACK_IMPORTED_MODULE_1__["default"](40, 40);
  })
  let dfsCanvas = document.getElementById('canvas-1');
  dfsCanvas.addEventListener("click", () => {
    let dfs = new _maze_generators_dfs__WEBPACK_IMPORTED_MODULE_0__["default"](40, 40, 'canvas-1');
    dfs.animate([0,0]);
  })
  let bfsCanvas = document.getElementById('canvas-5');
  bfsCanvas.addEventListener("click", () => {
    let bfs = new _maze_solvers_bfs__WEBPACK_IMPORTED_MODULE_4__["default"]([0, 0], [38, 38]);
  });
  // if (isScrolledIntoView(document.getElementById('canvas-1'))) {
  // }
  let kruskal = new _maze_generators_kruskal__WEBPACK_IMPORTED_MODULE_2__["default"](5, 5);
  kruskal.getEdges();
  // console.log(kruskal.join([0,2, false], [2,2, false]));
  // console.log(kruskal.connectNodes());
  console.log(kruskal.animate());
});


/***/ }),

/***/ "./maze_generators/bfs.js":
/*!********************************!*\
  !*** ./maze_generators/bfs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import * as manhattan from 'manhattan';
// import { createGridArray, createGridGraphic } from './create_grid';
//
// class BFS {
//   constructor (width, height) {
//     this.grid = createGridArray(width, height)
//     this.width = width;
//     this.height = height;
//     createGridGraphic(width*10, height*10);
//   }
//
//   // push all children of every node visited to queue
//
//   generatePaths (startNode) {
//     let queue = [[startNode]];
//     let pathCells = [startNode];
//     while (queue.length > 0) {
//       let current = queue.shift();
//       let child = this.selectRandomPathChild(this.children(current[0]), pathCells, queue);
//       console.log("visiting " + child)
//       // queue.push(this.children(current[0]))
//       // pathCells.push(this.children(current[0]))
//       // let children = this.children(current)
//       // debugger
//       // queue = queue.concat(children);
//       // pathCells = pathCells.concat(children);
//       this.animateChild(child, pathCells);
//     }
//     debugger
//     // this.ensureLongPath(pathCells);
//     //let tangent = this.generateTangentPaths(this.selectRandomUnvisitedCell());
//     // console.log(tangent);
//   };
//
//   unvisited () {
//     debugger
//     let unvisited = [];
//     for (let key in this.grid) {
//       if (this.grid[key] === false) {
//         unvisited.push(key)
//       };
//     }
//     return unvisited;
//   }
//
//   nextStep (currentNode, unvisited) {
//     debugger
//     let children = this.children(currentNode);
//     if (children) {
//       children = children.filter(child => { return this.children(child).length >= 1 && this.arrayIncludes(unvisited, child) })
//       let randomIndex = Math.floor(Math.random() * children.length)
//       this.grid[children[randomIndex]] = true;
//       return children[randomIndex];
//     }
//   }
//
//   animate (coords) {
//     let canvas = document.getElementById("canvas-1");
//     let context = canvas.getContext("2d");
//     let i = 0;
//     let interval = setInterval( () => {
//       context.fillStyle='white';
//       context.fillRect(10*coords[i][0], 10*coords[i][1], 10, 10);
//       i++;
//     }, 100);
//     if (i >= coords.length) {
//       clearInterval(interval);
//     }
//   }
//
//
//   animateChild (child, pathCells) {
//     let canvas = document.getElementById("canvas-1");
//     let context = canvas.getContext("2d");
//     let i = 0;
//     if (child) {
//       let interval = setInterval( () => {
//       context.fillStyle='black';
//       context.fillRect(10*child[0], 10*child[1], 10, 10);
//       i++;
//     }, 200);
//     if (i >= pathCells.length) {
//       clearInterval(interval);
//       }
//     }
//   }
//
//   generateTangentPaths (startNode) {
//     let canvas-1 = document.getElementById("canvas-1");
//     let context = canvas.getContext("2d");
//     let unvisited = this.unvisited();
//     let steps = [];
//     if (unvisited) {
//       debugger
//       let nextStep = this.nextStep(startNode, unvisited);
//       for (let i = 0; i < 5; i++) {
//         steps.push(nextStep);
//         nextStep = this.nextStep(nextStep, unvisited);
//       }
//     }
//     const array = steps.filter(step => step)
//     array.forEach(step => {
//       console.log(step)
//       this.grid[step] = true;
//       context.fillStyle='white';
//       context.fillRect(10*step[0], 10*step[1], 10, 10);
//     })
//     return array
//   }
//
//   selectRandomUnvisitedCell () {
//     let unvisited = this.unvisited();
//     let randomIndex = (Math.floor(Math.random() * unvisited.length));
//     this.grid[Object.keys(this.grid)[randomIndex]] = true;
//     return Object.keys(this.grid)[randomIndex];
//   }
//
//   selectRandomPathChild (children, pathCells, queue) {
//     children = children.filter(child =>
//       { return this.children(child).length > 0 && !this.arrayIncludes(pathCells, child)});
//
//     if (children && children.length > 0) {
//       let randomIndex = Math.floor(Math.random() * children.length)
//       let child = children[randomIndex];
//       pathCells.push(child);
//       queue.push([child])
//       this.grid[child] = true;
//       return child;
//     }
//   }
//
//   ensureLongPath (pathCells) {
//     let sorted;
//     pathCells.splice(-1, 1);
//     let filtered = pathCells.filter(cell => cell[0] === this.width-1)
//     if (!filtered.length) {
//       sorted = pathCells.sort((el1, el2) => {
//         return el1[0] - el2[0];
//       })
//       // this.nextStep(sorted.pop(), this.unvisited());
//       this.generatePaths(sorted.pop())
//     }
//   }
//
//   generate (root) {
//     let queue = [[root]];
//     let visitedNodes = [root];
//     while (queue.length) {
//       let visited = queue.shift();
//       if (typeof visited === "string") {
//         visited = visited.split(",").map(i => Number(i));
//       } else if (visited.length === 1) {
//         visited = visited[0];
//       }
//       this.grid[visited] = true;
//       let children = this.children(visited)
//       if (!children.length) {
//         continue;
//       }
//       for (let i = 0; i < children.length; i++) {
//         if (!this.arrayIncludes(visitedNodes, children[i])) {
//           queue.push(children[i]);
//           visitedNodes.push(children[i])
//         }
//       }
//     }
//     return visitedNodes;
//   };
//
//   arrayIncludes (array, node) {
//     if (typeof node === 'string') {
//       node = node.split(',').map(i => Number(i));
//     }
//     for (let i = 0; i < array.length; i++) {
//       if (typeof array[i] === 'string') {
//         array[i] = array[i].split(',').map(i => Number(i));
//       }
//       if (array[i][0] == node[0] && array[i][1] == node[1]) {
//         return true;
//       }
//     }
//     return false;
//   }
//
//
//   // animatePath (node, limit) {
//   //   let i = 0;
//   //   let interval = setInterval( () => {
//   //     context.fillStyle='white';
//   //     context.fillRect(10*node[0], 10*node[1], 10, 10);
//   //     i++;
//   //     },
//   //   2000);
//   //   if (i >= limit) {
//   //     clearInterval(interval);
//   //   }
//   // }
//
//   children (node) {
//     if (node) {
//       if (typeof node === 'string') {
//         node = node.split(',').map(i => Number(i))
//       }
//     let childrenNodes = [];
//       Object.keys(this.grid).map(key => {
//         let coord = key.split(',').map(i => Number(i));
//         if ((coord[0] == node[0] && coord[1] == node[1] + 1) || (coord[0] == node[0] && coord[1] == node[1] - 1) || (coord[0] == node[0] + 1 && coord[1] == node[1]) || (coord[0] == node[0] - 1 && coord[1] == node[1])) {
//           childrenNodes.push(coord);
//         }
//       }
//     )
//     return childrenNodes;
//   }
//   }
//
// }
//
// export default BFS


/***/ }),

/***/ "./maze_generators/create_grid.js":
/*!****************************************!*\
  !*** ./maze_generators/create_grid.js ***!
  \****************************************/
/*! exports provided: mazeVis, createGridArray, createWallsArray, createGridGraphic, createGridStatic, init, isScrolledIntoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mazeVis", function() { return mazeVis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridArray", function() { return createGridArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWallsArray", function() { return createWallsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridGraphic", function() { return createGridGraphic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridStatic", function() { return createGridStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScrolledIntoView", function() { return isScrolledIntoView; });
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! manhattan */ "./node_modules/manhattan/index.js");
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(manhattan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bfs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bfs */ "./maze_generators/bfs.js");
/* harmony import */ var _bfs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bfs__WEBPACK_IMPORTED_MODULE_1__);



const mazeVis = () => {
  undefined.createGridStatic(500, 500);
  undefined.init();
}

const createGridArray = (width, height, start1 = 0, start2 = 0) => {
  let nodes = [];
  for (let i = start1; i < width; i+=2) {
    for (let j = start2; j < height; j+=2) {
      nodes.push([i, j, false]);
    }
  }
  return nodes;
}

const createWallsArray = (height, width) => {
  let walls = [];
  for (let i = 0; i < width + 1; i++) {
    for (let j = 0; j < height + 1; j++) {
      // either i or j is odd
      if (i % 2 !== 0 ^ j % 2 !== 0) {
        walls.push([i, j])
      }
    }
  }
  return walls;
}

const createGridGraphic = (width, height) => {
  let canvas = document.getElementById("canvas-1");
  let context = canvas.getContext("2d");
  context.fillStyle = 'black';
  context.fillRect(0, 0, width + 10, height + 10);
  context.fillStyle = 'white';
  context.fillRect(0, 10, 10, 10);
  context.fillRect(width, height - 10, 10, 10);
}

const createGridStatic = (width, height) => {
  let canvas = document.getElementById("canvas-2");
  let context = canvas.getContext("2d");
  context.fillStyle = 'lightgray';
  context.fillRect(0, 0, 500, 500);
  let bw = 500;
  let bh = 500;
  let p = 0;
  function drawGrid () {
    for (let i = 0; i <= bw; i += 50) {
      context.moveTo(0.5 + i, 0);
      context.lineTo(0.5 + i, bh);
    }
    for (let j = 0; j <= bh; j += 50) {
      context.moveTo(0, 0.5 + j);
      context.lineTo(bw, 0.5 + j);
    }
    context.strokeStyle = 'black';
    context.stroke();
  }
  context.fillStyle = 'gray';
  for (let k = 0; k < 450; k += 100) {
    context.fillRect(k, 0, 50, 2000)
    context.fillRect(0, k, 2000, 50)
  }
  context.fillStyle = 'lightgray';
  let l = 100;
  let m = 50;
  let interval = setInterval(() => {
    context.fillRect(l, m, 50, 50)
    if (l > 250) {
      l = 0;
      m += 100;
    } else if (m > 350) {
      clearInterval(interval);
    }
    l += 100;
  }, 670)
}

const init = () => {
  updateCanvas();
}

function updateCanvas () {
  let width = 500;
  let height = 500;
  let myCanvas = document.getElementById("canvas-3");
    myCanvas.width = width;
    myCanvas.height = height;

  let context = myCanvas.getContext("2d");
    context.clearRect(0,0,width,height);
    context.fillStyle = "white";
    context.fillRect(0,0,width,height);

    let rad=10;
    let gaps= rad*2;
    let widthCount = parseInt(width/gaps);
    let heightCount = parseInt(height/gaps);
    let coords = []
    for(let x=0; x<widthCount;x++){
      for(let y=0; y<heightCount;y++){
        if (x % 2 === 0 || y % 2 === 0) {
          context.fillStyle = 'gray';
        } else {
          context.fillStyle = 'lightgray'
        }
        context.beginPath();
        context.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true );
        context.closePath();
        context.fill();
      }
      let x2 = 2;
      let y2 = 1;
      let interval = setInterval(() => {
        context.beginPath();
        context.arc(rad+gaps*x2,rad+ gaps*y2, rad, 0, Math.PI*2, true );
        context.closePath();
        context.fill();
        if (x2 === 22) {
          x2 = 0;
          y2 += 2;
        } else if (y2 === 22) {
          clearInterval(interval);
        }
        x2++;
      }, 100)
      context.fillStyle = 'lightgray';
    }
}

const isScrolledIntoView = (el) => {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
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
  constructor (width, height, canvasId) {
    this.grid = Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridArray"])(width, height);
    Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridGraphic"])(width*10, height*10);
    this.canvasId = canvasId;
    this.width = width;
    this.height = height;
    this.stack = []
  }

  animate (startNode, callback, fillColor) {
      let canvas = document.getElementById(this.canvasId);
      let context = canvas.getContext("2d");
      let path = this.generatePaths(startNode);
      let connector;
      context.fillStyle='white'
      let i = 0;
      let interval = setInterval( () => {
        if (i === 0) {
          connector = null;
        } else {
          connector = this.connector(path[i-1], path[i])
        }
        if (connector) {
          context.fillRect(10*connector[0] + 10, 10*connector[1] + 10, 10, 10)
        }
        context.fillRect(10*path[i][0] + 10, 10*path[i][1] + 10, 10, 10);
        i++;
        if (i >= path.length) {
          clearInterval(interval);
          context.fillRect(410, 400, 10, 10)
          document.getElementById("real-thing").innerHTML = 'Looks like the real thing!'
          if (callback) {
            return callback();
          }
          return 'finished';
        }
      }, 30);
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

  isVisited (node) {
    return node[2] === true
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

// class Node {
//   constructor(row, col) {
//     this.row = row
//     this.col = col
//     this.visited = false
//   }
// }


/***/ }),

/***/ "./maze_generators/dfs_weighted.js":
/*!*****************************************!*\
  !*** ./maze_generators/dfs_weighted.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DFSWeighted; });
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! manhattan */ "./node_modules/manhattan/index.js");
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(manhattan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _create_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_grid */ "./maze_generators/create_grid.js");
/* harmony import */ var _dfs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dfs */ "./maze_generators/dfs.js");




class DFSWeighted {
  constructor (width, height) {
    this.grid = Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridArray"])(width, height);
    Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridGraphic"])(width*10, height*10);
    this.width = width;
    this.height = height;
    this.stack = []
    this.animate([-2, 0]);
  }

  animate (startNode) {
    let canvas = document.getElementById("canvas-4");
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
      if (connector) {
        context.fillRect(10*connector[0], 10*connector[1], 10, 10) }
        context.fillRect(10*path[i][0], 10*path[i][1], 10, 10);
        i++;
        if (i >= path.length) {
          clearInterval(interval);
        }
      }, 30);
      context.fillStyle='pink';
      context.fillRect(0, 10, 10, 10);
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
    neighbors = neighbors.sort((node1, node2) => {
      return manhattan__WEBPACK_IMPORTED_MODULE_0__(node1.slice(-1)[0], [18, 18]) - manhattan__WEBPACK_IMPORTED_MODULE_0__(node2.slice(-1)[0], [18, 18])
    });
    return neighbors[0];
  }

  unvisited () {
    return this.grid.filter(cell => !this.isVisited(cell))
  }

  isVisited (node) {
    return node[2] === true
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


/***/ }),

/***/ "./maze_generators/kruskal.js":
/*!************************************!*\
  !*** ./maze_generators/kruskal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Kruskal; });
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! manhattan */ "./node_modules/manhattan/index.js");
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(manhattan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ml_disjoint_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-disjoint-set */ "./node_modules/ml-disjoint-set/src/DisjointSet.js");
/* harmony import */ var ml_disjoint_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ml_disjoint_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _create_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_grid */ "./maze_generators/create_grid.js");
/* harmony import */ var _dfs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dfs */ "./maze_generators/dfs.js");





class Kruskal {
  constructor (width, height) {
    this.grid = Object(_create_grid__WEBPACK_IMPORTED_MODULE_2__["createGridArray"])(width, height);
    this.sets = this.createSets();
    this.edges = this.shuffle(this.getEdges(height, width));
    this.dfs = new _dfs__WEBPACK_IMPORTED_MODULE_3__["default"](5, 5, 'canvas-6');
    this.neighbors = this.dfs.neighbors;
    this.fill = [];
  }

  createSets () {
    let sets = new ml_disjoint_set__WEBPACK_IMPORTED_MODULE_1__();
    for (let i = 0; i < this.grid.length; i++) {
      sets.add(this.grid[i]);
    }
    return sets;
  }

  getEdges (height, width) {
    let edges = [];
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (i > 0) {
          edges.push([i, j, 'n'])
        }
        if (j > 0) {
          edges.push([i, j, 'w'])
        }
      }
    }
    return edges;
  }

  animate () {
    // let canvas = document.getElementById('canvas-6');
    // let context = canvas.getContext("2d");
    // let fill = this.connectNodes();
    // console.log(fill);
    // context.fillStyle='white';
    // let i = 0;
    // debugger
    // let interval = setInterval( () => {
    //   context.fillRect(10*fill[i][0], 10*fill[i][1], 10, 10);
    //   i++;
    //   if (i >= fill.length) {
    //     clearInterval(interval);
    //   }
    // }, 10);
  }

  shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  connectNodes () {
    let dY = {'e': 1, 'w': -1, 'n': 0, 's': 0};
    let dX = {'e': 0, 'w': 0, 'n': -1, 's': 1};
    let oppositeDirections = {'e': 'w', 'w': 'e', 'n': 's', 's': 'n'};
    while (this.edges.length > 0) {
      let x = this.edges[0][0];
      let y = this.edges[0][1];
      let direction = this.edges[0][2];
      let nx = x + dX[direction];
      let ny = y + dY[direction];
      let set1 = this.sets[y][x];
      let set2 = this.sets[ny][nx];
      this.edges.shift();
      if (!this.sets.connected(set1, set2)) {
        this.sets.union(set1, set2);
        this.grid[y][x][2] = direction;
        this.grid[ny][nx][2] = oppositeDirections[direction];
      }
    }
    // // while (this.removed.length < this.grid.length - 1) {
    //   let current = this.randomNode(this.grid);
    //   let walledNeighbors = [];
    //   let neighbors = this.neighbors(current);
    //   for (let i = 0; i < neighbors.length; i++) {
    //     debugger
    //     if (this.isWallUp(current, neighbors[i])) {
    //       walledNeighbors.push(neighbors[i]);
    //     }
    //   }
    //   if (walledNeighbors.length) {
    //     debugger
    //     let randomNeighbor = this.randomNode(walledNeighbors);
    //     let wall = this.wall(current, randomNeighbor);
    //        this.delete(wall, this.walls);
    //        this.removed.push(wall);
    //        this.fill.push(wall);
    //        this.fill.push(current);
    //        this.fill.push(randomNeighbor);
    //   }
    // // }
    // return this.fill;

  }

  // if any of a nodes neighbors exist in the set, break down wall between them

  // join (node1, node2) {
  //   let value = node2.slice();
  //   this.delete(node2, this.grid);
  //   let nodeIdx = this.indexOf(this.grid, node1);
  //   node1 = node1.concat([node2])
  //   this.grid[nodeIdx] = node1;
  //   return node1;
  // }

  wall (node1, node2) {
    let xCoord = (node1[0] + node2[0])/2;
    let yCoord = (node1[1] + node2[1])/2;
    return [xCoord, yCoord];
  }

  isWallUp (node1, node2) {
    if (this.arrayIncludes(this.walls, this.wall(node1, node2))) {
      return true;
    }
    return false;
  }

  randomNode (arr) {
    let length = arr.length;
    let index = Math.floor(Math.random() * length);
    return arr[index];
  }

  delete (node, array) {
    let index = this.indexOf(array, node);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  indexOf (arr, el) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === el[0] && arr[i][1] === el[1]) {
        return i;
      }
    }
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
    this.dfs = new _maze_generators_dfs__WEBPACK_IMPORTED_MODULE_0__["default"](40, 40, 'canvas-5');
    this.maze = this.dfs.generatePaths([0,0]);
    this.mazePaths = this.moves();
    this.dfs.animate([0,0], () => this.animate(this.exploreNodes(), 'pink'))
    // this.dfs.animate([0,0]).then(() => this.animate(this.exploreNodes(), 'pink'));
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
        // if (i === 0) {
        //   connector = null;
        // } else {
        //   connector = this.dfs.connector(path[i-1], path[i])
        // }
        // if (connector) {
        //   context.fillRect(10*connector[0] + 10, 10*connector[1] + 10, 10, 10)
        // }
        context.fillStyle=fillColor;
        context.fillRect(10*path[i][0] + 10, 10*path[i][1] + 10, 10, 10);
        i++;
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


/***/ }),

/***/ "./node_modules/ml-disjoint-set/src/DisjointSet.js":
/*!*********************************************************!*\
  !*** ./node_modules/ml-disjoint-set/src/DisjointSet.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @class DisjointSet
 */
class DisjointSet {
    constructor() {
        this.nodes = new Map();
    }

    /**
     * Adds an element as a new set
     * @param {*} value
     * @return {DisjointSetNode} Object holding the element
     */
    add(value) {
        var node = this.nodes.get(value);
        if (!node) {
            node = new DisjointSetNode(value);
            this.nodes.set(value, node);
        }
        return node;
    }

    /**
     * Merges the sets that contain x and y
     * @param {DisjointSetNode} x
     * @param {DisjointSetNode} y
     */
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) {
            return;
        }
        if (rootX.rank < rootY.rank) {
            rootX.parent = rootY;
        } else if (rootX.rank > rootY.rank) {
            rootY.parent = rootX;
        } else {
            rootY.parent = rootX;
            rootX.rank++;
        }
    }

    /**
     * Finds and returns the root node of the set that contains node
     * @param {DisjointSetNode} node
     * @return {DisjointSetNode}
     */
    find(node) {
        var rootX = node;
        while (rootX.parent !== null) {
            rootX = rootX.parent;
        }
        var toUpdateX = node;
        while (toUpdateX.parent !== null) {
            var toUpdateParent = toUpdateX;
            toUpdateX = toUpdateX.parent;
            toUpdateParent.parent = rootX;
        }
        return rootX;
    }

    /**
     * Returns true if x and y belong to the same set
     * @param {DisjointSetNode} x
     * @param {DisjointSetNode} y
     */
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

module.exports = DisjointSet;

function DisjointSetNode(value) {
    this.value = value;
    this.parent = null;
    this.rank = 0;
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map