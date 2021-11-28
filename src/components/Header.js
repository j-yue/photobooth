import { Heading, Text, Box } from "grommet";

const Header = () => {
  return (
    <header>
      <Box direction="column" align="center">
        <Heading
          margin="none"
          color="brand"
          level="1"
          textAlign="center"
          responsive
        >
          Photobooth App
        </Heading>
        <Text as="p" size="large" textAlign="center" weight="bold">
          Replace greenscreens with Halloween-themed backgrounds!
        </Text>
      </Box>
    </header>
  );
};

export default Header;
