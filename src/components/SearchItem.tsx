import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Search from "../entities/Search";
import { getImage } from "../services/img_path";
import { Link } from "react-router-dom";

interface Props {
  item: Search;
  selectedCategory: string;
}

const SearchItem = ({ item, selectedCategory }: Props) => {
  const { colorMode } = useColorMode();
  const color = colorMode === "light" ? "#000" : "#fff";
  const title = item.title || item.name;
  const date = item.release_date || item.first_air_date;
  const imagePath = item.poster_path || item.profile_path;

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
        <Button
          as={Link}
          to={detailPath}
          variant="link"
          fontSize="1.1rem"
          fontWeight="700"
          textAlign="left"
          height="auto"
          padding={0}
          whiteSpace="normal"
          lineHeight="1.2"
          justifyContent="left"
          color={color}
        >
          {title}
        </Button>
        {date && (
          <Text fontSize="sm" color="#6b6a6a" fontWeight="300">
            {date}
          </Text>
        )}
        {item.known_for_department && (
          <HStack spacing={1}>
            <Text
              fontWeight="300"
              textAlign="left"
              height="auto"
              padding={0}
              whiteSpace="normal"
              lineHeight="1.2"
              justifyContent="left"
            >
              <Box as="span" fontWeight="600">
                {item.known_for_department}
              </Box>
              <Box as="span" fontWeight="700">
                {" • "}
              </Box>
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
