'use client'
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
  Link,
  Stack,
} from '@chakra-ui/react';

export default function FirstSection() {
  return (
    <Box bg="gray.50" minH="100vh">
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, #6A1B9A, #8E24AA)"
        color="white"
        py={16}
        px={8}
        textAlign="center"
      >
        <Heading as="h1" size="2xl" mb={4}>
          Discover Stunning Paintings
        </Heading>
        <Text fontSize="lg" mb={8}>
          Explore a world of creativity and art crafted by talented artists.
        </Text>
        <Button
          colorScheme="purple"
          size="lg"
          bg="white"
          color="purple.700"
          _hover={{ bg: 'purple.100' }}
        >
          Browse Paintings
        </Button>
      </Box>

      {/* Featured Paintings */}
      <Box py={12} px={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Featured Paintings
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          {Array.from({ length: 6 }).map((_, index) => (
            <GridItem key={index}>
              <Box
                bg="white"
                shadow="lg"
                borderRadius="lg"
                overflow="hidden"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.05)' }}
              >
                <Image
                  src={`https://source.unsplash.com/random/300x300?art,painting,${index}`}
                  alt={`Painting ${index + 1}`}
                />
                <Box p={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    Painting Title {index + 1}
                  </Text>
                  <Text color="gray.600" mt={2}>
                    By Artist {index + 1}
                  </Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* About Section */}
      <Box py={12} px={8} bg="purple.50">
        <Flex
          maxW="6xl"
          mx="auto"
          align="center"
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box flex="1" mr={{ md: 8 }} textAlign={{ base: 'center', md: 'left' }}>
            <Heading as="h2" size="lg" mb={4} color="purple.700">
              About Us
            </Heading>
            <Text fontSize="md" color="gray.700" mb={4}>
              Our mission is to connect art enthusiasts with talented artists from
              around the globe. Whether you're looking for a unique piece to adorn
              your walls or an inspiring gift, you'll find it here.
            </Text>
            <Button colorScheme="purple" size="md">
              Learn More
            </Button>
          </Box>
          <Image
            src="https://source.unsplash.com/500x300?painting,abstract"
            alt="About Art"
            borderRadius="lg"
            boxShadow="md"
            maxW={{ base: '100%', md: '50%' }}
          />
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={8}>
        <Flex
          maxW="6xl"
          mx="auto"
          align="center"
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Box>
            <Heading as="h3" size="sm" mb={4}>
              Painting Marketplace
            </Heading>
            <Text fontSize="sm" color="gray.400">
              © {new Date().getFullYear()} All Rights Reserved.
            </Text>
          </Box>
          <Stack direction="row" spacing={4} mt={{ base: 4, md: 0 }}>
            <Link href="#" fontSize="sm">
              Privacy Policy
            </Link>
            <Link href="#" fontSize="sm">
              Terms of Service
            </Link>
            <Link href="#" fontSize="sm">
              Contact Us
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
