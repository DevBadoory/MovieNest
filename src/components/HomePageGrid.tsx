import { Box, Spinner } from "@chakra-ui/react";
import usePopular from "../hooks/usePopular";
import useTrending from "../hooks/useTrending";
import Carousel from "./Carousel";
import PopularCard from "./PopularCard";
import TrendsCard from "./TrendsCard";

const HomePageGrid = () => {
  const {
    data: trends,
    error: trendsError,
    isLoading: trendsLoading,
  } = useTrending();
  const {
    data: populars,
    error: popularsError,
    isLoading: popularsLoading,
  } = usePopular();

  if (trendsLoading || popularsLoading) return <Spinner />;
  if (trendsError) throw trendsError;
  if (popularsError) throw popularsError;

  return (
    <Box>
      <Carousel title="Trending">
        {trends?.map((trend) => (
          <TrendsCard key={trend.id} trend={trend}></TrendsCard>
        ))}
      </Carousel>

      <Carousel title="Popular Movies">
        {populars?.map((popular) => (
          <PopularCard key={popular.id} popular={popular}></PopularCard>
        ))}
      </Carousel>
    </Box>
  );
};

export default HomePageGrid;
