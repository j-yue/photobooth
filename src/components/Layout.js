import { Box } from "grommet";

const Section = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

const Layout = ({ children }) => {
  return (
    <Box pad="large" gap="large" fill>
      {children}
    </Box>
  );
};

Layout.Section = Section;

export default Layout;
