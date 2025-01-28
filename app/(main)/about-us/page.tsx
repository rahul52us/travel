"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Divider,
  Flex,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Motion Components for Animation
const MotionBox = motion(Box);

export default function AboutPage() {
  // Responsive text size
  const textSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <VStack
      spacing={8}
      align="center"
      p={{ base: 4, md: 6 }}
      maxW="1200px"
      mx="auto"
    >
      {/* Hero Section */}
      <MotionBox
        textAlign="center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        p={6}
        w="full"
      >
        <Heading as="h1" size="2xl" color="teal.500" mb={4} fontWeight="bold">
          About Us
        </Heading>
        <Text
          fontSize={textSize}
          color="gray.700"
          maxW="800px"
          mx="auto"
          mb={6}
        >
          {`Welcome to Cosmic Travel, your gateway to Europe's most breathtaking wonders.
          We specialize in curating extraordinary travel experiences that immerse you
          in the rich cultures, diverse landscapes, and timeless histories of this magical continent.`}
        </Text>
      </MotionBox>

      {/* Mission Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        w="full"
        gap={{ base: 6, md: 10 }}
        py={{ base: 6, md: 8 }}
      >
        {/* Content */}
        <VStack align="start" spacing={4} flex={1} maxW="600px">
          <Heading as="h2" size="lg" color="teal.500">
            Our Mission
          </Heading>
          <Text fontSize="md" color="gray.700" lineHeight="1.7">
            {`At Cosmic Travel, we aim to create unforgettable memories by designing
            journeys that are personalized, sustainable, and deeply meaningful.
            Our passion is to connect people with Europe's hidden treasures while
            fostering a love for its unique heritage and culture.`}
          </Text>
          <Button colorScheme="teal" size="md" mt={4} variant="outline">
            Learn More About Our Vision
          </Button>
        </VStack>

        {/* Image */}
        <Box flex={1} maxH="500px" borderRadius="lg" overflow="hidden">
          <Image
            src="/images/travel/about-1.jpg"
            alt="Cosmic Travel Mission"
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="lg"
            boxShadow="lg"
          />
        </Box>
      </Flex>

      <Divider borderColor="teal.200" w="full" />

      {/* What Sets Us Apart Section */}
      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        align="center"
        justify="space-between"
        w="full"
        gap={{ base: 6, md: 10 }}
        py={{ base: 6, md: 8 }}
      >
        {/* Content */}
        <VStack align="start" spacing={4} flex={1} maxW="600px">
          <Heading as="h2" size="lg" color="teal.500">
            What Sets Us Apart
          </Heading>
          <Text fontSize="md" color="gray.700" lineHeight="1.7">
            {`We go beyond standard travel itineraries. Our team of local experts and
            passionate travel planners are dedicated to providing experiences that resonate
            with your unique interests, offering a deep dive into Europe’s culture,
            history, and natural beauty.`}
          </Text>
          <Text fontSize="md" color="gray.700" lineHeight="1.7">
            From exclusive guided tours to hidden gems off the beaten path, we
            ensure every journey with us feels exceptional.
          </Text>
        </VStack>

        {/* Image */}
        <Box flex={1} maxH="500px" borderRadius="lg" overflow="hidden">
          <Image
            src="/images/travel/about-2.jpg"
            alt="What Sets Us Apart"
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="lg"
            boxShadow="lg"
          />
        </Box>
      </Flex>

      <Divider borderColor="teal.200" w="full" />

      {/* Our Services Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        w="full"
        gap={{ base: 6, md: 10 }}
        py={{ base: 6, md: 8 }}
      >
        {/* Content */}
        <VStack align="start" spacing={4} flex={1} maxW="600px">
          <Heading as="h2" size="lg" color="teal.500">
            Our Services
          </Heading>
          <Text fontSize="md" color="gray.700" lineHeight="1.7">
            {`Whether you’re looking for a romantic escape to Europe's serene countryside,
            an adventurous family holiday, or a luxury cultural experience in iconic cities,
            we’ve got you covered. Our tailor-made services are designed to meet your needs.`}
          </Text>
          <Text fontSize="md" color="gray.700" lineHeight="1.7">
            {`With Cosmic Travel, you’ll have access to world-class accommodations,
            experienced guides, and seamless travel planning that lets you focus on making memories.`}
          </Text>
          <Button colorScheme="teal" size="md" mt={4} variant="outline">
            Explore Our Services
          </Button>
        </VStack>

        {/* Image */}
        <Box flex={1} maxH="500px" borderRadius="lg" overflow="hidden">
          <Image
            src="/images/travel/about-3.jpg"
            alt="Our Services"
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="lg"
            boxShadow="lg"
          />
        </Box>
      </Flex>

      <Divider borderColor="teal.200" w="full" />

      {/* Call to Action Section */}
      <VStack
        spacing={6}
        align="center"
        textAlign="center"
        py={{ base: 6, md: 8 }}
      >
        <Heading as="h3" size="lg" color="teal.500">
          Ready to Start Your European Journey?
        </Heading>
        <Text fontSize="md" color="gray.700" maxW="800px">
          {`Let Cosmic Travel take the stress out of planning and guide you through Europe’s
          timeless wonders. Your adventure of a lifetime is just a click away.`}
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          rightIcon={<FiArrowRight />}
          _hover={{ bg: "teal.600", color: "white" }}
        >
          Contact Us Today
        </Button>
      </VStack>
    </VStack>
  );
}
