import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

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
        width="90%"
        maxWidth="600px"
      >
        <Heading as="h2" size="2xl" mb="4" textShadow="0 2px 4px rgba(0, 0, 0, 0.2)">
          Explore the Beauty of Switzerland
        </Heading>
        <Text fontSize="lg" mb="6">
          Discover breathtaking landscapes, charming villages, and thrilling adventures in the heart of Europe.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          _hover={{ bg: "teal.600" }}
          onClick={() => alert("Explore more clicked!")}
        >
          Explore More
        </Button>
      </Flex>
    </Box>
  );
};

export default FeaturedDestination;
