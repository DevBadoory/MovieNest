import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  backdropPath: string | undefined;
  children: ReactNode;
}

const BackdropSection = ({ backdropPath, children }: Props) => (
  <Box
    position="relative"
    backgroundImage={`url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdropPath})`}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    height="100%"
    width="100%"
    borderRadius="md"
    boxShadow="lg"
    padding="2rem"
  >
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundImage="linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.75) 80%, rgba(0, 0, 0, 0.6) 1000%)"
      borderRadius="md"
      zIndex="1"
    />
    <Box position="relative" zIndex="2" color="#fff">
      {children}
    </Box>
  </Box>
);

export default BackdropSection;
