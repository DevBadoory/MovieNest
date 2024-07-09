import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
