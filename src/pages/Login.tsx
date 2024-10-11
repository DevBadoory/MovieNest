import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Signup from "../components/Signup";
import Signin from "../hooks/Signin";

const Login = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const signing = () => {
    setIsSigningIn(!isSigningIn);
  };

  return (
    <Box>
      {isSigningIn ? (
        <Signin signing={signing} />
      ) : (
        <Signup signing={signing} />
      )}
    </Box>
  );
};

export default Login;
