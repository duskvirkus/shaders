
let canvas;
let s;

function preload() {
  s = loadShader('shader.vert', 'shader.frag');
}

function setupCanvas() {
  canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('canvas-container');
}

function setup() {
  setupCanvas();
  noStroke();
}

function draw() {
  shader(s);
  rect(0, 0, width, height);
}
