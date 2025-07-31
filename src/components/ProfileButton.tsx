import {
  Button,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SkeletonText,
} from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  const {
    signOutMutation,
    deleteUserMutation,
    userId,
    username,
    usernamesIsLoading,
  } = useAuth();

  if (!userId && !usernamesIsLoading)
    return (
      <Link to="/login">
        <Text>Login</Text>
      </Link>
    );
  return (
    <Menu>
      <MenuButton ml={4} bg="none" as={Button} zIndex="10000" padding={3}>
        {usernamesIsLoading ? (
          <SkeletonText noOfLines={1} width={5} />
        ) : (
          <Flex gap={1.5}>
            <FontAwesomeIcon icon={faUser} size="lg" />
            <Text fontSize="xl">{username}</Text>
          </Flex>
        )}
      </MenuButton>
      <MenuList zIndex="10000">
        <Link to="watchlist">
          <MenuItem>Your watchlist</MenuItem>
        </Link>
        <MenuItem onClick={() => signOutMutation.mutate()}>Sign out</MenuItem>
        <MenuItem color="red.500" onClick={() => deleteUserMutation.mutate()}>
          Delete Account
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileButton;
