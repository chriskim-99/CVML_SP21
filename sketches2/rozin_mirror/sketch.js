let w = 640;
let h = 360;
let capture;

function setup() {
  let c = createCanvas(w, h);
  c.parent("#sketch-parent");
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
}

function draw() {
  background(240, 220, 230);
  let stepSize = 20;
  capture.loadPixels();
  
  let threshold = map(mouseX, 0, width, 0, 255, true);
  
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      const index = (x + y * capture.width) * 4;
      
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/3;
      
      push();
      
      translate(width, 0);
      translate(-stepSize/2, stepSize/2);
      scale(-1,1);
      
      brightness = map(brightness, 0, 255, stepSize/1.5, stepSize*2.5);
      fill(r+30, g-30, b-30);
      ellipse(x-5, y+5, brightness, brightness);
      fill(r, g, b);
      ellipse(x, y, brightness, brightness);
      
      
      pop();
    }
  }
  capture.updatePixels();

}