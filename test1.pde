
int radio;              
float x;
float y;
float tiempo;
ArrayList<float> onda = new ArrayList<float>();
void setup() {
  size(900, 360);
  radio=200;
}

void draw() {
  background(255);
  translate(100,200);
  stroke(0);
  strokeWeight(1);
  ellipse(0,0,radio,radio);
  x=(radio/2)*cos(tiempo);
  y=(radio/2)*sin(tiempo);
  stroke(0);
  strokeWeight(3);
  ellipse(x,y,5,5);
  onda.add(y);
  line(x,y,(radio/2)+onda.size(), onda.get(onda.size()-1));
  beginShape();
  noFill();
  for(int i=onda.size(); i>=0; i--){
    vertex(i+radio/2, onda.get(i));
  }
  endShape();
  tiempo+=0.01;
  if(onda.size()>628){
    onda.clear();
  } 
}

