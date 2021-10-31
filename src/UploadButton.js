import { Button, Box } from "grommet";
import { Upload } from "grommet-icons";

const UploadButton = ({ handleChange }) => {
  return (
    <Button
      plain
      margin="small"
      label={
        <label className="upload__label">
          <Box direction="row" gap="small" justify="center">
            <input
              id="upload"
              name="upload"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => handleChange(e)}
            />
            <Upload color="brand" />
            Upload
          </Box>
        </label>
      }
    />
  );
};

export default UploadButton;
