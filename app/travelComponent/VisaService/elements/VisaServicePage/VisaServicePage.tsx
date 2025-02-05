import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    Text,
    VStack
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import ProcessTimeline from "../ProcessSteps/ProcessSteps";

const VisaServicesPage = () => {
 
  return (
    <Box>
      {/* Intro Section */}
      {/* <Box py={20} bg={gradientBg}>
          <Container maxW="container.lg" textAlign="center">
            <Badge colorScheme="teal" fontSize="lg" mb={4} px={4} py={2} borderRadius="full">
              Your Gateway to Global Exploration
            </Badge>
            <Heading as="h1" size={headingSize} mb={6}>
              Cosmic Travel Visa Services
            </Heading>
            <Text fontSize="xl" maxW="800px" mx="auto">
              Welcome to Cosmic Travel's Visa Services, your passport to seamless international adventures. We handle the complexities of visa applications so you can focus on your journey.
            </Text>
          </Container>
        </Box> */}

      {/* Why Choose Us Section */}
      <Box>
        <FeaturesSection />
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        my={12}
        align="center"
        justify="space-between"
        w="full"
        gap={{ base: 6, md: 14 }}
        py={{ base: 6, md: 8 }}
        p={{ base: 4, md: 6 }}
        maxW="80%"
        mx="auto"
      >
        {/* Content */}
        <VStack align="start" spacing={4} flex={1} maxW="600px">
          <Heading as="h2" size="lg" color="teal.500">
            Customer Satisfaction
          </Heading>
          <Text fontSize="md" color="gray.700" lineHeight="1.7">
            {`Our priority is exceeding your expectations. We foster long-lasting relationships by delivering exceptional service and ensuring your travel aspirations become reality.`}
          </Text>
          <Text fontSize="md" color="gray.700" lineHeight="1.7">
            Your passport to seamless international adventures. We handle the
            complexities of visa applications so you can focus on your journey.
          </Text>
        </VStack>

        {/* Image */}
        <Box flex={1} maxH="500px" borderRadius="lg" overflow="hidden">
          <Image
            src="https://img.freepik.com/free-photo/happy-young-woman-holding-passport-boarding-pass-with-globe-while-standing-against-blue-background_662251-547.jpg?ga=GA1.1.1822911562.1716356990&semt=ais_hybrid"
            alt="Customer Satisfaction"
            w="100%"
            h="80%"
            objectFit="cover"
            borderRadius="2xl"
            boxShadow="lg"
          />
        </Box>
      </Flex>

      <Box>
        <ProcessTimeline />
      </Box>
      {/* CTA Section */}
      <Box
        py={20}
        bgGradient={"linear(to-b, blue.100, teal.50)"}
        color="black"
        mt={8}
      >
        <Container maxW="container.md" textAlign="center">
          <Heading mb={6} fontSize="3xl">
            Ready to Embark on Your Next Adventure?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Let us handle the logistics so you can focus on creating
            unforgettable memories.
          </Text>
          <Button
            size="lg"
            colorScheme="whiteAlpha"
            rightIcon={<FaPaperPlane />}
            as={Link}
            href="/contact"
          >
            Start Your Visa Application
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

// Reusable Components

export default VisaServicesPage;
