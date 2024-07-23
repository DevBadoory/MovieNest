import { Box, SimpleGrid, Heading, Spinner, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useMovieCredits from "../hooks/useMovieCredits";
import CreditsCard from "../components/CreditsCard";

const MovieCreditsPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useMovieCredits(String(id));

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2rem">
      <GridItem>
        <Heading size="lg">Cast</Heading>
        <Box mt={5}>
          {data?.cast.map((castMember) => (
            <CreditsCard
              key={castMember.cast_id}
              person={castMember}
              role={castMember.character}
            />
          ))}
        </Box>
      </GridItem>
      <GridItem>
        <Heading size="lg">Crew</Heading>
        <Box mt={5}>
          {data?.crew.map((crewMember) => (
            <CreditsCard
              key={crewMember.credit_id}
              person={crewMember}
              role={crewMember.job}
            />
          ))}
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default MovieCreditsPage;
