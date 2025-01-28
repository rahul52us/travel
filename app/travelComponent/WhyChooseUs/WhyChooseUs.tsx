import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCompass, FaHandshake, FaLockOpen } from "react-icons/fa";
import HeadingSection from "../../component/common/headingSection/HeadingSection";

const MotionFlex = motion(Flex);

const WhyChooseUs = () => {
  const overlayColor = useColorModeValue("rgba(0,0,0,0.3)", "rgba(0,0,0,0.6)");

  const features = [
    {
      icon: FaCompass,
      title: "Unparalleled Expertise",
      text: "Decades of travel industry experience crafting unforgettable journeys through our global network of travel experts.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    },
    {
      icon: FaHandshake,
      title: "Personalized Service",
      text: "Tailor-made itineraries designed around your unique preferences, interests, and travel style.",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
    },
    {
      icon: FaLockOpen,
      title: "Exclusive Access",
      text: "VIP experiences and hidden gems unavailable to regular travelers, curated by our local insiders.",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    },
  ];

  return (
    <Box
      position="relative"
      overflow="hidden"
      py={28}
      px={{ base: 4, md: 8, lg: 16 }}
      maxW={"90%"}
      mx={"auto"}
      //   bg={bgColor}
    >
      <Box position="relative" zIndex="1" textAlign="center" mb={16}>
        <HeadingSection
          title="WHY CHOOSE US"
          subtitle="Crafting Extraordinary Journeys"
        />
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        gap={8}
        position="relative"
        zIndex="1"
      >
        {features.map((feature, index) => (
          <MotionFlex
            key={index}
            position="relative"
            w={{ base: "100%", md: "100%" }}
            h="420px"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring" }}
            cursor="pointer"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              objectFit="cover"
              w="100%"
              h="100%"
              filter="auto"
              brightness="0.8"
            />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              p={6}
              bgGradient={`linear(to-t, ${overlayColor}, transparent)`}
            >
              <Icon
                as={feature.icon}
                w={8}
                h={8}
                color="white"
                mb={4}
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
              />
              <Heading
                as="h3"
                //   size="lg"
                fontSize={{ base: "20px", md: "28px" }}
                color="white"
                mb={3}
                textShadow="0 2px 4px rgba(0,0,0,0.3)"
              >
                {feature.title}
              </Heading>
              <Text
                color="whiteAlpha.900"
                fontSize="lg"
                textShadow="0 1px 2px rgba(0,0,0,0.3)"
              >
                {feature.text}
              </Text>
            </Box>
          </MotionFlex>
        ))}
      </Flex>
      <Box mt={12} textAlign="center">
        <Text
          fontSize="sm"
          color={useColorModeValue("gray.600", "gray.300")}
          letterSpacing="1px"
        >
          Trusted by over 500,000 travelers worldwide
        </Text>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
