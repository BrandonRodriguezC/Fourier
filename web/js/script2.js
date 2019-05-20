
let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 5.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let aux=0;

let myFont;
function preload() {
  myFont = loadFont('GOTHICBI.TTF');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();

  fill(255);
  textSize(56);
  textFont(myFont);
  text('ARCTIC MONKEYS', windowWidth/2-250, windowHeight/2-40);
}

function calcWave() {
  theta += 0.002;

  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = 1 / 2 *(cos(19*x)-cos(21*x)) * amplitude;
    x += dx;
  }
  
  if(amplitude == 275){
    aux=1;
    
  }else if (amplitude == 0){
    aux=2;
  }

  if(aux==1){
    amplitude--;
  }else {
    amplitude++;
  }

  
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}
