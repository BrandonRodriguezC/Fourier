let time = 0;
let wave = [];
let prueba=[100, 100,100,100,100,100,-100,-100,-100,-100,-100,-100,
  100, 100,100,100,100,100,-100,-100,-100,-100,-100,-100,
  100, 100,100,100,100,100,-100,-100,-100,-100,-100,-100,
  100, 100,100,100,100,100,-100,-100,-100,-100,-100,-100];
function setup() {
  createCanvas(600, 400);
  slider = createSlider(1, 10, 5);
}

function draw() {
  background(0);
  translate(150, 200);

  let x = 0;
  let y = 0;
    
  for (let i = 1; i < slider.value() ; i++) {
    let prevx = x;
    let prevy = y;
    let number = i;

    if(i%2==1){ number *= -1; }
    let radio = 75 * (2 / (number * PI));
    
    x += radio * cos(i * time);
    y += radio * sin(i * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radio * 2);

    fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    ellipse(x, y, 8);
  }
  wave.unshift(y);
  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;

  if (wave.length > 250) {
    wave.pop();
  }
}