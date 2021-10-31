import { Layer, Box, Avatar, Text, Heading } from "grommet";
import background from "./images/background.jpeg";
import abandoned from "./images/abandoned.jpeg";
import ghost from "./images/ghost.jpeg";
import tree from "./images/tree.jpeg";

const BackgroundSelect = ({ handleBgSelect }) => {
  const gallery = [
    [background, "scary mansion"],
    [abandoned, "abandoned hallway"],
    [ghost, "ghost"],
    [tree, "spooky tree"],
  ];
  return (
    <Layer
      background={{ color: "#000", opacity: "50%" }}
      position="center"
      responsive
      animation="fadeIn"
    >
      <Box
        overflow="scroll"
        background="brand"
        width="80%"
        height="80%"
        margin="auto"
        pad="large"
        gap="medium"
      >
        <Heading level="2" margin="none" textAlign="center">
          Select background
        </Heading>
        {gallery.map(([src, des]) => (
          <div
            className="bgSelect"
            key={src}
            onClick={() => handleBgSelect(src)}
          >
            <Box direction="row" gap="large" align="center">
              <Avatar src={src} />
              <Text>{des}</Text>
            </Box>
          </div>
        ))}
      </Box>
    </Layer>
  );
};

export default BackgroundSelect;
