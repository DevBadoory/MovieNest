import { Box, Button, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useAuth } from "./useAuth";

interface props {
  signing: () => void;
}

const Signin = ({ signing }: props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signInMutation, usernames } = useAuth();

  console.log(usernames?.find((u) => u.email == email));

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();

    if (!usernames?.find((u) => u.email == email)) {
      setError("email address is not found");
      return;
    }
    signInMutation.mutate(
      { email, password },
      {
        onError: () =>
          setError("Incorrect email or password. Please check your details."),
      }
    );
  };
  return (
    <Box
      maxW="sm"
      mx="auto"
      mt={8}
      p={4}
      borderWidth={1}
      borderRadius="lg"
      textAlign="center"
    >
      <Heading as="h2" size="lg" mb={6}>
        Sign In
      </Heading>
      <VStack spacing={4} as="form" mb={4} onSubmit={handleSignIn}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isRequired
        />

        {error && (
          <Text color="red.500" fontSize="sm">
            {error}
          </Text>
        )}

        <Button
          type="submit"
          colorScheme="blue"
          width="full"
          isDisabled={password.length < 6 || email.length < 1}
        >
          Sign In
        </Button>
      </VStack>
      <button onClick={signing}>Create an account</button>
    </Box>
  );
};

export default Signin;
