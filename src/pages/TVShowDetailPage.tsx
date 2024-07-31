import {
  Badge,
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
import ExpandableText from "../components/ExpandableText";
import MetaCriticDetailPage from "../components/MetaCriticDetailPage";
import { TVShow } from "../entities/TvShows";
import useTVShowDetails from "../hooks/useTVShowDetails";
import useTvShowsCredits from "../hooks/useTvShowCredits";
import { getImageW200, getImageW300, getImageW500 } from "../services/img_path";
import CreditCarousel from "../components/CreditsCarousel";

const TVShowDetailPage = () => {
  const { id } = useParams();
  const { data: show, error, isLoading } = useTVShowDetails(String(id));
  const { data } = useTvShowsCredits(String(id));

  const casts = data?.cast.slice(0, 8);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const tvShow = show as TVShow;

  return (
    <Box>
      <Grid templateColumns={{ base: "1fr", md: "300px 1fr" }} gap={10}>
        <GridItem>
          <Image
            height="450px"
            width="300px"
            objectFit="cover"
            src={getImageW500(tvShow.poster_path)}
            borderRadius="md"
            boxShadow="lg"
          />
        </GridItem>
        <GridItem>
          <VStack align="start" spacing={4}>
            <Heading as="h1" size="2xl">
              {tvShow.name}
            </Heading>
            <HStack spacing={4} wrap="wrap">
              <Text color="gray.500">
                {tvShow.first_air_date?.split("-")[0]}
              </Text>
              <Text color="gray.500">
                {tvShow.genres?.map((genre) => genre.name).join(", ")}
              </Text>
              <Text color="gray.500">
                {tvShow.episode_run_time && tvShow.episode_run_time.length > 0
                  ? `${tvShow.episode_run_time[0]} min/episode`
                  : "Runtime not available"}
              </Text>{" "}
            </HStack>
            <Flex align="center">
              <MetaCriticDetailPage score={tvShow.vote_average} />
              <Text ml={2} fontWeight="bold">
                User Score
              </Text>
            </Flex>
            <Text fontStyle="italic" color="gray.500">
              {tvShow.tagline}
            </Text>
            <Box>
              <Heading as="h2" size="md" mb={2}>
                Overview
              </Heading>
              <ExpandableText children={tvShow.overview} />
            </Box>
            <Divider />
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={4}
              width="100%"
            >
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Original Name
                </Heading>
                <Text>{tvShow.original_name}</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Status
                </Heading>
                <Text>{tvShow.status}</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  In Production
                </Heading>
                <Badge colorScheme={tvShow.in_production ? "green" : "red"}>
                  {tvShow.in_production ? "Yes" : "No"}
                </Badge>
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Number of Seasons
                </Heading>
                <Text>{tvShow.number_of_seasons}</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Number of Episodes
                </Heading>
                <Text>{tvShow.number_of_episodes}</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Languages
                </Heading>
                <Text>{tvShow.languages.join(", ")}</Text>
              </Box>
            </SimpleGrid>
            <Divider />
            <Box width="100%">
              <Heading as="h2" size="md" mb={2}>
                Created By
              </Heading>
              <SimpleGrid mt={5} columns={{ base: 2, md: 3 }} spacing={4}>
                {tvShow.created_by?.map((creator) => (
                  <Box key={creator.id} display="flex" alignItems="center">
                    <Image
                      src={getImageW300(creator.profile_path)}
                      alt={creator.name}
                      height="50px"
                      width="50px"
                      objectFit="cover"
                      borderRadius="full"
                      mr={2}
                    />
                    <Text fontSize="sm">{creator.name}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Divider />
            <Box width="100%">
              <Heading as="h2" size="md" mb={2}>
                Networks
              </Heading>
              <SimpleGrid mt={5} columns={{ base: 2, md: 3 }} spacing={4}>
                {tvShow.networks?.map((network) => (
                  <Box key={network.id} display="flex" alignItems="center">
                    <Image
                      src={getImageW200(network.logo_path)}
                      alt={network.name}
                      height="50px"
                      width="50px"
                      objectFit="contain"
                      mr={2}
                    />
                    <Text fontSize="sm">{network.name}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            {tvShow.next_episode_to_air && (
              <>
                <Divider />
                <Box width="100%">
                  <Heading as="h2" size="md" mb={2}>
                    Next Episode to Air
                  </Heading>
                  <VStack align="start" spacing={2}>
                    <Text>
                      <strong>Name:</strong> {tvShow.next_episode_to_air.name}
                    </Text>
                    <Text>
                      <strong>Air Date:</strong>{" "}
                      {tvShow.next_episode_to_air.air_date}
                    </Text>
                    <Text>
                      <strong>Season:</strong>{" "}
                      {tvShow.next_episode_to_air.season_number}
                    </Text>
                    <Text>
                      <strong>Episode:</strong>{" "}
                      {tvShow.next_episode_to_air.episode_number}
                    </Text>
                    <Text>
                      <strong>Overview:</strong>{" "}
                      {tvShow.next_episode_to_air.overview}
                    </Text>
                  </VStack>
                </Box>
              </>
            )}
          </VStack>
        </GridItem>
      </Grid>
      <CreditCarousel casts={casts || []} showId={tvShow.id} type="tv" />
    </Box>
  );
};

export default TVShowDetailPage;
