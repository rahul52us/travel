import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const FeaturedDestination = () => {
  return (
    <Box
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      height="400px"
      marginBottom="40px"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
        alt="Featured Destination"
        objectFit="cover"
        width="100%"
        height="100%"
        opacity="0.9"
      />

      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%)"
      />

      {/* Content */}
      <Flex
        position="absolute"
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
        <Heading as="h2" size="2xl" mb="4" textShadow={"0 2px 4px rgba(0, 0, 0, 0.2)"}>
          Explore the Beauty of Switzerland
        </Heading>
        <Text fontSize="lg" mb="6">
          Discover breathtaking landscapes, charming villages, and thrilling
          adventures in the heart of Europe.
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