import { Stack, Box, Image, Button } from "grommet";
import { Select } from "grommet-icons";
import UploadButton from "./UploadButton";

const Fab = ({ children }) => {
  return (
    <Box round="100%" margin="small" elevation="xlarge">
      {children}
    </Box>
  );
};

// stack a control element on top of an image
const ImageInput = ({ src, children, alt }) => {
  return (
    <Stack anchor="top-left" fill>
      <Image fill fit="cover" src={src} alt={alt} />
      <Fab>{children}</Fab>
    </Stack>
  );
};

const Upload = ({ src, handleChange }) => {
  return (
    <ImageInput src={src} alt="Uploaded greenscreen image">
      <UploadButton handleChange={handleChange} />
    </ImageInput>
  );
};

const Background = ({ src, handleClick }) => {
  return (
    <ImageInput src={src} alt="Selected background image">
      <Button
        a11yTitle="Select background"
        primary
        color="fab"
        icon={<Select color="brand" />}
        onClick={handleClick}
      />
    </ImageInput>
  );
};

// export default ImageInput;
export { Upload, Background };
