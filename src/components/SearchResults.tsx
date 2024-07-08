import { Box, Heading, Image } from "@chakra-ui/react";
import useSearch from "../hooks/useSearch";
import { getImage } from "../services/api-client";

const SearchResults = () => {
  const { data } = useSearch();
  console.log(data);
  return (
    <div>
      {data?.results.map((search) => (
        <Box>
          <Image
            src={getImage(
              search.backdrop_path || search.poster_path || search.profile_path
            )}
          />

          <Heading>{search.name}</Heading>
        </Box>
      ))}
    </div>
  );
};

export default SearchResults;
