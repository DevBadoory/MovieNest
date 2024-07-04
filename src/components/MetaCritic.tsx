import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

interface props {
  children: number;
}
const MetaCritic = ({ children }: props) => {
  const metacritic = Math.round(children * 10);

  return (
    <Box position="relative" bottom={7} height="1.9rem">
      <CircularProgress
        fontWeight="bold"
        fontSize="3rem"
        value={metacritic}
        color={metacritic < 65 ? "yellow" : "green"}
        backgroundColor="#081c22"
        borderRadius="50%"
      >
        <CircularProgressLabel>
          {metacritic === 0 ? "NR" : metacritic + "%"}
        </CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};

export default MetaCritic;
