import { useRef, useEffect, useState } from "react";
import p5 from "p5";

//create copy of image with green pixels set 0 opacity
const removeGreenScreen = (p, image, color, level = 50) => {
  image.loadPixels();
  let output = p.createImage(image.width, image.height);
  output.loadPixels();

  let keyVec = p.createVector(...color);

  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      let col = image.get(x, y);
      let colVec = p.createVector(...col);
      let d = colVec.dist(keyVec);
      let newCol = [...col];
      if (d < level) {
        newCol[3] = 0;
      }
      output.set(x, y, newCol);
    }
  }

  output.updatePixels();
  return output;
};

const Canvas = ({ inputs, setOutput, setLoading, setP5Instance }) => {
  const [myCanvas, setMyCanvas] = useState(null);
  const parent = useRef(null);

  const [greenscreen, background] = inputs;
  let img; //greenscreen p5 image
  let bg; //background p5 image

  const sketch = (p) => {
    p.setup = () => {
      p.loadImage(background, (image) => {
        image.resize(p.windowWidth, 0);
        bg = image;
        p.loadImage(greenscreen, (_image) => {
          _image.resize(bg.width * (2 / 3), 0);
          img = _image;

          p.image(bg, 0, 0);
          let output = removeGreenScreen(p, img, [23, 166, 27], 113);
          p.image(
            output,
            (bg.width - output.width) / 2,
            (bg.height - output.height) / 2
          );

          let outputUrl = p.canvas.toDataURL("image/png");
          setOutput(outputUrl);
          setLoading(false);
        });
        p.createCanvas(bg.width, bg.height);
      });
    };
  };

  useEffect(() => {
    setMyCanvas(new p5(sketch, parent.current));
  }, []);

  useEffect(() => {
    if (myCanvas) {
      parent.current.removeChild(parent.current.children[0]);
      setMyCanvas(new p5(sketch, parent.current));
    }
  }, [inputs]);

  useEffect(() => {
    if (myCanvas) setP5Instance(myCanvas);
  }, [myCanvas]);

  const handleClick = () => {
    myCanvas.save("photobooth.jpg");
  };

  return (
    <div
      className="canvasParent"
      ref={parent}
      onClick={handleClick}
      style={{ display: "none" }}
    ></div>
  );
};

export default Canvas;
