import { Box, Text } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  const { userId, signOutMutation } = useAuth();

  return (
    <Box>
      {userId ? (
        <button onClick={() => signOutMutation.mutate()}>Logout</button>
      ) : (
        <Link to="/login">
          <Text>Login</Text>
        </Link>
      )}
      <Link to="/login"></Link>
    </Box>
  );
};

export default ProfileButton;
