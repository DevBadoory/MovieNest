import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Trends from "../entities/Trends";
import { getImageW500 } from "../services/img_path";
import MetaCritic from "./MetaCritic";
import WatchLaterButton from "./WatchLaterButton";

interface Props {
  trend: Trends;
}

const TrendsCard = ({ trend }: Props) => {
  const altText = `Poster for ${trend.title || trend.name}`;
  const title = trend.title ?? trend.name ?? "Untitled";
  const date = trend.release_date ?? trend.first_air_date ?? "Unknown Date";
  return (
    <Box position="relative">
      <Box position="absolute" right="1" top="1">
        <WatchLaterButton
          title={title}
          overview={trend.overview}
          poster={trend.poster_path}
          date={date}
          id={trend.id}
          type={trend.media_type}
        />
      </Box>
      <Link to={`${trend.media_type}/${trend.id}`}>
        <Image
          borderRadius="10px"
          overflow="hidden"
          src={getImageW500(trend.poster_path)}
          alt={altText}
        />
      </Link>
      <MetaCritic children={trend.vote_average} />
      <Link to={`${trend.media_type}/${trend.id}`}>
        <Heading fontSize={{ base: ".9rem", sm: "1.1rem" }}>{title}</Heading>
      </Link>
      <Text mt="0.3rem" color="gray.400">
        {date}
      </Text>
    </Box>
  );
};

export default TrendsCard;
