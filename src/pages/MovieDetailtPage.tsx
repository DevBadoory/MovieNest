import {
  Box,
  Divider,
  Flex,
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
import CreditCarousel from "../components/CreditsCarousel";
import MetaCriticDetailPage from "../components/MetaCriticDetailPage"; // Import the new component
import useMovieCredits from "../hooks/useMovieCredits";
import useMovieDetails from "../hooks/useMovieDetails";
import { getImageW200, getImageW500 } from "../services/img_path";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading } = useMovieDetails(String(id));
  const { data } = useMovieCredits(String(id));

  const casts = data?.cast.slice(0, 8);

  if (isLoading) return <Spinner></Spinner>;
  if (error) throw error;

  return (
    <Box>
      <Grid templateColumns={{ base: "1fr", md: "300px 1fr" }} gap={10}>
        <GridItem>
          <Image
            height="450px"
            width="300px"
            objectFit="cover"
            src={getImage(movie?.poster_path || "")}
            borderRadius="md"
            boxShadow="lg"
          />
        </GridItem>
        <GridItem>
          <VStack align="start" spacing={4}>
            <Heading as="h1" size="2xl">
              {movie?.title}
            </Heading>
            <HStack spacing={4} wrap="wrap">
              <Text color="gray.500">{movie?.release_date?.split("-")[0]}</Text>
              <Text color="gray.500">
                {movie?.genres?.map((genre) => genre.name).join(", ")}
              </Text>
              <Text color="gray.500">{`${movie?.runtime} min`}</Text>
            </HStack>
            <Flex align="center">
              <MetaCriticDetailPage score={movie?.vote_average || 0} />
              <Text ml={2} fontWeight="bold">
                User Score
              </Text>
            </Flex>
            <Text fontStyle="italic" color="gray.500">
              {movie?.tagline}
            </Text>
            <Box>
              <Heading as="h2" size="md" mb={2}>
                Overview
              </Heading>
              <ExpandableText children={movie?.overview} />{" "}
            </Box>
            <Divider />
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} width="100%">
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Original Title
                </Heading>
                <Text>{movie?.original_title}</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Status
                </Heading>
                <Text>{movie?.status}</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Budget
                </Heading>
                <Text>${movie?.budget?.toLocaleString()}</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Revenue
                </Heading>
                <Text>${movie?.revenue?.toLocaleString()}</Text>
              </Box>
            </SimpleGrid>
            <Divider />
            <Box width="100%">
              <Heading as="h2" size="md" mb={2}>
                Production Companies
              </Heading>
              <SimpleGrid mt={5} columns={{ base: 2, md: 3 }} spacing={4}>
                {movie?.production_companies?.map((company) => (
                  <Box key={company.id} display="flex" alignItems="center">
                    <Image
                      src={getImage(company.logo_path || "")}
                      alt={company.name}
                      height="50px"
                      width="50px"
                      objectFit="contain"
                      mr={2}
                    />
                    <Text fontSize="sm">{company.name}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
      <CreditCarousel casts={casts || []} showId={movie?.id} type={"movie"} />
    </Box>
  );
};

export default MovieDetailPage;
