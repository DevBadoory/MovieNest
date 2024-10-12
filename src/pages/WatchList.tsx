import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import WatchLaterButton from "../components/WatchLaterButton";
import { useAuth } from "../hooks/useAuth";
import { getImageW500 } from "../services/img_path";

const WatchList = () => {
  const { watchLater, watchLaterIsLoading } = useAuth();

  return (
    <Box>
      {watchLater && !watchLaterIsLoading
        ? watchLater
            .sort((a, b) => {
              return a.sort - b.sort;
            })
            .map((w) => (
              <Flex justifyContent="space-between" mb={5} key={w.id}>
                <Flex>
                  <Image
                    height="141px"
                    maxW="94px"
                    src={getImageW500(w.poster || "")}
                  />
                  <Box ml={4}>
                    <Heading fontSize="lg">{w.title}</Heading>
                    <Text color="#6b6a6a">{w.date}</Text>
                    <Text noOfLines={2} fontSize="sm" mt={5}>
                      {w.overview}
                    </Text>
                  </Box>
                </Flex>
                <WatchLaterButton
                  title={w.title}
                  overview={w.overview}
                  poster={w.poster}
                  date={w.date}
                  id={w.id}
                  type={w.type}
                />
              </Flex>
            ))
        : ""}
    </Box>
  );
};

export default WatchList;
