import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import Search from "../entities/Search";
import { getImage } from "../services/img_path";

interface Props {
  tvShow: Search;
}

const SearchTVShows = ({ tvShow }: Props) => {
  return (
    <HStack>
      <Image
        height="141px"
        width="94px"
        minWidth="94px"
        objectFit="cover"
        borderRadius="4px"
        src={getImage(tvShow.backdrop_path || tvShow.poster_path)}
      />
      <Box ml={2}>
        <Heading fontSize="1.1rem">{tvShow.name}</Heading>
        <Text fontSize=".8rem" color="#6b6a6a" fontWeight="300">
          {tvShow.first_air_date}
        </Text>
        <Text noOfLines={2} fontSize="sm" mt={5}>
          {tvShow.overview}
        </Text>
      </Box>
    </HStack>
  );
};

export default SearchTVShows;
