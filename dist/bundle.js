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
/* harmony import */ var _maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maze_generators/create_grid */ "./maze_generators/create_grid.js");
/* harmony import */ var _maze_solvers_bfs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maze_solvers/bfs */ "./maze_solvers/bfs.js");
/* harmony import */ var _maze_generators_random__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maze_generators/random */ "./maze_generators/random.js");






document.addEventListener('DOMContentLoaded', () => {
  let dfs = new _maze_generators_dfs__WEBPACK_IMPORTED_MODULE_0__["default"](40, 40);
  // dfs.animate([0,0]);
  Object(_maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_2__["createGridStatic"])();
  Object(_maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_2__["init"])();
  let weighted = new _maze_generators_dfs_weighted__WEBPACK_IMPORTED_MODULE_1__["default"](40, 40);
  weighted.animate([0,0]);
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
/*! exports provided: createGridArray, createGridGraphic, createGridStatic, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridArray", function() { return createGridArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridGraphic", function() { return createGridGraphic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridStatic", function() { return createGridStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! manhattan */ "./node_modules/manhattan/index.js");
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(manhattan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bfs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bfs */ "./maze_generators/bfs.js");
/* harmony import */ var _bfs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bfs__WEBPACK_IMPORTED_MODULE_1__);



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
  context.fillStyle = 'white';
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
  drawGrid();
}

const init = () => {
  updateCanvas();
}

function updateCanvas () {
  var width = 500;
  var height = 500;
  var myCanvas = document.getElementById("canvas-3");
    myCanvas.width = width;
    myCanvas.height = height;

  var context = myCanvas.getContext("2d");
    context.clearRect(0,0,width,height);
    context.fillStyle = "white";
    context.fillRect(0,0,width,height);

    var rad=10;
    var gaps= rad*2;
    var widthCount = parseInt(width/gaps);
    var heightCount = parseInt(height/gaps);
    for(var x=0; x<widthCount;x++){
      for(var y=0; y<heightCount;y++){
        if (x % 2 === 0 || y % 2 === 0) {
          context.fillStyle = 'gray';
        } else {
          context.fillStyle = 'lightgray'
        }
        if (y === 2 && x % 2 !== 0) {
          // let interval = setInterval(() => {
            context.fillStyle = 'gray'
          // }, 500)
        }
        // context.fillStyle = 'pink'
        context.beginPath();
        context.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true );
        context.closePath();
        context.fill();
      }
    }
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
    let canvas = document.getElementById("canvas-1");
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
        context.fillRect(10*connector[0] + 10, 10*connector[1] + 10, 10, 10)
      }
      context.fillRect(10*path[i][0] + 10, 10*path[i][1] + 10, 10, 10);
      i++;
      if (i >= path.length) {
        clearInterval(interval);
      }
    }, 30);
    context.fillStyle='white';
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
  }

  animate (startNode) {
    debugger
    let canvas = document.getElementById("canvas-4");
    let context = canvas.getContext("2d");
    let path = this.generatePaths(startNode);
    debugger
    let connector;
    let i = 0;
    let interval = setInterval( () => {
      if (i === 0) {
        connector = null;
      } else {
        connector = this.connector(path[i-1], path[i])
      }
      if (connector) {
        console.log(path[i-1])
        console.log(path[i])
        console.log(connector)
        debugger
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

  generatePaths (startNode) {
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
    console.log(this.stack);
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

/***/ "./maze_generators/random.js":
/*!***********************************!*\
  !*** ./maze_generators/random.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Random; });
/* harmony import */ var _create_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_grid */ "./maze_generators/create_grid.js");
/* harmony import */ var _dfs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dfs */ "./maze_generators/dfs.js");



class Random {
  constructor (width, height) {
    this.grid = Object(_create_grid__WEBPACK_IMPORTED_MODULE_0__["createGridArray"])(width, height);
    Object(_create_grid__WEBPACK_IMPORTED_MODULE_0__["createGridGraphic"])(width*10, height*10);
    this.width = width;
    this.height = height;
    this.path = [];
    this.dfs = new _dfs__WEBPACK_IMPORTED_MODULE_1__["default"](width, height)
  }

  generatePaths (startNode) {
    startNode[2] = true;
    while (this.dfs.unvisited().length) {
      this.path.push(startNode);
      this.path.push(this.dfs.neighbors(startNode));
    }
    console.log(this.path);
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