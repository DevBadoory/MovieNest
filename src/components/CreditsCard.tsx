import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MovieCastMember, MovieCrewMember } from "../entities/MovieCredits";
import { TvCastMember, TvCrewMember } from "../entities/TvShowCredits";
import { getImageW200 } from "../services/img_path";

interface Props {
  person: MovieCastMember | MovieCrewMember | TvCastMember | TvCrewMember;
  role: string;
}

const CreditsCard = ({ person, role }: Props) => {
  return (
    <HStack key={person.id} mb={4} gap={4} alignItems="flex-start">
      <Link to={`/person/${person.id}`}>
        <Image
          objectFit="cover"
          width="80px"
          height="90px"
          borderRadius="10px"
          src={getImageW200(person.profile_path)}
          flexShrink={0}
        />
      </Link>
      <Box alignSelf="center" textAlign="left" flex="1" minWidth="0">
        <Link to={`/person/${person.id}`}>
          <Button
            as="div"
            variant="link"
            fontSize="1.1rem"
            fontWeight="700"
            textAlign="left"
            height="auto"
            padding={0}
            whiteSpace="normal"
            lineHeight="1.2"
            justifyContent="left"
          >
            {person.name}
          </Button>
        </Link>
        <Text whiteSpace="normal">{role}</Text>
      </Box>
    </HStack>
  );
};

export default CreditsCard;
