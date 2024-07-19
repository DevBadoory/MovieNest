import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  title?: string;
  children: ReactNode;
}

const Carousel = ({ title, children }: props) => {
  return (
    <Box mb={10}>
      <Heading mb={5}>{title}</Heading>
      <SimpleGrid
        gridAutoFlow="column"
        gridAutoColumns={{
          base: "65%",
          sm: "45%",
          md: "30%",
          lg: "21%",
          xl: "14%",
        }}
        gap="1rem"
        overflowX="scroll"
        scrollBehavior="smooth"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&:hover": {
            overflowY: "auto",
          },
        }}
      >
        {children}
      </SimpleGrid>
    </Box>
  );
};

export default Carousel;
