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
/* harmony import */ var _maze_generators_bfs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maze_generators/bfs */ "./maze_generators/bfs.js");
/* harmony import */ var _maze_generators_create_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maze_generators/create_grid */ "./maze_generators/create_grid.js");



document.addEventListener('DOMContentLoaded', () => {
  let bfs = new _maze_generators_bfs__WEBPACK_IMPORTED_MODULE_0__["default"](10, 10);
  // createGridGraphic(400, 400);
  // bfs.animate(bfs.generate([0,0]));
  // console.log(bfs.unvisited().length);
  // console.log(bfs.nextStep([5,5]))
  // console.log(bfs.unvisited().length);  console.log(bfs.nextStep([5,6]))
  bfs.generatePaths([0,0]);
  // bfs.nextStep([0,0])
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
    Object(_create_grid__WEBPACK_IMPORTED_MODULE_1__["createGridGraphic"])(width*5, height*5);
  }


  unvisited () {
    let unvisited = [];
    for (let key in this.grid) {
      if (this.grid[key] === false) {
        unvisited.push(key)
      };
    }
    return unvisited;
  }

  nextStep (currentNode) {
    debugger
    let children = this.children(currentNode);
    children = children.filter(child => { return this.children(child).length >= 2 && this.arrayIncludes(this.unvisited(), child) })
    let randomIndex = Math.floor(Math.random() * children.length)
    this.grid[children[randomIndex]] = true;
    console.log(children[randomIndex]);
  }

  animate (coords) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let i = 0;
    let interval = setInterval( () => {
      context.fillStyle='black';
      context.fillRect(5*coords[i][0], 5*coords[i][1], 5, 5);
      i++;
    }, 100);
    if (i >= coords.length) {
      clearInterval(interval);
    }
  }

  generatePaths (startNode) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let queue = [[startNode]];
    let pathCells = [startNode];
    while (queue.length) {
      let current = queue.shift();
      let children = this.children(current[0]);
        debugger
        children = children.filter(child => { return this.children(child).length >= 1 && !this.arrayIncludes(pathCells, child) })
        let randomIndex = Math.floor(Math.random() * children.length)
        debugger
        this.grid[children[randomIndex]] = true;
        pathCells.push(children[randomIndex]);
        queue.push([children[randomIndex]])
        context.fillStyle='black';
        context.fillRect(5*children[randomIndex][0], 5*children[randomIndex][1], 5, 5);
        debugger
      }
      return pathCells;
    };



  //     for (let i = 0; i < children.length; i++) {
  //       if (this.children(children[i]).length >= 2) {
  //         queue.push(children[i]);
  //         pathCells.push(children[i]);
  //         context.fillStyle='black';
  //         context.fillRect(5*children[i][0], 5*children[i][1], 5, 5);
  //       }
  //     }
  //   }
  //   console.log(pathCells);
  //   console.log(queue);
  // }

  // if not already labeled as an open path, default to wall

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

  children (node) {
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
  let nodes = {};
  let xCoords = [];
  let yCoords = [];
  for (let i = 0; i < width; i++) {
    xCoords.push(i)
  }
  for (let j = 0; j < height; j++) {
    yCoords.push(j)
  }
  for (let i = 0; i < xCoords.length; i++) {
    for (let j = 0; j < yCoords.length; j++) {
      nodes[[xCoords[i], yCoords[j]]] = 'empty';
    }
  }
  return nodes;
}

const createGridGraphic = (width, height) => {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  context.fillStyle = 'pink';
  context.fillRect(0, 0, width, height);
  let bw = width;
  let bh = height;
  let p = 0;
  context.fillStyle = 'black';
  context.fillRect(0, 0, 5, 5);
  function drawGrid () {
    for (let i = 0; i <= bw; i += 5) {
      context.moveTo(0.5 + i, 0);
      context.lineTo(0.5 + i, bh);
    }
    for (let j = 0; j <= bh; j += 5) {
      context.moveTo(0, 0.5 + j);
      context.lineTo(bw, 0.5 + j);
    }
    context.strokeStyle = 'black';
    context.stroke();
  }
  drawGrid();
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