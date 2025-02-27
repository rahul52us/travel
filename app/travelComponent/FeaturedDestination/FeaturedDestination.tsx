import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const FeaturedDestination = () => {
  return (
    <Box position="relative" borderRadius="lg" overflow="hidden" marginBottom="0px" h={'400px'}>
      {/* Background Image with Fixed Position */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
        bgPosition="center"
        bgSize="cover"
        bgAttachment="fixed"
        zIndex={-1}
        h={'400px'}
      >
        {/* Overlay with Dark Gradient */}
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
        width={{lg:"90%"}}
        maxWidth={{base:"95%",lg:"600px"}}
      >
        <Heading as="h2" size={{base:"xl",lg:"2xl"}} mb="4" textShadow="0 2px 4px rgba(0, 0, 0, 0.2)">
          Explore the Beauty of Switzerland
        </Heading>
        <Text fontSize={{lg:"lg"}} mb="6">
          Discover breathtaking landscapes, charming villages, and thrilling adventures in the heart of Europe.
        </Text>
        <Button
          // colorScheme="teal"
                  colorScheme="white"
                  variant="outline"
                  size={{ base: "md", lg: "lg" }}
                  rightIcon={<FiArrowRight />}
                  _hover={{ bg: "blackAlpha.500", color: "teal.200" }}
        >
          Explore More
        </Button>
      </Flex>
    </Box>
  );
};

export default FeaturedDestination;
