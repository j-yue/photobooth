import { Button } from "grommet";
import { Upload } from "grommet-icons";

const IconLabel = ({ handleChange }) => {
  return (
    <label className="upload__label">
      <input
        id="upload"
        name="upload"
        type="file"
        style={{ display: "none" }}
        onChange={(e) => handleChange(e)}
      />
      <Upload color="brand" />
    </label>
  );
};

const UploadButton = ({ handleChange }) => {
  return (
    <Button
      primary
      color="fab"
      a11yTitle="Upload greenscreen image"
      icon={<IconLabel handleChange={handleChange} />}
    />
  );
};

export default UploadButton;
