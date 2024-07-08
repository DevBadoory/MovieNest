import { Text, Box, Image, Heading } from "@chakra-ui/react";
import { getImage } from "../services/img_path";
import MetaCritic from "./MetaCritic";
import usePopular from "../hooks/usePopular";
import Trends from "../entities/Trends";

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
