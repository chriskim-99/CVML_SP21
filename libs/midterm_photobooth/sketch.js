// manipulated from a original tutorial sketch by The Coding Train on Youtube

let video;
let snapButton, resetButton;
let snapshots = [];

function setup() {
  createCanvas(640, 480);
  background(51);

  video = createCapture(VIDEO);
  video.size(320, 240);
  // video.hide();

  snapButton = createButton('shoot');
  resetButton = createButton('nah');

  snapButton.mousePressed(takesnaps);
  resetButton.mousePressed(resetsnaps);
}

function takesnaps() {
  video.loadPixels();
  snapshots.push(video.get());
}

function resetsnaps() {
  snapshots.length = 0;
}

function draw() {
  background(51);
  let w = 128;
  let h = 96;
  let x = 0;
  let y = 0;

  for (var i = 0; i < snapshots.length; i++) {
    image(snapshots[i], x, y, w, h);
    x = x + w;
    if (x > width - w) {
      x = 0;
      y = y + h;
      if (y > height - h) y = 0;
    }
  }
}