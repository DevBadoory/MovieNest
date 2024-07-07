import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Box padding={8}>
        <NavBar />
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;
