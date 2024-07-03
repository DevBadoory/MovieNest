import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import useTrending from "../hooks/useTrending";
import MovieCard from "./MovieCard";

const HomePageGrid = () => {
  const { data: movies, error, isLoading } = useTrending();

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading mb={5}>Trends</Heading>
      <SimpleGrid
        gridAutoFlow="column"
        gridAutoColumns={{ sm: "48%", md: "30%", lg: "21%", xl: "15%" }}
        gap="1rem"
        overflowX="auto"
        overscrollBehavior="contain"
        scrollBehavior="smooth"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {movies?.results.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default HomePageGrid;
