import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const locations = [
  {
    image:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Nepal",
    trips: "5+ Trips Available",
    text: "Explore the breathtaking Himalayas, ancient temples, and vibrant culture of Nepal. A perfect destination for adventure seekers and nature lovers alike.",
  },
  {
    image:
      "https://images.pexels.com/photos/358528/pexels-photo-358528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Amsterdam",
    trips: "7+ Trips Available",
    text: "Experience the charm of Amsterdam with its iconic canals, world-class museums, and lively atmosphere. A perfect mix of history and modernity.",
  },
  {
    image:
      "https://media.istockphoto.com/id/827065008/photo/holy-town-varanasi-and-the-river-ganges.jpg?s=2048x2048&w=is&k=20&c=aagij0PmM8L3ak7GWbUnqLq98ZnKVTVNq74RwwS3C-c=",
    title: "India",
    trips: "10+ Trips Available",
    text: "From the majestic Taj Mahal to the serene backwaters of Kerala, India offers a diverse and vibrant travel experience like no other.",
  },
  {
    image:
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Paris",
    trips: "8+ Trips Available",
    text: "The city of love awaits! Discover the Eiffel Tower, exquisite cuisine, and timeless art in one of the most romantic destinations in the world.",
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

  // Automatically change the active index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % locations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box py={8} my={{ base: "2rem", md: "6rem" }} px={{ base: 4, md: 8 }} maxW="95%" mx="auto">
      <Flex gap={8} direction={{ base: "column", md: "row" }} mt={12}>
        {/* Image Gallery */}
        <Flex flex={2} gap={{ base: 4, md: 6 }} direction={{ base: "column", md: "row" }}>
          {locations.map((location, index) => (
            <Box
              key={index}
              w={{ base: "100%", md: activeIndex === index ? "50%" : "150px" }}
              h={{ base: "250px", md: "320px" }}
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
              display={{ base: activeIndex === index ? "block" : "none", md: "block" }} // Only show active image on mobile
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
        <Flex flex={1} direction="column" justify="center" mt={{ base: 6, md: 0 }}>
          <motion.div
            key={activeIndex} // Force re-render when activeIndex changes
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInOut}
          >
            <Heading fontSize={{ base: "xl", md: "2xl" }} mb={2} color="gray.700">
              {locations[activeIndex].title}
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }} mb={4} color={"gray.600"}>
              {locations[activeIndex].text}
            </Text>
          </motion.div>
          <Flex align="center" gap={4}>
            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} color="gray.800">
              {locations[activeIndex].trips}
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
            >
              EXPLORE ALL
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LocationCarousel;