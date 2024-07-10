import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Trends from "../entities/Trends";
import { getImage } from "../services/img_path";
import MetaCritic from "./MetaCritic";

interface props {
  popular: Trends;
}

const PopularCard = ({ popular }: props) => {
  return (
    <Box>
      <Image
        borderRadius="10px"
        overflow="hidden"
        src={getImage(popular.poster_path)}
      />
      <MetaCritic children={popular.vote_average} />
      <Heading fontSize="1.2rem">{popular.title || popular.name}</Heading>
      <Text mt="0.3rem" color="gray.400">
        {popular.release_date || popular.first_air_date}
      </Text>
    </Box>
  );
};

export default PopularCard;
