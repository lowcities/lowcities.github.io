float time = 0;

void setup() {
  size(205, 200);
  stroke(255);
  strokeWeight(4);
}

void draw() {
  background(0,0);
  
  float x = 0;

  while (x < width) {
    point(x, height * noise(x / 100, time));
    x = x + 1;
  }
  
  
  
  time = time + 0.02;
}