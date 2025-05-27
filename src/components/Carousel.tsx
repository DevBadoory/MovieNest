import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { ReactNode, useRef } from "react";
import ScrollButton from "./ScrollButton";

interface Props {
  title?: string;
  children: ReactNode;
}

const Carousel = ({ title, children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Box mb={10}>
      <Heading mb={5}>{title}</Heading>
      <Flex align="center" position="relative">
        <ScrollButton direction="left" scrollRef={scrollRef} />
        <Box
          ref={scrollRef}
          overflowX="scroll"
          scrollBehavior="smooth"
          w="100%"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <SimpleGrid
            gridAutoFlow="column"
            gridAutoColumns={{
              base: "50%",
              sm: "40%",
              md: "30%",
              lg: "21%",
              xl: "14%",
            }}
            gap="1rem"
          >
            {children}
          </SimpleGrid>
        </Box>
        <ScrollButton direction="right" scrollRef={scrollRef} />
      </Flex>
    </Box>
  );
};

export default Carousel;
