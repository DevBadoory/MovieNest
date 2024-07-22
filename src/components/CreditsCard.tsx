import { HStack, Button, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getImage } from "../services/img_path";
import { CastMember, CrewMember } from "../entities/MovieCredits";

interface Props {
  person: CastMember | CrewMember;
  role: string;
}

const CreditsCard = ({ person, role }: Props) => {
  return (
    <HStack key={person.id} mb={4} gap={4}>
      <Link to={`/person/${person.id}`}>
        <Image
          objectFit="cover"
          width="80px"
          height="90px"
          borderRadius="10px"
          src={getImage(person.profile_path)}
        />
      </Link>
      <Box textAlign="left">
        <Button
          as={Link}
          to={`/person/${person.id}`}
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
        <Text>{role}</Text>
      </Box>
    </HStack>
  );
};

export default CreditsCard;
