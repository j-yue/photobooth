import { useState } from "react";
import theme from "./theme";
import { Grommet, Image, Grid, Box, Button, Heading, Text } from "grommet";
import { Download, Select, Aggregate } from "grommet-icons";
import UploadButton from "./UploadButton";
import BackgroundSelect from "./BackgroundSelect";
import Canvas from "./Canvas";
import Loader from "./Loader";
import defaulGreenScreen from "./images/maxresdefault.jpg";
import defaultBackground from "./images/background.jpeg";
import preview from "./images/photobooth.jpeg";

const App = () => {
  const [greenscreen, setGreenscreen] = useState(defaulGreenScreen);
  const [background, setBackground] = useState(defaultBackground);
  const [output, setOutput] = useState(preview);
  const [showPreview, setShowPreview] = useState(true);
  const [loading, setLoading] = useState(false);
  const [p5Instance, setP5Instance] = useState(null);
  const [inputs, setInputs] = useState([greenscreen, background]);
  const [showBgSelect, setShowBgSelect] = useState(false);

  const handleInputChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      let src = URL.createObjectURL(file);
      setGreenscreen(src);
    }
  };

  const handleCreate = () => {
    setLoading(true);
    setShowPreview(false);
    setInputs([greenscreen, background]);
  };

  const handleDownload = () => {
    console.log(p5Instance);
    p5Instance.save();
  };

  const handleBgSelect = (src) => {
    setBackground(src);
    setShowBgSelect(false);
  };

  return (
    <main>
      <Grommet theme={theme}>
        {loading && <Loader />}
        {showBgSelect && <BackgroundSelect handleBgSelect={handleBgSelect} />}
        <Grid
          fill
          pad="large"
          gap="medium"
          columns={["full"]}
          rows={["auto", "auto", "auto", "auto", "flex", "auto"]}
          areas={[
            { name: "header", start: [0, 0], end: [0, 0] },
            { name: "intro", start: [0, 1], end: [0, 1] },
            { name: "inputs", start: [0, 2], end: [0, 2] },
            { name: "create", start: [0, 3], end: [0, 3] },
            { name: "output", start: [0, 4], end: [0, 4] },
            { name: "download", start: [0, 5], end: [0, 5] },
          ]}
        >
          <Box gridArea="header">
            <Heading
              margin="none"
              color="brand"
              level="1"
              alignSelf="center"
              responsive
            >
              Photobooth App
            </Heading>
          </Box>

          <Box gridArea="intro" align="center">
            <Heading level="2" textAlign="center" responsive margin="none">
              Replace greenscreens with spooky backgrounds!
            </Heading>
          </Box>

          <Box direction="row" gap="large" gridArea="inputs">
            <Box flex elevation="small">
              <UploadButton handleChange={handleInputChange} />
              <Image
                fill
                fit="cover"
                a11yTitle="Greenscreen image"
                src={greenscreen}
              />
            </Box>
            <Box flex elevation="small">
              <Button
                plain
                margin="small"
                icon={<Select color="brand" />}
                label="Background"
                onClick={() => setShowBgSelect(true)}
              />
              <Image
                fill
                fit="cover"
                a11yTitle="Background image"
                src={background}
              />
            </Box>
          </Box>

          <Box gridArea="create" elevation="medium">
            <Button
              a11yTitle="Create image"
              label="Create"
              primary
              size="large"
              style={{ borderRadius: 0 }}
              icon={<Aggregate />}
              onClick={handleCreate}
            />
          </Box>

          <Box
            direction="column"
            justify="center"
            align="center"
            elevation="xlarge"
            gridArea="output"
          >
            <Image
              fill
              fit="contain"
              alignSelf="center"
              src={output}
              a11yTitle="Output image"
            />
            {!showPreview && (
              <Canvas
                inputs={inputs}
                setOutput={setOutput}
                setLoading={setLoading}
                loading={loading}
                setP5Instance={setP5Instance}
              />
            )}
            <Button
              fill="horizontal"
              gridArea="download"
              disabled={showPreview ? true : false}
              secondary
              icon={<Download color="brand" />}
              label="Download"
              style={{ borderRadius: "0", border: "none" }}
              size="large"
              onClick={handleDownload}
            />
          </Box>

          <Text textAlign="center" margin="small">
            Please wait a few seconds for download to start
          </Text>
        </Grid>
      </Grommet>
    </main>
  );
};

export default App;
