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
        maxH={{lg:"330px"}}
      >
        {/* Image Gallery Section */}
        <Box flex={{ md: 1 }} position="relative">
          <Image
            src={activeImage}
            alt={tour.title}
            objectFit="cover"
            rounded={'xl'}
            height={{ base: '300px', md: '100%' }}
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
                                height="50px"
                                width="50px"
                                borderRadius="md"
                            />
                        </Box>
                    ))}
                </Flex>
        </Box>
  
        {/* Content Section */}
        <Flex flex={{ md: 2 }} p={6} direction="column" gap={4}>
          <Flex justify="space-between" align="flex-start">
            <Heading as="h3" size="md">{tour.title}</Heading>
          </Flex>
  
          <HStack spacing={4}>
            <Flex align="center">
              <Icon as={FiClock} mr={2} />
              <Text fontWeight="500">{tour.duration}</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FiUser} mr={2} />
              <Text fontWeight="500">Max {tour.maxGroupSize} people</Text>
            </Flex>
          </HStack>
  
          <Text color="gray.600" noOfLines={3}>{tour.description}</Text>
  
          <Stack spacing={3}>
            <Flex align="center" fontSize="sm">
              <Icon as={FiArrowRightCircle} mr={2} color="blue.500" />
              {/* <Text fontWeight="500">Includes: {tour.includes.join(', ')}</Text> */}
            </Flex>
          </Stack>
  
          <Divider />
  
          {/* Price and Booking Form */}
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontSize="2xl" fontWeight="800" color="blue.600">
                {tour.price}
                <Text as="span" fontSize="md" color="gray.500" fontWeight="normal">/person</Text>
              </Text>
              <Text color="green.600" fontSize="sm">Instant Confirmation</Text>
            </Box>
  
            <Flex gap={3} align="center">
            <Tag colorScheme="green" borderRadius="full"  size={'lg'}>Free Cancellation</Tag>
             
              <Button colorScheme="blue" px={6} >Book Now</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  export default SightSeeingCard2;