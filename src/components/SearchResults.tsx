import { Box, Heading, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import { getImage } from "../services/img_path";

const SearchResults = () => {
  const slug = useParams();
  const { data } = useSearch(slug.slug!);
  return (
    <div>
      {data?.results.map((search) => (
        <Box key={search.id}>
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
