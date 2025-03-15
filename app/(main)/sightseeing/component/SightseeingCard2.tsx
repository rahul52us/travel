'use client'
import { Box, Button, Divider, Flex, Heading, HStack, Icon, Image, Stack, Tag, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FiArrowRightCircle, FiClock, FiUser } from 'react-icons/fi';

const SightSeeingCard2 = ({ tour }) => {
    const [activeImage, setActiveImage] = useState(tour.images[0]);
    return (
      <Flex
        direction={{ base: 'column', md: 'row' }}
        bg="white"
        borderRadius="xl"
        boxShadow="md"
        overflow="hidden"
        width="full"
        transition="all 0.2s"
        _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
        maxH={{ lg: "330px" }}
        p={{ base: 2, md: 4 }}
      >
        {/* Image Gallery Section */}
        <Box flex={{ md: 1 }} position="relative">
          <Image
            src={activeImage}
            alt={tour.title}
            objectFit="cover"
            rounded={{ base: 'lg', md: 'xl' }}
            height={{ base: '250px', md: '100%' }}
            width="full"
          />

          <Flex
            position="absolute"
            bottom="2"
            left="4"
            right="4"
            p={1}
            bg="blackAlpha.600"
            backdropFilter="blur(2px)"
            borderRadius="lg"
            justifyContent="center"
            gap={2}
            flexWrap="wrap"
          >
            {tour.images.length > 0 && tour.images.map((img, index) => (
              <Box
                key={index}
                cursor="pointer"
                onClick={() => setActiveImage(img)}
                border={img === activeImage ? '2px solid' : 'none'}
                borderColor="blue.400"
                borderRadius="md"
                overflow="hidden"
                transition="all 0.3s ease-in-out"
                _hover={{ transform: 'scale(1.15)' }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  objectFit="cover"
                  height={{ base: '40px', md: '50px' }}
                  width={{ base: '40px', md: '50px' }}
                  borderRadius="md"
                />
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Content Section */}
        <Flex flex={{ md: 2 }} p={{ base: 3, md: 6 }} direction="column" gap={{ base: 3, md: 4 }}>
          <Flex justify="space-between" align="flex-start">
            <Heading as="h3" size={{ base: "sm", md: "md" }}>{tour.title}</Heading>
          </Flex>

          <HStack spacing={4} flexWrap="wrap">
            <Flex align="center">
              <Icon as={FiClock} mr={2} />
              <Text fontWeight="500" fontSize={{ base: "xs", md: "md" }}>{tour.duration}</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FiUser} mr={2} />
              <Text fontWeight="500" fontSize={{ base: "xs", md: "md" }}>Max {tour.maxGroupSize} people</Text>
            </Flex>
          </HStack>

          <Text color="gray.600" fontSize={{ base: "xs", md: "md" }} noOfLines={3}>{tour.description}</Text>

          <Stack spacing={3}>
            <Flex align="center" fontSize="sm">
              <Icon as={FiArrowRightCircle} mr={2} color="blue.500" />
            </Flex>
          </Stack>

          <Divider />

          {/* Price and Booking Form */}
          <Flex justify="space-between" align="center" flexWrap="wrap" gap={3}>
            <Box>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="800" color="blue.600">
                {tour.price}
                <Text as="span" fontSize={{ base: "sm", md: "md" }} color="gray.500" fontWeight="normal">/person</Text>
              </Text>
              <Text color="green.600" fontSize="sm">Instant Confirmation</Text>
            </Box>

            <Flex gap={3} align="center" flexWrap="wrap">
              <Tag colorScheme="green" borderRadius="full" size={{ base: 'md', md: 'lg' }}>Free Cancellation</Tag>
              <Button colorScheme="blue" px={6} size={{ base: 'sm', md: 'md' }}>Book Now</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  };

export default SightSeeingCard2;
