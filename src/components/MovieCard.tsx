import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Image,
} from "@chakra-ui/react";
import Movie from "../entities/Movie";
import { getImage } from "../services/api-client";
import MetaCritic from "./MetaCritic";

interface props {
  movie: Movie;
}
const MovieCard = ({ movie }: props) => {
  return (
    <Box>
      <Image src={getImage(movie.poster_path)} />
      <MetaCritic children={movie.vote_average} />
      <Heading fontSize="2xl">{movie.title}</Heading>
    </Box>
  );
};

export default MovieCard;
