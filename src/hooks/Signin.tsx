import { Box, Button, Heading, Input, VStack } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

interface props {
  signing: () => void;
}

const Signin = ({ signing }: props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
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

        <Button type="submit" colorScheme="blue" width="full">
          Sign In
        </Button>
      </VStack>
      <button onClick={signing}>Create an account</button>
    </Box>
  );
};

export default Signin;
