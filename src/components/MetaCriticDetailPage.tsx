import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

interface Props {
  score: number;
}

const MetaCriticDetailPage = ({ score }: Props) => {
  const metacritic = parseFloat(score.toFixed(1)); // Ensures the value has one decimal point

  return (
    <Box display="inline-block">
      <CircularProgress
        max={10}
        value={metacritic}
        color={metacritic < 6.5 ? "yellow.400" : "green.400"}
        trackColor="#081c22"
        size="50px"
        thickness="8px"
      >
        <CircularProgressLabel fontSize="1rem" fontWeight="bold">
          {metacritic === 0 ? "NR" : metacritic.toFixed(1)}
        </CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};

export default MetaCriticDetailPage;
