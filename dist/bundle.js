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
/* harmony import */ var _maze_generators_dfs_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maze_generators/dfs_util */ "./maze_generators/dfs_util.js");
/* harmony import */ var _maze_generators_kruskal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maze_generators/kruskal */ "./maze_generators/kruskal.js");
/* harmony import */ var _maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maze_generators/create_grid */ "./maze_generators/create_grid.js");
/* harmony import */ var _maze_solvers_bfs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maze_solvers/bfs */ "./maze_solvers/bfs.js");







document.addEventListener('DOMContentLoaded', () => {
  Object(_maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_4__["createGridStatic"])();
  Object(_maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_4__["init"])();
  let weighted = document.getElementById('dfs-weighted-run');
  let dfsWeighted = new _maze_generators_dfs_weighted__WEBPACK_IMPORTED_MODULE_1__["default"](40, 40);
  weighted.addEventListener("click", (event) => {
    event.preventDefault();
    dfsWeighted.animate([-2, 0]);
  });
  let weightedReset = document.getElementById('dfs-weighted-reset');
  weighted.addEventListener("click", (event) => {
    event.preventDefault();
    // let resetDfsWeighted = new DFSWeighted(40, 40);
    dfsWeighted.clearCanvas();
  });
  let dfsCanvas = document.getElementById('canvas-1');
  dfsCanvas.addEventListener("click", () => {
    let dfs = new _maze_generators_dfs__WEBPACK_IMPORTED_MODULE_0__["default"](40, 40, 'canvas-1');
    dfs.animate([0,0]);
  });
  let bfsCanvas = document.getElementById('canvas-5');
  bfsCanvas.addEventListener("click", () => {
    let bfs = new _maze_solvers_bfs__WEBPACK_IMPORTED_MODULE_5__["default"]([0, 0], [38, 38]);
    bfs.dfs.animate([0,0], () => bfs.animate(bfs.exploreNodes(), 'white'))
  });
  // if (isScrolledIntoView(document.getElementById('canvas-1'))) {
  // }
  let kruskal = document.getElementById('canvas-6');
  kruskal.addEventListener("click", () => {
    let kruskal = new _maze_generators_kruskal__WEBPACK_IMPORTED_MODULE_3__["default"](40, 40);
  });

  // let dfsutil = new DFSUtil(5, 5, 'canvas-7');
  // dfsutil.generatePaths([0,0]);
});


/***/ }),

/***/ "./maze_generators/create_grid.js":
/*!****************************************!*\
  !*** ./maze_generators/create_grid.js ***!
  \****************************************/
/*! exports provided: createGridArray, createWallsArray, createGridGraphic, createGridStatic, init, isScrolledIntoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridArray", function() { return createGridArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWallsArray", function() { return createWallsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridGraphic", function() { return createGridGraphic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridStatic", function() { return createGridStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScrolledIntoView", function() { return isScrolledIntoView; });
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! manhattan */ "./node_modules/manhattan/index.js");
/* harmony import */ var manhattan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(manhattan__WEBPACK_IMPORTED_MODULE_0__);


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
  context.fillStyle = '#B7979C';
  context.fillRect(0, 10, 10, 10);
  context.fillRect(width, height - 10, 10, 10);
}

