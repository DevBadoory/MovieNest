import { Tooltip } from "@chakra-ui/react";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const WatchLaterButton = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { userId } = useAuth();

  const handleWatchLater = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <Tooltip
      hasArrow
      label={userId ? "Watch later" : "sign in to add it to your watch list"}
      bg="gray.300"
      color="black"
    >
      <FontAwesomeIcon
        icon={isBookmarked ? faBookmark : faBookmarkRegular}
        size="xl"
        cursor="pointer"
        onClick={handleWatchLater}
      />
    </Tooltip>
  );
};

export default WatchLaterButton;
