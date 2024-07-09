import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import SearchCategorySelector from "./SearchCategorySelector";
import SearchPerson from "./SearchPerson";

const SearchResults = () => {
  const [category, setCategory] = useState("person");
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
        {data?.data.results.map((person) => (
          <Box key={person.id} mb={2}>
            <SearchPerson person={person} />
          </Box>
        ))}
      </GridItem>
    </Grid>
  );
};

export default SearchResults;
