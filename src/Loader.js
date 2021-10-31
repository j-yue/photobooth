import { Layer, Box, Spinner, Text } from "grommet";

const Loader = () => {
  return (
    <Layer
      background={{ color: "#000", opacity: "50%" }}
      position="center"
      responsive
      animation="fadeIn"
    >
      <Box
        background="brand"
        margin="auto"
        pad="large"
        direction="row"
        align="center"
        justify="center"
        gap="large"
        alignSelf="center"
      >
        <Spinner size="large" />
        <Text>Processing</Text>
      </Box>
    </Layer>
  );
};

export default Loader;
