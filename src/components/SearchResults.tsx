import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import SearchPerson from "./SearchPerson";

const SearchResults = () => {
  const [type, setType] = useState("person");
  const slug = useParams();
  const { data } = useSearch(slug.slug!, type);
  return (
    <Grid
      templateColumns={{
        lg: "300px 1fr",
      }}
    >
      <GridItem></GridItem>
      <GridItem>
        {data?.data.results.map((person) => (
          <Box mb={2}>
            <SearchPerson person={person} />
          </Box>
        ))}
      </GridItem>
    </Grid>
  );
};

export default SearchResults;
