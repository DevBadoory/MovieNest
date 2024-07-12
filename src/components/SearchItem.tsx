import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import Search from "../entities/Search";
import { getImage } from "../services/img_path";
import { Link } from "react-router-dom";

interface Props {
  item: Search;
  selectedCategory: string;
}

const SearchItem = ({ item, selectedCategory }: Props) => {
  const title = item.title || item.name;
  const date = item.release_date || item.first_air_date;
  const imagePath = item.backdrop_path || item.poster_path || item.profile_path;

  const detailPath = selectedCategory ? `/${selectedCategory}/${item.id}` : "";

  return (
    <HStack>
      <Link to={detailPath}>
        <Image
          height="141px"
          width="94px"
          minWidth="94px"
          objectFit="cover"
          borderRadius="4px"
          src={getImage(imagePath)}
        />
      </Link>
      <Box ml={2}>
        <Button variant="link" fontSize="1.1rem">
          <Link to={detailPath}>{title}</Link>
        </Button>
        {date && (
          <Text fontSize="sm" color="#6b6a6a" fontWeight="300">
            {date}
          </Text>
        )}
        {item.known_for_department && (
          <HStack spacing={1}>
            <Text fontWeight="400">
              {item.known_for_department}
              {" •"}
            </Text>
            <Text fontWeight="300">
              {item.known_for?.map((k) => k.name || k.title).join(", ")}
            </Text>
          </HStack>
        )}
        {item.overview && (
          <Text noOfLines={2} fontSize="sm" mt={5}>
            {item.overview}
          </Text>
        )}
      </Box>
    </HStack>
  );
};

export default SearchItem;
