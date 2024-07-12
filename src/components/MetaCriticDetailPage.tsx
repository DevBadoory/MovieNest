import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

interface Props {
  score: number;
}

const MetaCriticDetailPage = ({ score }: Props) => {
  const metacritic = Math.round(score * 10);

  return (
    <Box display="inline-block">
      <CircularProgress
        value={metacritic}
        color={metacritic < 65 ? "yellow.400" : "green.400"}
        trackColor="#081c22"
        size="50px"
        thickness="8px"
      >
        <CircularProgressLabel fontSize="sm" fontWeight="bold">
          {metacritic === 0 ? "NR" : metacritic + "%"}
        </CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};

export default MetaCriticDetailPage;
