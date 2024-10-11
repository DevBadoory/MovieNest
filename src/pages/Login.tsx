import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Signup from "../components/Signup";

const Login = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);

  const signing = () => {
    setIsSigningIn(!isSigningIn);
  };

  return (
    <Box>
      <Signup signing={signing} />
    </Box>
  );
};

export default Login;
