import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function TravelpackagesCard({ packages }:any){
  return (
    <Box
      maxW="sm"
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Image src={packages.image} alt={packages.name} h={200} objectFit="cover" />
      <Box p={6}>
        <Heading size="md" mb={2}>{packages.name}</Heading>
        <Text color="gray.500" fontSize="4xl" fontWeight="bold" mb={4}>
          ₹{packages.price.toLocaleString()}
        </Text>
        <Flex justify="space-between" align="center" mb={4}>
          <Text>{packages.nights} Nights / {packages.days} Days</Text>
          <Text>{packages.destinations}</Text>
        </Flex>
        <Button colorScheme="blue" variant="solid" w="full">
          Book Now
        </Button>
      </Box>
    </Box>
  );
};
