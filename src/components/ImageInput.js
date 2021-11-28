import { Stack, Box, Image } from "grommet";

// stack a control element on top of an image
const Fab = ({ children }) => {
  return (
    <Box round="100%" pad="small" margin="small" elevation="xlarge">
      {children}
    </Box>
  );
};

const ImageInput = ({ src, children }) => {
  return (
    <Stack anchor="top-left" fill>
      <Image fill fit="cover" src={src} />
      <Fab>{children}</Fab>
    </Stack>
  );
};

export default ImageInput;
