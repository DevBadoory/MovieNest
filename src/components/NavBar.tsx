import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Flex
      as="nav"
      direction={{ base: "column", sm: "row" }}
      align="center"
      justify="space-between"
      wrap="wrap"
    >
      {isMobile ? (
        <>
          <Flex justify="space-between" width="100%" mb={4}>
            <Link to="/">
              <Image src={logo} boxSize={45} alt="logo" />
            </Link>
            <ColorModeSwitch />
          </Flex>
          <Box width="100%">
            <SearchInput />
          </Box>
        </>
      ) : (
        <>
          <Link to="/">
            <Image src={logo} boxSize={45} alt="logo" />
          </Link>
          <Box flex={1} mx={4}>
            <SearchInput />
          </Box>
          <ColorModeSwitch />
        </>
      )}
    </Flex>
  );
};

export default NavBar;
