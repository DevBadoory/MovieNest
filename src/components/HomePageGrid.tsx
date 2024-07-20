import { Box, Text } from "@chakra-ui/react";
import usePopular from "../hooks/usePopular";
import useTrending from "../hooks/useTrending";
import Carousel from "./Carousel";
import PopularCard from "./PopularCard";
import TrendsCard from "./TrendsCard";
import SkeletonLoader from "./SkeletonLoader";

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

  if (popularsError || trendsError) {
    return (
      <Text>
        {popularsError?.message}
        {trendsError?.message}
      </Text>
    );
  }

  const skeletons = [1, 2, 3, 4, 5, 6, 7];

  const renderSkeletons = () =>
    skeletons.map((skeleton) => <SkeletonLoader key={skeleton} />);

  return (
    <Box>
      {trendsLoading ? (
        <Carousel title="Trending">{renderSkeletons()}</Carousel>
      ) : (
        <Carousel title="Trending">
          {trends?.map((trend) => (
            <TrendsCard key={trend.id} trend={trend} />
          ))}
        </Carousel>
      )}

      {popularsLoading ? (
        <Carousel title="Popular Movies">{renderSkeletons()}</Carousel>
      ) : (
        <Carousel title="Popular Movies">
          {populars?.map((popular) => (
            <PopularCard key={popular.id} popular={popular} />
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default HomePageGrid;
