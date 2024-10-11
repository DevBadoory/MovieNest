import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import ProfileButton from "./ProfileButton";

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
          <Flex justify="space-between" width="100%" mb={4} alignItems="center">
            <ColorModeSwitch />
            <Link to="/">
              <Image src={logo} boxSize={45} alt="logo" />
            </Link>
            <ProfileButton />
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
          <Flex gap={3}>
            <ColorModeSwitch />
            <ProfileButton />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default NavBar;
