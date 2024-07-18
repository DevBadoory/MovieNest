import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import SearchCategorySelector from "./SearchCategorySelector";
import SearchItem from "./SearchItem";

const SearchResults = () => {
  const [category, setCategory] = useState("movie");
  const slug = useParams();
  const { data } = useSearch(slug.slug!, category);

  return (
    <Box>
      <Box>
        <SearchCategorySelector
          setCategory={(category) => setCategory(category)}
          selectedCategory={category}
        />
      </Box>
      <Box>
        {data?.data.results.map((item) => (
          <Box key={item.id} mb={2}>
            <SearchItem item={item} selectedCategory={category} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SearchResults;
