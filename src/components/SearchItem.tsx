import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import Search from "../entities/Search";
import { getImage } from "../services/img_path";

interface Props {
  item: Search;
}

const SearchItem = ({ item }: Props) => {
  const title = item.title || item.name;
  const date = item.release_date || item.first_air_date;
  const imagePath = item.backdrop_path || item.poster_path || item.profile_path;

  return (
    <HStack>
      <Image
        height="141px"
        width="94px"
        minWidth="94px"
        objectFit="cover"
        borderRadius="4px"
        src={getImage(imagePath)}
      />
      <Box ml={2}>
        <Heading fontSize="1.1rem">{title}</Heading>
        {date && (
          <Text fontSize="sm" color="#6b6a6a" fontWeight="300">
            {date}
          </Text>
        )}
        {item.known_for_department && (
          <HStack spacing={1}>
            <Text fontWeight="400">
              {item.known_for_department}
              {" •"}
            </Text>
            <Text fontWeight="300">
              {item.known_for?.map((k) => k.name || k.title).join(", ")}
            </Text>
          </HStack>
        )}
        {item.overview && (
          <Text noOfLines={2} fontSize="sm" mt={5}>
            {item.overview}
          </Text>
        )}
      </Box>
    </HStack>
  );
};

export default SearchItem;
