import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Trends from "../entities/Trends";
import { getImage } from "../services/api-client";
import MetaCritic from "./MetaCritic";

interface Props {
  trend: Trends;
}

const TrendsCard = ({ trend }: Props) => {
  return (
    <Box>
      <Image
        borderRadius="10px"
        overflow="hidden"
        src={getImage(trend.poster_path)}
      />
      <MetaCritic children={trend.vote_average} />
      <Heading fontSize="1.2rem">{trend.title || trend.name}</Heading>
      <Text mt="0.3rem" color="gray.400">
        {trend.release_date || trend.first_air_date}
      </Text>
    </Box>
  );
};

export default TrendsCard;
