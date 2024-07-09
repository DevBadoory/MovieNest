import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import Search from "../entities/Search";
import { getImage } from "../services/img_path";

interface Props {
  movie: Search;
}

const SearchMovies = ({ movie }: Props) => {
  return (
    <HStack>
      <Image
        height="141px"
        width="94px"
        minWidth="94px"
        objectFit="cover"
        borderRadius="4px"
        src={getImage(movie.backdrop_path || movie.poster_path)}
      />
      <Box ml={2}>
        <Heading fontSize="1.1rem">{movie.title}</Heading>
        <Text fontSize="sm" color="#6b6a6a" fontWeight="300">
          {movie.release_date}
        </Text>
        <Text noOfLines={2} fontSize="sm" mt={5}>
          {movie.overview}
        </Text>
      </Box>
    </HStack>
  );
};

export default SearchMovies;
