export default class Prims () {
  constructor (width, height) {
    this.grid = createGridArray(width, height);
  }

  animate () {
    let canvas = document.getElementById('canvas-7');
    let context = canvas.getContext("2d");
    context.fillStyle='#B7979C';
    context.fillRect(0, 0, 10, 10)
  }
}
