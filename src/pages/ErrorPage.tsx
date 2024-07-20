import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import {
  isRouteErrorResponse,
  useRouteError,
  useNavigate,
} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const errorMessage = isRouteErrorResponse(error)
    ? "This page does not exist."
    : "An unexpected error occurred.";

  return (
    <Box padding={5} role="alert">
      <VStack spacing={4} align="start">
        <Heading>Oops...</Heading>
        <Text>{errorMessage}</Text>
        {error instanceof Error && <Text>Details: {error.message}</Text>}
        <Button onClick={() => navigate("/")}>Return to Homepage</Button>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
