import {
  Box,
  Grid,
  GridItem,
  Heading,
  Hide,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CreditsList from "../components/CreditsList";
import ExpandableText from "../components/ExpandableText";
import KnownForCarousel from "../components/KnownForCarousel";
import usePersonCredits from "../hooks/usePersonCredits";
import usePersonDetails from "../hooks/usePersonDetails";
import { getImageW500 } from "../services/img_path";

const PersonDetailPage = () => {
  const { id } = useParams();
  const { data: person, error, isLoading } = usePersonDetails(String(id));
  const { data: credits } = usePersonCredits(String(id));

  const KnownForRole =
    credits?.cast.length && credits?.cast?.length > 8
      ? credits?.cast
      : credits?.crew;

  const knownFor = KnownForRole?.sort(
    (a, b) => b.vote_count - a.vote_count
  ).slice(0, 9);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!person) return <Text>No person data found.</Text>;

  return (
    <Box>
      <Grid templateColumns={{ base: "1fr", md: "300px 1fr" }} gap={6}>
        <GridItem>
          <Image
            margin="auto"
            alt={person.name}
            height="450px"
            width="300px"
            objectFit="cover"
            src={getImageW500(person.profile_path || "")}
            borderRadius="md"
            boxShadow="lg"
          />
          <Hide above="md">
            <Heading as="h1" size="2xl" margin="auto" textAlign="center" mt={2}>
              {person.name}
            </Heading>
          </Hide>
          <SimpleGrid mt={6} spacing={6}>
            <Heading fontSize="1.5rem" as="h2">
              Personal Info
            </Heading>
            {person.known_for_department && (
              <Box>
                <Heading as="h3" size="sm" mb={1}>
                  Known For
                </Heading>
                <Text>{person.known_for_department}</Text>
              </Box>
            )}
            {person.birthday && (
              <Box>
                <Heading as="h3" size="sm" mb={1}>
                  Birthday
                </Heading>
                <Text> {person.birthday}</Text>
              </Box>
            )}
            {person.place_of_birth && (
              <Box>
                <Heading as="h3" size="sm" mb={1}>
                  Place of Birth
                </Heading>
                <Text>in {person.place_of_birth}</Text>
              </Box>
            )}
            {person.deathday && (
              <Text color="gray.500">Died: {person.deathday}</Text>
            )}
            {person.gender && (
              <Box>
                <Heading as="h3" size="sm" mb={1}>
                  Gender
                </Heading>
                <Text>{person.gender === 1 ? "Female" : "Male"}</Text>
              </Box>
            )}
            {credits && (
              <Box>
                <Heading as="h3" size="sm" mb={1}>
                  Total Credits
                </Heading>
                <Text>{credits.cast.length + credits.crew.length}</Text>
              </Box>
            )}
            <Hide below="md">
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
            </Hide>
            <Box>
              <Heading as="h2" size="md" mb={2}>
                External Links
              </Heading>
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
            </Box>
          </SimpleGrid>
        </GridItem>
        <GridItem>
          <Hide below="md">
            <Heading mb={5} as="h1" size="2xl">
              {person.name}
            </Heading>
          </Hide>

          {person.biography && (
            <Box>
              <Heading as="h2" size="md" mb={2}>
                Biography
              </Heading>
              <ExpandableText children={person.biography} />
            </Box>
          )}
          {knownFor && (
            <Box
              mt={6}
              maxWidth="1094px"
              width={{
                base: "calc(100vw - 33px)",
                sm: "calc(100vw - 60px)",
                md: "calc(100vw - 420px)",
              }}
            >
              <KnownForCarousel shows={knownFor} />
            </Box>
          )}
          {credits && <CreditsList credits={credits} />}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PersonDetailPage;
