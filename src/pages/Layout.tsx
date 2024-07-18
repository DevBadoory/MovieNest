import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <Box
      maxWidth="1500px"
      margin="auto"
      paddingX={{ base: "1rem", sm: "2rem" }}
    >
      <Box paddingY="2rem">
        <NavBar />
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
