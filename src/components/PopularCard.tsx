import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Trends from "../entities/Trends";
import { getImage } from "../services/img_path";
import MetaCritic from "./MetaCritic";
import { Link } from "react-router-dom";

interface props {
  popular: Trends;
}

const PopularCard = ({ popular }: props) => {
  const altText = `Poster for ${popular.title || popular.name}`;
  return (
    <Box>
      <Link to={`movie/${popular.id}`}>
        <Image
          borderRadius="10px"
          overflow="hidden"
          src={getImage(popular.poster_path)}
          alt={altText}
        />
      </Link>
      <MetaCritic children={popular.vote_average} />
      <Link to={`movie/${popular.id}`}>
        <Heading fontSize={{ base: ".9rem", sm: "1.1rem" }}>
          {popular.title || popular.name}
        </Heading>
      </Link>
      <Text mt="0.3rem" color="gray.400">
        {popular.release_date || popular.first_air_date}
      </Text>
    </Box>
  );
};

export default PopularCard;
