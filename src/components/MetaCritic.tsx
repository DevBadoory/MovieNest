import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

interface Props {
  children: number;
}
const MetaCritic = ({ children }: Props) => {
  const metacritic = parseFloat(children.toFixed(1)); // Ensures the value has one decimal point

  return (
    <Box position="relative" bottom={7} height="1.9rem">
      <CircularProgress
        max={10}
        fontWeight="bold"
        fontSize="3.5rem"
        value={metacritic * 10} // Scales the value to fit within the CircularProgress range
        color={metacritic < 6.5 ? "yellow" : "green"}
        backgroundColor="#081c22"
        borderRadius="50%"
      >
        <CircularProgressLabel color="white">
          {metacritic === 0 ? "NR" : metacritic}
        </CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};

export default MetaCritic;
