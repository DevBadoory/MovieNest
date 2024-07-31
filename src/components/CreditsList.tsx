import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import PersonCredits from "../entities/PersonCredits";
import { getImageW200 } from "../services/img_path";

interface Props {
  credits: PersonCredits;
}

const CreditsList = ({ credits }: Props) => {
  const [mediaType, setMediaType] = useState<string | null>(null);
  const [roleType, setRoleType] = useState<"cast" | "crew">("cast");
  const [listLength, setListLength] = useState(20);
  const [showSeeAll, setShowSeeAll] = useState(true);

  useEffect(() => {
    if (credits.cast.length === 0) {
      setRoleType("crew");
    }
  }, [credits.cast.length]);

  const filteredMedia = mediaType
    ? credits[roleType].filter((item) => item.media_type === mediaType)
    : credits[roleType];

  const visibleItems =
    filteredMedia.length > 20
      ? filteredMedia.slice(0, listLength)
      : filteredMedia;

  useEffect(() => {
    setShowSeeAll(filteredMedia.length > 20);
  }, [filteredMedia.length]);

  const handleSeeAllClick = useCallback(() => {
    setListLength(filteredMedia.length);
    setShowSeeAll(false);
  }, [filteredMedia.length]);

  return (
    <SimpleGrid spacing={2} mb={5}>
      <HStack justifyContent="space-between">
        <Heading as="h2" fontSize="1.5rem">
          {roleType === "cast" ? "Acting" : "Production"}
        </Heading>
        <HStack>
          <Menu>
            <MenuButton
              fontSize="md"
              as={Button}
              rightIcon={<IoMdArrowDropdown />}
            >
              {mediaType === "movie"
                ? "Movies"
                : mediaType === "tv"
                ? "Tv Shows"
                : "All"}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setMediaType(null)}>All</MenuItem>
              <MenuItem onClick={() => setMediaType("movie")}>Movies</MenuItem>
              <MenuItem onClick={() => setMediaType("tv")}>TV Shows</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              fontSize="md"
              as={Button}
              rightIcon={<IoMdArrowDropdown />}
            >
              {roleType === "cast" ? "Acting" : "Production"}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setRoleType("cast")}>Acting</MenuItem>
              <MenuItem onClick={() => setRoleType("crew")}>
                Production
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>

      {visibleItems.map((item) => (
        <Link to={`/${item.media_type}/${item.id}/`} key={item.credit_id}>
          <HStack justifyContent="space-between" spacing="3rem">
            <HStack>
              <Image
                alt={item.original_title || item.original_name}
                width="60px"
                height="90px"
                borderRadius="10px"
                objectFit="cover"
                src={getImageW200(item.poster_path || "")}
              />
              <Box>
                <Heading fontSize="lg">
                  {item.original_title || item.original_name}
                </Heading>
                <Text>{item.vote_average.toFixed(1)}</Text>
                <Text fontWeight="light">
                  {roleType === "cast" ? item.character : item.job}
                </Text>
              </Box>
            </HStack>
            <Text>
              {(item.release_date || item.first_air_date)?.slice(0, 4)}
            </Text>
          </HStack>
        </Link>
      ))}
      {showSeeAll && <Button onClick={handleSeeAllClick}>See All</Button>}
    </SimpleGrid>
  );
};

export default CreditsList;
