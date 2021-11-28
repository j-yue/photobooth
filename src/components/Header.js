import { Heading, Text } from "grommet";

const Header = () => {
  return (
    <header>
      <Heading
        margin="none"
        color="brand"
        level="1"
        alignSelf="center"
        responsive
      >
        Photobooth App
      </Heading>
      <Text as="p" size="large" textAlign="center" weight="bold">
        Replace greenscreens with Halloween-themed backgrounds!
      </Text>
    </header>
  );
};

export default Header;
