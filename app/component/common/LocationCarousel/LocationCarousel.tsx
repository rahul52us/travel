import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CustomSubHeading from "../../../travelComponent/common/CustomSubHeading/CustomSubHeading";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { formatTitle } from "../../../config/utils/function";

const progress = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const fadeInOut = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
};

const getRandomLocations = (locations: any[], count: number) => {
  if (!locations || locations.length === 0) return [];
  const shuffled = [...locations];

  // Fisher-Yates shuffle to pick random locations
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
};

const LocationCarousel = observer(({ locations }: { locations: any[] }) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [randomLocations, setRandomLocations] = useState<any[]>([]);

  useEffect(() => {
    if (locations?.length > 0) {
      setRandomLocations(getRandomLocations(locations, 5));
    }
  }, [locations]);

  useEffect(() => {
    if (randomLocations.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % randomLocations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [randomLocations.length]);

  if (randomLocations.length === 0) {
    return <Text textAlign="center">No locations available</Text>;
  }

  return (
    <Box py={6} my={{ base: "2rem", md: "6rem" }} px={{ base: 4, md: 2 }} maxW="95%" mx="auto">
      <CustomSubHeading highlightText="Boundaries !!">Travel Beyond</CustomSubHeading>
      <Text textAlign={"center"} maxW={"80%"} color={"gray.500"} mx={"auto"}>
        From hidden gems to iconic wonders, find the perfect destination to fuel your wanderlust and create unforgettable memories.
      </Text>
      <Flex gap={8} direction={{ base: "column", md: "row" }} mt={12}>
        {/* Image Gallery */}
        <Flex flex={2} gap={{ base: 4, md: 4 }} direction={{ base: "column", md: "row" }}>
          {randomLocations.map((location, index) => (
            <Box
              key={location._id}
              w={{ base: "100%", md: activeIndex === index ? "50%" : "120px" }}
              h={{ base: "250px", md: "320px" }}
              bgImage={`url(${location.image?.url})`}
              bgSize="cover"
              bgPosition="center"
              borderRadius="lg"
              cursor="pointer"
              transition="all 0.4s ease"
              transform={activeIndex === index ? "scale(1.05)" : "scale(1)"}
              position="relative"
              filter={activeIndex === index ? "brightness(1)" : "brightness(0.8)"}
              onMouseEnter={() => setActiveIndex(index)}
              display={{ base: activeIndex === index ? "block" : "none", md: "block" }}
            >
              {activeIndex !== index && (
                <Flex
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="rgba(0, 0, 0, 0.4)"
                  color="white"
                  justify="center"
                  align="center"
                  borderRadius="lg"
                >
                  <Text fontWeight="bold" fontSize="lg">
                    {formatTitle(location.destination)}
                  </Text>
                </Flex>
              )}
              {/* Progress Bar */}
              {activeIndex === index && (
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  h="4px"
                  bg="white"
                  animation={`${progress} 5s linear`}
                />
              )}
            </Box>
          ))}
        </Flex>

        {/* Content */}
        <Flex flex={1} direction="column" justify="center" mt={{ base: 6, md: 0 }}>
          <motion.div
            key={activeIndex} // Force re-render when activeIndex changes
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInOut}
          >
            <Heading fontSize={{ base: "xl", md: "2xl" }} mb={2} color="gray.700">
              {formatTitle(randomLocations[activeIndex].destination)}
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }} mb={4} color={"gray.600"}>
              {randomLocations[activeIndex].description}
            </Text>
          </motion.div>
          <Flex align="center" gap={4}>
            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} color="gray.800">
              {randomLocations[activeIndex].days} Days | {randomLocations[activeIndex].trips || "Multiple Trips Available"}
            </Text>
            <Box
              as="button"
              px={{ base: 4, md: 6 }}
              py={{ base: 1, md: 2 }}
              bg="black"
              color="white"
              borderRadius="full"
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.5s ease"
              fontSize={{ base: "sm", md: "md" }}
              onClick={() => router.push(`/destinations/${randomLocations[activeIndex].destination}`)}
            >
              EXPLORE ALL
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
});

export default LocationCarousel;
