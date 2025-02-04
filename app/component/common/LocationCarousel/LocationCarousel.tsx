import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const locations = [
  {
    image:
      "https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestic-mountain-peaks-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Nepal",
    trips: "3+ Trips",
    text: "Rapidiously simplify covalent leadership whereas distributed results. Rapidiously simplify covalent leadership whereas distributed results.",
  },
  {
    image:
      "https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestic-mountain-peaks-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Amsterdam",
    trips: "3+ Trips",
    text: "Rapidiously simplify covalent leadership whereas distributed results.",
  },
  {
    image:
      "https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestic-mountain-peaks-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Uuuu",
    trips: "3+ Trips",
    text: "Rapidiously simplify covalent leadership whereas distributed results.",
  },
  {
    image:
      "https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestic-mountain-peaks-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Paris",
    trips: "3+ Trips",
    text: "Rapidiously simplify covalent leadership whereas distributed results.",
  },
];

const progress = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const fadeInOut = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
};

const LocationCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % locations.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <Flex
      gap={8}
      p={8}
      maxW="95%"
      mx="auto"
      direction={{ base: "column", md: "row" }}
    >
      {/* Image Gallery */}
      <Flex
        flex={2}
        gap={6}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {locations.map((location, index) => (
          <Box
            key={index}
            w={activeIndex === index ? "50%" : "150px"}
            h={"320px"}
            bgImage={location.image}
            bgSize="cover"
            bgPosition="center"
            borderRadius="lg"
            cursor="pointer"
            transition="all 0.4s ease"
            transform={activeIndex === index ? "scale(1.05)" : "scale(1)"}
            position="relative"
            filter={activeIndex === index ? "brightness(1)" : "brightness(0.8)"}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {/* Show title on inactive images */}
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
                  {location.title}
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
      <Flex flex={1} direction="column" justify="center">
        {/* <Text>Where Will You Go Next?</Text> */}
        <motion.div
          key={activeIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeInOut}
        >
          <Heading fontSize="2xl" mb={2}>
            {locations[activeIndex].title}
          </Heading>

          <Text fontSize="md" mb={4} color={"gray.600"}>
            {locations[activeIndex].text}
          </Text>
        </motion.div>
        <Flex align="center" gap={4}>
          <Text fontWeight="bold">{locations[activeIndex].trips}</Text>
          <Box
            as="button"
            px={6}
            py={2}
            bg="black"
            color="white"
            borderRadius="full"
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.5s ease"
          >
            EXPLORE ALL
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LocationCarousel;
