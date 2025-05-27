import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Trends from "../entities/Trends";
import { getImageW500 } from "../services/img_path";
import MetaCritic from "./MetaCritic";
import WatchLaterButton from "./WatchLaterButton";

interface props {
  popular: Trends;
}

const PopularCard = ({ popular }: props) => {
  const altText = `Poster for ${popular.title || popular.name}`;
  const title = popular.title ?? popular.name ?? "Untitled";
  const date = popular.release_date ?? popular.first_air_date ?? "Unknown Date";
  return (
    <Box position="relative">
      <Box position="absolute" right="1" top="1">
        <WatchLaterButton
          title={title}
          overview={popular.overview}
          poster={popular.poster_path}
          date={date}
          id={popular.id}
          type="movie"
        />
      </Box>
      <Link to={`movie/${popular.id}`}>
        <Image
          borderRadius="10px"
          overflow="hidden"
          src={getImageW500(popular.poster_path)}
          alt={altText}
          objectFit="cover"
          width="100%"
          height="70%"
        />
      </Link>
      <MetaCritic children={popular.vote_average} />
      <Link to={`movie/${popular.id}`}>
        <Heading fontSize={{ base: ".9rem", sm: "1.1rem" }}>{title}</Heading>
      </Link>
      <Text mt="0.3rem" color="gray.400">
        {date}
      </Text>
    </Box>
  );
};

export default PopularCard;
