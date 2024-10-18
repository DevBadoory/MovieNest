import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Trends from "../entities/Trends";
import { getImageW500 } from "../services/img_path";
import MetaCritic from "./MetaCritic";

interface Props {
  trend: Trends;
}

const TrendsCard = ({ trend }: Props) => {
  const altText = `Poster for ${trend.title || trend.name}`;
  return (
    <Box>
      <Link to={`${trend.media_type}/${trend.id}`}>
        <Image
          borderRadius="10px"
          overflow="hidden"
          src={getImageW500(trend.poster_path)}
          alt={altText}
          objectFit="cover"
          width="100%"
          height="70%"
        />
      </Link>
      <MetaCritic children={trend.vote_average} />
      <Link to={`${trend.media_type}/${trend.id}`}>
        <Heading fontSize={{ base: ".9rem", sm: "1.1rem" }}>
          {trend.title || trend.name}
        </Heading>
      </Link>
      <Text mt="0.3rem" color="gray.400">
        {trend.release_date || trend.first_air_date}
      </Text>
    </Box>
  );
};

export default TrendsCard;
