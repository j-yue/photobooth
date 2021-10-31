/** 
let img;
let keyed;

function preload() {
  img = loadImage("../images/greenscreen.png");
}

function setup() {
  img.resize(300, 150);
  createCanvas(img.width * 2, img.height);
  keyed = Key(img, [23, 166, 27], 113);
}

function draw() {
  background(220);
  image(img, 0, 0);
  image(keyed, keyed.width, 0);
}

// helper for writing color to array
function writeColor(image, x, y, red, green, blue, alpha) {
  let index = (x + y * width) * 4;
  image.pixels[index] = red;
  image.pixels[index + 1] = green;
  image.pixels[index + 2] = blue;
  image.pixels[index + 3] = alpha;
}

function Key(image, color, level = 50) {
  image.loadPixels();
  let out = new p5.Image(image.width, image.height);
  out.loadPixels();
  let keyVec = createVector(...color);
  for (y = 0; y < image.height; y++) {
    for (x = 0; x < image.width; x++) {
      let col = image.get(x, y);
      let colVec = createVector(...col);
      let d = colVec.dist(keyVec);
      let newCol = [...col];
      if (d < level) {
        newCol[3] = 0;
      }
      out.set(x, y, newCol);
    }
  }
  out.updatePixels();
  return out;
}
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
