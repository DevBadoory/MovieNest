import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CastMember } from "../entities/MovieCredits";
import { getImage } from "../services/img_path";

interface props {
  casts: CastMember[];
  movieId?: number;
}

const CreditCarousel = ({ casts, movieId }: props) => {
  console.log(typeof movieId);
  return (
    <Box mb={10}>
      <SimpleGrid
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
            backgroundColor="#202020"
            borderRadius="10px"
            key={person.id}
          >
            <Link to={`/person/${person.id}`}>
              <Image
                height="220px"
                width="100%"
                objectFit="cover"
                borderTopRadius="10px"
                src={getImage(person.profile_path)}
              />
            </Link>
            <Box py={5} px={4} textAlign="center">
              <Button
                as={Link}
                to={`/person/${person.id}`}
                variant="link"
                fontSize="1.1rem"
                fontWeight="700"
                textAlign="center"
                height="auto"
                padding={0}
                whiteSpace="normal"
                lineHeight="1.2"
              >
                {person.name}
              </Button>
              <Text fontSize="1.1rem" fontWeight="light">
                {person.character}
              </Text>
            </Box>
          </Box>
        ))}
        <Button
          alignSelf="center"
          as={Link}
          to={`/movie/${movieId}/credits`}
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
