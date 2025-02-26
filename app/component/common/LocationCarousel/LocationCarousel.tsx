import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CustomSubHeading from "../../../travelComponent/common/CustomSubHeading/CustomSubHeading";

const locations = [
  {
    image:
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXVyb3BlfGVufDB8fDB8fHwy",
    title: "Europe",
    trips: "5+ Trips Available",
    text:"Discover the rich history, stunning architecture, and diverse cultures of Europe. From the romantic streets of Paris to the ancient ruins of Rome, Europe offers something for every traveler."
  },
  {
    image:
      "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlfGVufDB8fDB8fHwy",
    title: "Singapore",
    trips: "7+ Trips Available",
    text:"Immerse yourself in the futuristic cityscape, lush gardens, and vibrant street food scene of Singapore. A melting pot of cultures and a hub of innovation."
  },
  {
    image:
      "https://images.unsplash.com/photo-1626308888778-2b77082d53b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGF5c2lhJTIwYmVhY2hlc3xlbnwwfDB8MHx8fDI%3D",
    title: "Malaysia",
    trips: "10+ Trips Available",
    text:"Explore the tropical rainforests, pristine beaches, and bustling cities of Malaysia. A perfect blend of natural beauty and cultural diversity."
  },
  {
    image:
      "https://images.unsplash.com/photo-1596879857570-7b6b9018bcb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoYWlsYW5kfGVufDB8MHwwfHx8Mg%3D%3D",
    title: "Thailand",
    trips: "8+ Trips Available",
    text:"Experience the vibrant nightlife, serene temples, and stunning islands of Thailand. A destination that offers both adventure and relaxation."
  },
  {
    image:
      "https://images.unsplash.com/photo-1489516408517-0c0a15662682?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RHViYWl8ZW58MHwwfDB8fHwy",
    title: "Dubai",
    trips: "8+ Trips Available",
    text:"Indulge in the luxury, modern marvels, and desert adventures of Dubai. From towering skyscrapers to golden sand dunes, Dubai is a city of contrasts."
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
    <Box py={6} my={{ base: "2rem", md: "6rem" }} px={{ base: 4, md: 2 }} maxW="95%" mx="auto">
      <CustomSubHeading highlightText="Boundaries !!">Travel Beyond </CustomSubHeading>
      <Text textAlign={'center'} maxW={'80%'} color={'gray.500'} mx={'auto'}>From hidden gems to iconic wonders, find the perfect destination to fuel your wanderlust and create unforgettable memories.</Text>
      <Flex gap={8} direction={{ base: "column", md: "row" }} mt={12}>
        {/* Image Gallery */}
        <Flex flex={2} gap={{ base: 4, md: 4 }} direction={{ base: "column", md: "row" }}>
          {locations.map((location, index) => (
            <Box
              key={index}
              w={{ base: "100%", md: activeIndex === index ? "50%" : "120px" }}
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