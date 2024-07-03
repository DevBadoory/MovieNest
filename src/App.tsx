import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"aside nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap={1}
    >
      <GridItem area="nav"></GridItem>
      <GridItem area="main"></GridItem>
      <Show above="lg">
        <GridItem area="aside"></GridItem>
      </Show>
    </Grid>
  );
};

export default App;
