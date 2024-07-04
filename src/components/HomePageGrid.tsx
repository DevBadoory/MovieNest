import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import useTrending from "../hooks/useTrending";
import TrendsCard from "./TrendsCard";
import PopularCard from "./PopularCard";
import usePopular from "../hooks/usePopular";

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
    <Box padding="2rem">
      <Box mb={10}>
        <Heading mb={5}>Trends</Heading>
        <SimpleGrid
          gridAutoFlow="column"
          gridAutoColumns={{ sm: "48%", md: "30%", lg: "21%", xl: "14%" }}
          gap="1rem"
          overflowX="scroll"
          scrollBehavior="smooth"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
            "&:hover": {
              overflowY: "auto",
            },
          }}
        >
          {trends?.results.map((trend) => (
            <TrendsCard key={trend.id} trend={trend} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading mb={5}>Popular</Heading>
        <SimpleGrid
          gridAutoFlow="column"
          gridAutoColumns={{ sm: "48%", md: "30%", lg: "21%", xl: "14%" }}
          gap="1rem"
          overflowX="auto"
          scrollBehavior="smooth"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
            "&:hover": {
              overflowY: "auto",
            },
          }}
        >
          {populars?.results.map((popular) => (
            <PopularCard key={popular.id} popular={popular} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HomePageGrid;
