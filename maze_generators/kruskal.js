import * as manhattan from 'manhattan';

class Kruskal {
  constructor () {
  }

  createGrid (width, height) {
    let nodes = [];
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
        nodes.push([xCoords[i], yCoords[j]])
      }
    }
    return nodes;
  }

}

export default Kruskal;
