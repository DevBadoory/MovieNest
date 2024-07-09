import {
  Box,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Search from "../entities/Search";
import { getImage } from "../services/img_path";
interface props {
  person: Search;
}

const SearchPerson = ({ person }: props) => {
  return (
    <HStack>
      <Image
        boxSize={70}
        objectFit="cover"
        borderRadius="4px"
        src={getImage(person.backdrop_path || person.profile_path)}
      />
      <Box>
        <Heading fontSize="1.1rem">{person.name}</Heading>
        <HStack spacing={1}>
          <Text fontWeight="400">
            {person?.known_for_department}
            {" •"}
          </Text>
          <Text fontWeight="300">
            {person.known_for?.map((k) => k.name || k.title + ", ")}
          </Text>
        </HStack>
      </Box>
    </HStack>
  );
};

export default SearchPerson;
