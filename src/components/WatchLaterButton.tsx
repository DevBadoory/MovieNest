import { Tooltip } from "@chakra-ui/react";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

import { WatchLater } from "../services/auth";

const WatchLaterButton = ({
  title,
  poster,
  overview,
  id,
  date,
  type,
}: Omit<WatchLater, "userId" | "sort">) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { userId, addWatchLaterMutation, watchLater } = useAuth();

  const findMovie = watchLater?.find((m) => m.title == title);
  useEffect(() => {
    if (findMovie) setIsBookmarked(true);
  }, [findMovie]);

  const handleWatchLater = () => {
    setIsBookmarked(!isBookmarked);

    if (!userId || typeof userId !== "string") {
      return;
    }

    const sort = 0;

    addWatchLaterMutation.mutate({
      title,
      poster,
      overview,
      id,
      date,
      userId,
      sort,
      type,
    });
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
