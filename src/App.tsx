import { Box } from "@chakra-ui/react";
import HomePageGrid from "./components/HomePageGrid";
import NavBar from "./components/NavBar";
import "./index.css";

const App = () => {
  return (
    // <Grid
    //   templateAreas={{
    //     base: `"nav" "main"`,
    //     lg: `"aside nav" "aside main"`,
    //   }}
    //   templateColumns={{
    //     base: "1fr",
    //     lg: "200px 1fr",
    //   }}
    //   gap={1}
    // >
    //   <GridItem area="nav"></GridItem>
    //   <GridItem area="main">
    //     <HomePageGrid />
    //   </GridItem>
    //   <Show above="lg">
    //     <GridItem area="aside"></GridItem>
    //   </Show>
    // </Grid>
    <>
      <Box padding={8}>
        <NavBar />
      </Box>
      <Box padding={8}>
        <HomePageGrid />
      </Box>
    </>
  );
};

export default App;
