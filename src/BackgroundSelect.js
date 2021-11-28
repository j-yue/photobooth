import { Layer, Box, Avatar, Text, Heading, InfiniteScroll } from "grommet";
import background from "./images/background.jpeg";
import ghost from "./images/ghost.jpeg";
import charmed from "./images/charmed.jpg";
import bats from "./images/bats.png";
import batsghosts from "./images/batsghosts.png";
import clouds from "./images/clouds.jpg";
import heartsblack from "./images/heartsblackbg.png";
import heartsblue from "./images/heartsbluebg.png";
import hk from "./images/hk.png";
import maruchan from "./images/maruchan.png";
import neondreamscape from "./images/neondreamscape.png";
import neonlights from "./images/neonlights.png";
import neonwalls from "./images/neonwalls.png";
import pastelhauntedhouse from "./images/pastelhauntedhouse.png";
import pumpkin from "./images/pumpkin.png";
import simpsons from "./images/simpsons.png";
import space from "./images/space.png";

const BackgroundSelect = ({ handleBgSelect }) => {
  const gallery = [
    [background, "scary mansion"],
    [ghost, "ghost"],
    [charmed, "the charmed house"],
    [bats, "bats"],
    [batsghosts, "bats, ghosts, and pumpkins"],
    [clouds, "pastel clouds"],
    [heartsblack, "hearts with black background"],
    [heartsblue, "hearts with blue background"],
    [hk, "hong kong"],
    [maruchan, "maruchan noodles"],
    [neondreamscape, "neondreamscape"],
    [neonlights, "neon lights"],
    [neonwalls, "neon walls"],
    [pastelhauntedhouse, "pastel haunted house"],
    [pumpkin, "pumpkin"],
    [simpsons, "simpsons couch"],
    [space, "space"],
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
        <InfiniteScroll items={gallery}>
          {([src, des]) => (
            <div
              className="bgSelect"
              key={src}
              onClick={() => handleBgSelect(src)}
            >
              <Box direction="row" gap="large" align="center" margin="medium">
                <Avatar src={src} />
                <Text>{des}</Text>
              </Box>
            </div>
          )}
        </InfiniteScroll>
      </Box>
    </Layer>
  );
};

export default BackgroundSelect;
