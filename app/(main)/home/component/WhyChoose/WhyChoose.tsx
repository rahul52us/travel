"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Image,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";

export default function WhyChoose() {
  const textSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <VStack
      spacing={12}
      align="center"
      p={{ base: 6, md: 8 }}
      maxW="1200px"
      mx="auto"
    >
      {/* Why Choose Us Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        w="full"
        gap={{ base: 6, md: 12 }}
        py={{ base: 8, md: 12 }}
      >
        {/* Image */}
        <Box
          flex={1}
          maxH="500px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          position="relative"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Image
            src="/images/travel/whyChoose.jpg"
            alt="Why Choose Us"
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="lg"
            cursor="pointer"
          />
        </Box>

        {/* Content */}
        <VStack align="start" spacing={6} flex={1} maxW="600px">
          <Heading
            as="h2"
            size="xl"
            color="teal.500"
            fontWeight="extrabold"
            textAlign="left"
            mb={4}
          >
            Why Choose Us
          </Heading>
          <Stack spacing={6} w="full">
            <Box>
              <Heading as="h3" size="md" color="teal.500" mb={2}>
                Unparalleled Expertise
              </Heading>
              <Text
                fontSize={textSize}
                color="gray.700"
                lineHeight="1.7"
                textAlign="left"
              >
                {`With years of experience in the travel industry, we've honed our
                skills to provide you with the best possible travel experiences.
                Our team is made up of passionate travelers who understand the
                ins and outs of crafting unforgettable journeys.`}
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" color="teal.500" mb={2}>
                Personalized Service
              </Heading>
              <Text
                fontSize={textSize}
                color="gray.700"
                lineHeight="1.7"
                textAlign="left"
              >
                {`We don't believe in one-size-fits-all travel. Your trip should
                be as unique as you are. That's why we take the time to
                understand your preferences, interests, and budget to create a
                tailor-made itinerary just for you.`}
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" color="teal.500" mb={2}>
                Exclusive Access
              </Heading>
              <Text
                fontSize={textSize}
                color="gray.700"
                lineHeight="1.7"
                textAlign="left"
              >
                {`Gain access to hidden gems and exclusive experiences that only a
                local expert can provide. From off-the-beaten-path adventures to
                VIP treatment, we'll ensure your trip is nothing short of
                extraordinary.`}
              </Text>
            </Box>
          </Stack>
        </VStack>
      </Flex>
    </VStack>
  );
}