const createGridStatic = (width, height) => {
  let canvas = document.getElementById("canvas-2");
  let context = canvas.getContext("2d");
  context.fillStyle = '#d6c4c7';
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
  context.fillStyle = '#A67D7D';
  for (let k = 0; k < 450; k += 100) {
    context.fillRect(k, 0, 50, 2000)
    context.fillRect(0, k, 2000, 50)
  }
  context.fillStyle = '#d6c4c7';
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
          context.fillStyle = '#996D73';
        } else {
          context.fillStyle = '#d6c4c7'
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
      context.fillStyle = '#d6c4c7';
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
/* harmony import */ var _dfs_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dfs_util */ "./maze_generators/dfs_util.js");




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
    context.fillStyle='#B7979C'
    let i = 0;
    let interval = setInterval( () => {
      if (i === 0) {
        connector = null;
      } else {
        connector = _dfs_util__WEBPACK_IMPORTED_MODULE_2__["connector"](path[i-1], path[i])
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
          document.getElementById("solved").innerHTML = 'Solving...'
          return callback();
        }
        return 'finished';
      }
    }, 20);
  }

  generatePaths (startNode) {
    startNode[2] = true;
    this.stack.push(startNode);
    let last = startNode;
    while (_dfs_util__WEBPACK_IMPORTED_MODULE_2__["unvisited"](this.grid).length) {
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
    let neighbors = this.neighbors(startNode).filter(neighbor => !_dfs_util__WEBPACK_IMPORTED_MODULE_2__["isVisited"](neighbor));
    if (neighbors == null || neighbors.length == 0) {
      return null;
    }
    let randomIndex = Math.floor(Math.random() * neighbors.length);
    return neighbors[randomIndex];
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

/***/ "./maze_generators/dfs_util.js":
/*!*************************************!*\
  !*** ./maze_generators/dfs_util.js ***!
  \*************************************/
/*! exports provided: connector, generatePaths, unvisited, isVisited, backtrack, neighbors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connector", function() { return connector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePaths", function() { return generatePaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unvisited", function() { return unvisited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisited", function() { return isVisited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backtrack", function() { return backtrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neighbors", function() { return neighbors; });
/* harmony import */ var _create_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_grid */ "./maze_generators/create_grid.js");


  const connector = (startNode, node) => {
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

  const generatePaths = (startNode) => {
    startNode[2] = true;
    undefined.stack.push(startNode);
    let last = startNode;
    while (undefined.unvisited().length) {
      let step = undefined.nextStep(last);
      if (!step) {
        last = undefined.backtrack(-1);
      } else {
        step[2] = true;
        undefined.stack.push(step);
        last = undefined.stack.slice(-1)[0];
      }
    }
    return undefined.stack;
  }

  const unvisited = (grid) => {
    return grid.filter(cell => cell[2] === false)
  }

  const isVisited = (node) => {
    return node[2] === true
  }

  const backtrack = (n, stack, callback) => {
    let current = stack.slice(n)[0];
    if (callback(current)) {
      stack.push(current)
      return current;
    } else {
      n--;
      return backtrack(n);
    }
  }

  const neighbors = (startNode, grid) => {
    debugger
    let nodes = [];
    grid.forEach((node) => {
      if ((startNode[0] == node[0] && startNode[1] == node[1] + 2) || (startNode[0] == node[0] && startNode[1] == node[1] - 2) || (startNode[0] == node[0] + 2 && startNode[1] == node[1]) || (startNode[0] == node[0] - 2 && startNode[1] == node[1])) {
        nodes.push(node);
      }
    })
    return nodes;
  }


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
/* harmony import */ var _dfs_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dfs_util */ "./maze_generators/dfs_util.js");




class DFSWeighted {
  constructor (width, height) {
    this.grid = Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridArray"])(width, height);
    Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridGraphic"])(width*10, height*10);
    this.stack = []
  }

  clearCanvas () {
    debugger
    let canvas = document.getElementById('canvas-4');
    let context = canvas.getContext('2d');
    context.clearRect(10, 10, canvas.width, canvas.height);
    // context.fillStyle='orange';
    // context.fillRect(10, 0, 20, 20);
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
        connector = _dfs_util__WEBPACK_IMPORTED_MODULE_2__["connector"](path[i-1], path[i])
      }
      if (connector) {
        context.fillRect(10*connector[0], 10*connector[1], 10, 10) }
        context.fillRect(10*path[i][0], 10*path[i][1], 10, 10);
        i++;
        if (i >= path.length) {
          clearInterval(interval);
        }
      }, 20);
      context.fillStyle='#B7979C';
      context.fillRect(0, 10, 10, 10);
  }

  generatePaths (startNode) {
    debugger
    startNode[2] = true;
    this.stack.push(startNode);
    let last = startNode;
    while (_dfs_util__WEBPACK_IMPORTED_MODULE_2__["unvisited"](this.grid).length) {
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
    let neighbors = _dfs_util__WEBPACK_IMPORTED_MODULE_2__["neighbors"](startNode, this.grid).filter(neighbor => !_dfs_util__WEBPACK_IMPORTED_MODULE_2__["isVisited"](neighbor));
    if (neighbors == null || neighbors.length == 0) {
      return null;
    }
    neighbors = neighbors.sort((node1, node2) => {
      return manhattan__WEBPACK_IMPORTED_MODULE_0__(node1.slice(-1)[0], [18, 18]) - manhattan__WEBPACK_IMPORTED_MODULE_0__(node2.slice(-1)[0], [18, 18])
    });
    return neighbors[0];
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
/* harmony import */ var _create_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_grid */ "./maze_generators/create_grid.js");


class Kruskal {
  constructor (width, height) {
    this.grid = Object(_create_grid__WEBPACK_IMPORTED_MODULE_0__["createGridArray"])(width, height);
    this.sets = this.createSets(width, height);
    this.edges = this.shuffle(this.createEdges(width, height));
    this.fill = [];
    this.connectNodes()
    this.animate();
  }

  animate (callback) {
    let canvas = document.getElementById('canvas-6');
    let context = canvas.getContext("2d");
    let fill = this.fill;
    context.fillStyle='white';
    let i = 0;
    let interval = setInterval( () => {
      context.fillRect(10*fill[i][0], 10*fill[i][1], 10, 10);
      i++;
      if (i >= fill.length) {
        if (callback) {
          return callback();
        }
        clearInterval(interval);
      }
    }, 2);
  }

  connectNodes () {
    let dY = {'e': 2, 'w': -2, 'n': 0, 's': 0};
    let dX = {'e': 0, 'w': 0, 'n': -2, 's': 2};
    let oppositeDirections = {'e': 'w', 'w': 'e', 'n': 's', 's': 'n'};
    while (this.edges.length > 0) {
      debugger
      let x = this.edges[0][0];
      let y = this.edges[0][1];
      let direction = this.edges[0][2];
      let nx = x + dX[direction];
      let ny = y + dY[direction];
      this.edges.shift();
      let set1 = this.findSetByLocation(x, y);
      let set2 = this.findSetByLocation(nx, ny);
      if (!set1.isConnected(set2)) {
        set1.connect(set2);
        this.fill.push(set1.location);
        this.fill.push(set2.location);
        this.fill.push(this.wall(set1.location, set2.location))
        this.findCellByLocation(x, y)[2] = direction;
        this.findCellByLocation(nx, ny)[2] = oppositeDirections[direction];
      }
    }
    return this.fill;
  }

  createSets (width, height) {
    let sets = [];
    for (let i = 0; i < this.grid.length; i++) {
      sets.push(new Tree([this.grid[i][0],this.grid[i][1]]))
    }
    return sets;
  }

  createEdges (width, height) {
    let edges = [];
    for (let i = 0; i < width; i+=2) {
      for (let j = 0; j < height; j+=2) {
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

  shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  findSetByLocation (xCoord, yCoord) {
    return this.sets.find(set => set.location[0] === xCoord && set.location[1] === yCoord);
  }

  findCellByLocation (xCoord, yCoord) {
    return this.grid.find(cell => cell[0] === xCoord && cell[1] === yCoord);
  }

  wall (node1, node2) {
    let xCoord = (node1[0] + node2[0])/2;
    let yCoord = (node1[1] + node2[1])/2;
    return [xCoord, yCoord];
  }

};

class Tree {
  constructor (location) {
    this.parent = null;
    this.location = location;
  }

  root () {
    return this.parent ? this.parent.root() : this
  }

  isConnected (tree) {
    return this.root() === tree.root();
  }

  connect (tree) {
    return tree.root().parent = this;
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
    this.dfs.animate([0,0], () => this.animate(this.exploreNodes(), '#cbb3b7'))
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