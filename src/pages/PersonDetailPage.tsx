import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import KnownForCarousel from "../components/KnownForCarousel";
import usePersonCredits from "../hooks/usePersonCredits";
import usePersonDetails from "../hooks/usePersonDetails";
import { getImage } from "../services/img_path";

const PersonDetailPage = () => {
  const { id } = useParams();
  const { data: person, error, isLoading } = usePersonDetails(String(id));
  const { data: credits } = usePersonCredits(String(id));

  const knownFor = credits?.cast
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 9);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!person) return <Text>No person data found.</Text>;

  return (
    <Box>
      <Grid templateColumns={{ base: "1fr", md: "300px 1fr" }} gap={10}>
        <GridItem>
          <Image
            height="450px"
            width="300px"
            objectFit="cover"
            src={getImage(person.profile_path || "")}
            borderRadius="md"
            boxShadow="lg"
          />
        </GridItem>
        <GridItem>
          <VStack align="start" spacing={4}>
            <Heading as="h1" size="2xl">
              {person.name}
            </Heading>
            <HStack spacing={4} wrap="wrap">
              {person.birthday && (
                <Text color="gray.500">Born: {person.birthday}</Text>
              )}
              {person.place_of_birth && (
                <Text color="gray.500">in {person.place_of_birth}</Text>
              )}
            </HStack>
            {person.deathday && (
              <Text color="gray.500">Died: {person.deathday}</Text>
            )}
            {person.biography && (
              <Box>
                <Heading as="h2" size="md" my={2}>
                  Biography
                </Heading>
                <Text>{person.biography}</Text>
              </Box>
            )}
            {knownFor && (
              <Box
                mt={6}
                maxWidth="1094px"
                width={{
                  base: "calc(100vw - 33px)",
                  sm: "calc(100vw - 60px)",
                  md: "calc(100vw - 410px)",
                }}
              >
                <Heading as="h2" size="md">
                  Known For
                </Heading>
                <KnownForCarousel shows={knownFor} />
              </Box>
            )}
            <Box width="100%">
              <Heading as="h2" size="md" mb={2}>
                External Links
              </Heading>
              <HStack spacing={4}>
                {person.homepage && (
                  <Text
                    as="a"
                    href={person.homepage}
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Website
                  </Text>
                )}
                {person.imdb_id && (
                  <Text
                    as="a"
                    href={`https://www.imdb.com/name/${person.imdb_id}`}
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IMDb Profile
                  </Text>
                )}
              </HStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} width="100%">
        {person.also_known_as.length > 0 && (
          <Box>
            <Heading as="h3" size="sm" mb={2}>
              Also Known As
            </Heading>
            <VStack align="start">
              {person.also_known_as.map((name, index) => (
                <Text key={index}>{name}</Text>
              ))}
            </VStack>
          </Box>
        )}

        <Text fontWeight="bold">Known For: {person.known_for_department}</Text>
        <Box>
          <Heading as="h3" size="sm" mb={2}>
            Popularity
          </Heading>
          <Text>{person.popularity.toFixed(2)}</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default PersonDetailPage;
