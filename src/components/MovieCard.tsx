import { Box, Heading, Image } from "@chakra-ui/react";
import Movie from "../entities/Movie";
import { getImage } from "../services/api-client";

interface props {
  movie: Movie;
}
const MovieCard = ({ movie }: props) => {
  return (
    <Box>
      <Image src={getImage(movie.poster_path)} />
      <Heading fontSize="2xl">{movie.title}</Heading>
    </Box>
  );
};

export default MovieCard;
