import { useState, useEffect } from "react";
import theme from "../theme";
import { Grommet, Image, Box, Button, Text } from "grommet";
import { Download, Aggregate } from "grommet-icons";
import BackgroundSelect from "./BackgroundSelect";
import Canvas from "./Canvas";
import Loader from "./Loader";
import defaulGreenScreen from "../images/maxresdefault.jpg";
import defaultBackground from "../images/background.jpeg";
import preview from "../images/photobooth.jpeg";
import placeholder from "../images/placeholder.jpeg";

import Layout from "./Layout";
import Header from "./Header";
import { Upload, Background } from "./ImageInput";

const App = () => {
  const [greenscreen, setGreenscreen] = useState(placeholder);
  const [background, setBackground] = useState(placeholder);
  const [output, setOutput] = useState(placeholder);
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

  // lazy load default demo images
  useEffect(() => {
    setGreenscreen(defaulGreenScreen);
    setBackground(defaultBackground);
    setOutput(preview);
  }, []);

  return (
    <main>
      <Grommet theme={theme}>
        {loading && <Loader />}
        {showBgSelect && <BackgroundSelect handleBgSelect={handleBgSelect} />}
        <Layout>
          <Layout.Section>
            <Header />
          </Layout.Section>

          <Layout.Section direction="row" gap="large">
            <Box flex elevation="small">
              <Upload src={greenscreen} handleChange={handleInputChange} />
            </Box>
            <Box flex elevation="small">
              <Background
                src={background}
                handleClick={() => setShowBgSelect(true)}
              />
            </Box>
          </Layout.Section>
          <Layout.Section elevation="medium">
            <Button
              a11yTitle="Create image"
              label="Create"
              primary
              size="large"
              style={{ borderRadius: 0 }}
              icon={<Aggregate />}
              onClick={handleCreate}
            />
          </Layout.Section>
          <Layout.Section
            direction="column"
            justify="center"
            align="center"
            elevation="xlarge"
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
          </Layout.Section>
          <Text textAlign="center" margin="small">
            Please wait a few seconds for download to start
          </Text>
        </Layout>
      </Grommet>
    </main>
  );
};

export default App;
