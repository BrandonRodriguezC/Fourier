var vector = [];
var resultado=[];
var onda=[];
var width;
var height;
var time;
var xAnterior;
var yAnterior;
var x = 0;
var y = 0;


var prueba=[100, 100,100,100,100,100,-100,-100,-100,-100,-100,-100,
  100, 100,100,100,100,100,-100,-100,-100,-100,-100,-100,
  100, 100,100,100,100,100,-100,-100,-100,-100,-100,-100,
  100, 100,100,100,100,100,-100,-100,-100,-100,-100,-100];

function preload() {
  myFont = loadFont('../GOTHICBI.TTF');
}

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;
  createCanvas(width, height);

  prueba=transformadaFourierDiscreta(prueba);
}

function draw() {

  background(255, 204, 0);
  strokeWeight(4);
  line(width/2, 0, width/2,height);
  strokeWeight(1);
  
  

  // if (mouseIsPressed && mouseX < width / 2) {
  //   llenarVectores();
  //   resultado= transformadaFourierDiscreta(vector);
  // }
  circulos(prueba);
  // onda.unshift(punto);
  // beginShape();
  // noFill();
  // for (let index = 0; index < vector.length; index++) {
  //   vertex(inda[index].x,onda[index].y);
  // }
  // endShape();

}

function llenarVectores() {
  var nodo={mouseX,mouseY};
  vector.push(nodo);
}

function circulos(resultado) {
  fill(0);
  translate(width *3/ 4, height / 2);
  x = 0;
  y = 0;
  for (let n = 0; n < resultado.length; n++) {

    xAnterior = x;
    yAnterior = y;
    noFill();

    var periodo= resultado[n].periodo;
    var amplitud= resultado[n].amplitud;
    var angulo=resultado[n].angulo;

    radio = amplitud;
    x += radio / 2 * cos(time * periodo + angulo);
    y += radio / 2 * sin(time * periodo + angulo);

    ellipse(xAnterior, yAnterior, radio, radio);
  }
  time += TWO_PI/resultado.length;
  translate(-(width*3 / 4), -height / 2);
  return createVector(x, y);
}


function transformadaFourierDiscreta(x) {
  var X = [];
  const N = x.length;
  for (let k = 0; k < N; k++) {
    var real = 0;
    var imaginaria = 0;
    for (let n = 0; n < N; n++) {
      var tetha = (TWO_PI * k * n) / N;
      real += x[n] * cos(tetha);
      imaginaria -= x[n] * sin(tetha);
    }
    real=real/N;
    imaginaria=imaginaria/N;
    var periodo=k;
    var amplitud= sqrt(real*real+imaginaria*imaginaria);
    var angulo= atan2(imaginaria, real);
    X[k] = {real,imaginaria, periodo, amplitud, angulo};
  }
  return X;
}