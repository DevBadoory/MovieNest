import { Box, SimpleGrid, Heading, Spinner, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useTvCredits from "../hooks/useTvShowCredits";
import CreditsCard from "../components/CreditsCard";

const TvCreditsPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useTvCredits(String(id));

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2rem">
      <GridItem>
        <Heading size="lg">Cast</Heading>
        <Box mt={5}>
          {data?.cast.map((castMember) => (
            <CreditsCard
              key={castMember.roles[0].credit_id}
              person={castMember}
              role={castMember.roles.map((role) => role.character).join(", ")}
            />
          ))}
        </Box>
      </GridItem>
      <GridItem>
        <Heading size="lg">Crew</Heading>
        <Box mt={5}>
          {data?.crew.map((crewMember) => (
            <CreditsCard
              key={crewMember.jobs[0]?.credit_id}
              person={crewMember}
              role={crewMember.jobs.map((job) => job.job).join(", ")}
            />
          ))}
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default TvCreditsPage;
