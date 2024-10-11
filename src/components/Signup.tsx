import { Box, Button, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

interface props {
  signing: () => void;
}

const SignUp = ({ signing }: props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signUpMutation, userId } = useAuth();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    signUpMutation.mutate({ username, email, password });
    setError("");

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
        Sign Up
      </Heading>
      <VStack spacing={4} as="form" mb={4} onSubmit={handleSignUp}>
        <Input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          isRequired
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired
        />
        <Input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isRequired
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          isRequired
        />

        {error && (
          <Text color="red.500" fontSize="sm">
            {error}
          </Text>
        )}

        <Button type="submit" colorScheme="blue" width="full">
          Sign Up
        </Button>
      </VStack>
      <button onClick={signing}>Already have an account</button>
    </Box>
  );
};

export default SignUp;
