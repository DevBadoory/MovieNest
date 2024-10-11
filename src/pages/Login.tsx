import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Signup from "../components/Signup";
import Signin from "../hooks/Signin";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      navigate("/");
    }
  }, [userId]);

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
