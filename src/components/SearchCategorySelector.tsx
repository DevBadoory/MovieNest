import { Box, Button, HStack, Heading } from "@chakra-ui/react";

interface props {
  setCategory: (category: string) => void;
  selectedCategory: string;
}

const SearchCategorySelector = ({ setCategory, selectedCategory }: props) => {
  const searchTypes = [
    { name: "Movies", value: "movie" },
    { name: "Tv Shows", value: "tv" },
    { name: "People", value: "person" },
  ];
  return (
    <Box border=".6px solid #494949" borderRadius="10px" mb={8}>
      <Heading
        padding={3}
        textAlign="left"
        borderBottom=".6px solid #494949"
        fontSize="1.2rem"
      >
        Search Result
      </Heading>
      <HStack>
        {searchTypes.map((s) => (
          <Button
            color={s.value === selectedCategory ? "white" : "#494949"}
            variant="link"
            padding={4}
            textAlign="left"
            background="none"
            key={s.value}
            onClick={() => setCategory(s.value)}
          >
            {s.name}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default SearchCategorySelector;
