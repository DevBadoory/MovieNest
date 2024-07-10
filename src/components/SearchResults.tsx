import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import SearchCategorySelector from "./SearchCategorySelector";
import SearchPerson from "./SearchPerson";
import SearchMovies from "./SearchMovies";
import SearchTVShows from "./SearchTvShows";

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
        {data?.data.results.map((tvShow) => (
          <Box key={tvShow.id} mb={2}>
            <SearchTVShows tvShow={tvShow} />
          </Box>
        ))}
      </GridItem>
    </Grid>
  );
};

export default SearchResults;
