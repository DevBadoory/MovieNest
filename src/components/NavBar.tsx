import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} />
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
