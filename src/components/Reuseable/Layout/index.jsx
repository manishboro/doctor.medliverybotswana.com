import { Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Container component="main" maxWidth="md">
        {children}
      </Container>
    </>
  );
};

export default Layout;
