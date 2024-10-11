import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Movie from "../entities/Movie";
import { MovieCrewMember } from "../entities/MovieCredits";
import { getImageW500 } from "../services/img_path";
import ExpandableText from "./ExpandableText";
import MetaCriticDetailPage from "./MetaCriticDetailPage";
import WatchLaterButton from "./WatchLaterButton";

interface Props {
  movie: Movie;
  crew: MovieCrewMember[];
}

const MovieInfo = ({ movie, crew }: Props) => {
  const color = "#fff";

  const fontSize = useBreakpointValue({ base: "sm", md: "md" });
  const headingSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });

  const renderCrew = (department: string, role: string) =>
    crew
      ?.filter((c) => c.department === department)
      .slice(0, 9)
      .map((member) => (
        <Box key={member.id} mr="1rem">
          <Button
            as={Link}
            to={`/person/${member.id}`}
            variant="link"
            fontSize={fontSize}
            fontWeight="700"
            color={color}
            textAlign="center"
          >
            {member.name}
          </Button>
          <Text color={color} fontSize={fontSize}>
            {role}
          </Text>
        </Box>
      ));

  return (
    <SimpleGrid templateColumns={{ base: "1fr", md: `300px 1fr` }} gap={6}>
      <GridItem>
        <Image
          margin="auto"
          objectFit="cover"
          src={getImageW500(movie.poster_path || "")}
          borderRadius="md"
          boxShadow="lg"
          height={{ base: "300px", md: "450px" }}
          width={{ base: "200px", md: "300px" }}
        />
      </GridItem>
      <GridItem>
        <VStack align="start" spacing={4}>
          <Flex
            flexDirection={{ base: "column-reverse", md: "row" }}
            w="full"
            alignItems="center"
            gap={7}
            justifyContent="space-between"
          >
            <Heading
              textAlign="left"
              as="h1"
              size={headingSize}
              margin={{ base: "auto", md: "0" }}
              color={color}
            >
              {movie.title}
            </Heading>
            <WatchLaterButton />
          </Flex>
          <HStack spacing={3} wrap="wrap" margin={{ base: "auto", md: "0" }}>
            <Text color={color} fontSize={fontSize}>
              {movie.release_date.split("-")[0]}
            </Text>
            <Text color={color} fontSize={fontSize}>
              {movie.genres.map((genre) => genre.name).join(", ")}
            </Text>
            <Text color={color} fontSize={fontSize}>
              {`${movie.runtime} min`}
            </Text>
          </HStack>
          <Flex align="center">
            <MetaCriticDetailPage score={movie.vote_average} />
            <Text ml={2} fontWeight="bold" color={color} fontSize={fontSize}>
              User Score
            </Text>
          </Flex>
          <Text fontStyle="italic" color={color} fontSize={fontSize}>
            {movie.tagline}
          </Text>
          <Box>
            <Heading as="h2" size="md" mb={2} color={color}>
              Overview
            </Heading>
            <ExpandableText>{movie.overview}</ExpandableText>
          </Box>
          <SimpleGrid
            columns={{ base: 1, sm: 3, md: 2, lg: 3, xl: 3 }}
            gap={6}
            mt={5}
            width="100%"
          >
            {renderCrew("Directing", "Director")}
            {renderCrew("Writing", "Writer")}
          </SimpleGrid>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default MovieInfo;
