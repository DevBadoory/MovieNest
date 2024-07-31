import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MovieCastMember } from "../entities/MovieCredits";
import { TvCastMember } from "../entities/TvShowCredits";
import { getImageW300 } from "../services/img_path";

interface Props {
  casts: (MovieCastMember | TvCastMember)[];
  showId?: number;
  type: "movie" | "tv";
}

const CreditCarousel = ({ casts, showId, type }: Props) => {
  const getRoleText = (person: MovieCastMember | TvCastMember) => {
    if (type === "movie") {
      return (person as MovieCastMember).character;
    } else {
      return (person as TvCastMember).roles
        ?.map((role) => role.character)
        .join(", ");
    }
  };

  const { colorMode } = useColorMode();
  const color = colorMode === "light" ? "#000" : "#fff";

  return (
    <Box mb={10}>
      <SimpleGrid
        pb="1rem"
        gridAutoFlow="column"
        gridAutoColumns={{
          base: "150px",
          sm: "180px",
          md: "190px",
        }}
        gap="1rem"
        overflowX="scroll"
        scrollBehavior="smooth"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&:hover": {
            overflowY: "auto",
          },
        }}
      >
        {casts?.map((person) => (
          <Box
            mt={9}
            backgroundColor={colorMode === "light" ? "#fff" : "#202020"}
            boxShadow="0 2px 8px rgba(0, 0, 0, .1)"
            borderRadius="10px"
            key={person.id}
          >
            <Link to={`/person/${person.id}`}>
              <Image
                height="220px"
                width="100%"
                objectFit="cover"
                borderTopRadius="10px"
                src={getImageW300(person.profile_path)}
              />
            </Link>
            <Box py={5} px={4} textAlign="center">
              <Button
                as={Link}
                to={`/person/${person.id}`}
                variant="link"
                fontSize="1.2rem"
                fontWeight="700"
                textAlign="center"
                height="auto"
                padding={0}
                whiteSpace="normal"
                lineHeight="1.2"
                color={color}
              >
                {person.name}
              </Button>
              <Text
                noOfLines={2}
                fontSize="1rem"
                fontWeight="200"
                color={color}
              >
                {getRoleText(person)}
              </Text>
            </Box>
          </Box>
        ))}
        <Button
          alignSelf="center"
          as={Link}
          to={`/${type}/${showId}/credits`}
          variant="link"
          fontSize="1.3rem"
          fontWeight="700"
          textAlign="center"
          height="auto"
          padding={0}
          whiteSpace="normal"
          lineHeight="1.2"
        >
          View More <FaArrowRight style={{ marginLeft: "8px" }} />
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default CreditCarousel;
