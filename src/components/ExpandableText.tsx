import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface props {
  children: string | undefined;
}

const ExpandableText = ({ children }: props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) return null;

  return (
    <Box>
      <Text noOfLines={isExpanded ? undefined : 3}>{children}</Text>
      {children?.length > 400 && (
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          padding={2} // using 4 for a more noticeable padding
          mt={2}
          colorScheme="blue"
          size="md"
        >
          {isExpanded ? "Read Less" : "Read More"}
          <FaArrowRight style={{ marginLeft: "8px" }} />
        </Button>
      )}
    </Box>
  );
};

export default ExpandableText;
