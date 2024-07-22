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
    <SimpleGrid columns={2}>
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
          {data?.crew.map((CrewMember) => (
            <CreditsCard
              key={CrewMember.credit_id}
              person={CrewMember}
              role={CrewMember.job}
            />
          ))}
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default MovieCreditsPage;
