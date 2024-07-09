import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import SearchCategorySelector from "./SearchCategorySelector";
import SearchPerson from "./SearchPerson";
import SearchMovies from "./SearchMovies";

const SearchResults = () => {
  const [category, setCategory] = useState("movie");
  const slug = useParams();
  const { data } = useSearch(slug.slug!, category);
  return (
    <Grid>
      <GridItem paddingX={8}>
        <SearchCategorySelector
          setCategory={(category) => setCategory(category)}
          selectedCategory={category}
        />
      </GridItem>
      <GridItem paddingX={8}>
        {data?.data.results.map((movie) => (
          <Box key={movie.id} mb={2}>
            <SearchMovies movie={movie} />
          </Box>
        ))}
      </GridItem>
    </Grid>
  );
};

export default SearchResults;
