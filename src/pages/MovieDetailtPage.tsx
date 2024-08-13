import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BackdropSection from "../components/BackdropSection";
import CreditCarousel from "../components/CreditsCarousel";
import MovieInfo from "../components/MovieInfo";
import useMovieCredits from "../hooks/useMovieCredits";
import useMovieDetails from "../hooks/useMovieDetails";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading } = useMovieDetails(String(id));
  const { data } = useMovieCredits(String(id));

  const casts = data?.cast.slice(0, 8);
  const { colorMode } = useColorMode();
  const color = colorMode === "light" ? "#fff" : "#121212";

  if (isLoading) return <Spinner></Spinner>;
  if (error) throw error;

  if (!movie) return <Text>Movie not found.</Text>;
  return (
    <Box>
      <BackdropSection backdropPath={movie?.backdrop_path || "#000"}>
        {" "}
        <MovieInfo movie={movie} crew={data?.crew || []} />
      </BackdropSection>
      <Grid templateColumns={{ base: "1fr", md: "1fr 210px" }} gap={0} mt={8}>
        <GridItem>
          {casts && (
            <Box
              maxWidth="1200"
              width={{
                base: "calc(100vw - 33px)",
                sm: "calc(100vw - 66px)",
                md: "calc(100vw - 290px)",
              }}
            >
              <Heading as="h2" size="lg">
                Top Build Cast
              </Heading>
              <CreditCarousel
                casts={casts || []}
                showId={movie?.id}
                type={"movie"}
              />
            </Box>
          )}
        </GridItem>
        <GridItem boxShadow={`-19px 1px 20px 9px ${color}`} zIndex="1">
          <SimpleGrid
            columns={{ base: 1 }}
            spacing={4}
            width="100%"
            gap={8}
            paddingLeft="1rem"
          >
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
          <Box width="100%" boxShadow="0 2px 8px rgba(0, 0, 0, .1)"></Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MovieDetailPage;
