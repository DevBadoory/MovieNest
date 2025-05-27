import { IconButton } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RefObject } from "react";

interface ScrollButtonProps {
  direction: "left" | "right";
  scrollRef: RefObject<HTMLElement>;
  top?: string;
}

const ScrollButton = ({
  direction,
  scrollRef,
  top = "37%",
}: ScrollButtonProps) => {
  const isLeft = direction === "left";
  const Icon = isLeft ? BsChevronLeft : BsChevronRight;

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.7;
      container.scrollBy({
        left: isLeft ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <IconButton
      aria-label={`Scroll ${direction}`}
      icon={<Icon />}
      onClick={handleScroll}
      position="absolute"
      top={top}
      zIndex="2"
      bg="white"
      color="gray.700"
      borderRadius="10px"
      boxShadow="md"
      variant="solid"
      size="sm"
      fontSize="1.25rem"
      transform="translateY(-50%)"
      {...(isLeft ? { left: "0.5rem" } : { right: "0.5rem" })}
      _hover={{ bg: "whiteAlpha.800" }}
      _active={{ bg: "whiteAlpha.900" }}
      _focus={{ boxShadow: "outline" }}
    />
  );
};

export default ScrollButton;
