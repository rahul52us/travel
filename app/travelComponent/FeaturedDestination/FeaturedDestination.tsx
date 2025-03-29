import { useState, useEffect } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { observer } from "mobx-react-lite";
import stores from "../../store/stores";
import { useRouter } from "next/navigation";
import { formatTitle } from "../../config/utils/function";

const FeaturedDestination = observer(() => {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0);
  const {destinationStore : {destination}} = stores
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destination?.data?.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [destination?.data]);

  const dest : any = destination.data[currentIndex];

  return (
    <Box position="relative" borderRadius="lg" overflow="hidden" h={"400px"}>
      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        left="2"
        right="0"
        bottom="0"
        bgImage={dest?.image?.url}
        bgPosition="center"
        bgSize="cover"
        zIndex={-1}
        h="100%"
        borderRadius={5}
      >
        {/* Dark Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%)"
        />
      </Box>

      {/* Content */}
      <Flex
        position="relative"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        flexDirection="column"
        alignItems="center"
        px={4}
        w={{ base: "90%", md: "80%", lg: "600px" }}
      >
        <Heading as="h2" size={{ base: "xl", lg: "2xl" }} mb="4">
          {formatTitle(dest?.destination)}
        </Heading>
        <Text fontSize={{ lg: "lg" }} mb="6">
          {`Discover breathtaking landscapes, charming villages, and thrilling adventures in the heart of ${formatTitle(dest?.destination)}`}
        </Text>
        <Button
          colorScheme="white"
          variant="outline"
          size={{ base: "md", lg: "lg" }}
          rightIcon={<FiArrowRight />}
          _hover={{ bg: "blackAlpha.500", color: "teal.200" }}
          onClick={() => router.push(`/destinations/${dest?.destination}`)}
        >
          Explore More
        </Button>
      </Flex>
    </Box>
  );
});

export default FeaturedDestination;