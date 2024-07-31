import { Box, Button, Image, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PersonCastMember, PersonCrewMember } from "../entities/PersonCredits";
import { getImageW300 } from "../services/img_path";

interface Props {
  shows: (PersonCastMember | PersonCrewMember)[];
}

const KnownForCarousel = ({ shows }: Props) => {
  const { colorMode } = useColorMode();
  const color = colorMode === "light" ? "#000" : "";
  return (
    <Box mb={10}>
      <SimpleGrid
        gridAutoFlow="column"
        gridAutoColumns={{
          base: "150px",
          sm: "180px",
          md: "160px",
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
        {shows?.map((show) => (
          <Box mt={5} borderRadius="10px" key={show.id}>
            <Link to={`/${show.media_type}/${show.id}`}>
              <Image
                alt={show.original_title || show.original_name}
                height="220px"
                width="100%"
                objectFit="cover"
                borderTopRadius="10px"
                src={getImageW300(show.poster_path || "")}
              />
            </Link>
            <Box py={1} textAlign="center">
              <Button
                as={Link}
                to={`/${show.media_type}/${show.id}`}
                variant="link"
                fontSize="1rem"
                fontWeight="700"
                textAlign="center"
                height="auto"
                padding={0}
                whiteSpace="normal"
                lineHeight="1.2"
                color={color}
              >
                {show.title || show.original_name}
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default KnownForCarousel;
