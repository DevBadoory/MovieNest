import { Box, Button, Image, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PersonCastMember, PersonCrewMember } from "../entities/PersonCredits";
import { getImageW300 } from "../services/img_path";
import Carousel from "./Carousel";

interface Props {
  shows: (PersonCastMember | PersonCrewMember)[];
}

const KnownForCarousel = ({ shows }: Props) => {
  const { colorMode } = useColorMode();
  const color = colorMode === "light" ? "#000" : "";

  return (
    <Carousel title="Known For">
      {shows?.map((show) => (
        <Box mt={5} borderRadius="10px" key={show.id} minW="150px">
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
    </Carousel>
  );
};

export default KnownForCarousel;
