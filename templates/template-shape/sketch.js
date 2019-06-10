
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

  s.setUniform('resolution', [width, height]);
  s.setUniform('mouse', map(mouseX, 0, width, 0, 7));
  s.setUniform('time', frameCount * 0.01);

  shader(s);
  rect(0, 0, width, height);

}
