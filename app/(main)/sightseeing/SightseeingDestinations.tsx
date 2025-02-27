'use client'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import CustomSubHeading from '../../travelComponent/common/CustomSubHeading/CustomSubHeading';
import { useRouter } from 'next/navigation';

const locations = [
  {
    city: 'Rome',
    country: 'Italy',
    destination:"central-europe",
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    description: 'The Eternal City, home to ancient ruins and Renaissance art'
  },
  {
    city: 'Florence',
    country: 'Italy',
    destination:"central-europe",
    image: 'https://images.unsplash.com/photo-1543429258-cc721a300e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmVuY2V8ZW58MHwxfDB8fHwy',
    description: 'Cradle of the Renaissance, famous for its art and architecture'
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    destination:"western-europe",
    image: 'https://images.unsplash.com/photo-1604999804186-202fb601fa93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtc3RlcmRhbXxlbnwwfDF8MHx8fDI%3D',
    description: 'Venice of the North with iconic canals and historic houses'
  },
  {
    city: 'Paris',
    country: 'France',
    destination:"western-europe",
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
    description: 'City of Lights, renowned for its art, fashion, and cuisine'
  },
  {
    city: 'Athens',
    country: 'Greece',
    destination:"western-europe",
    image: 'https://images.unsplash.com/photo-1590068642752-2b94b7919670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF0aGVuc3xlbnwwfDF8MHx8fDI%3D',
    description: 'Birthplace of democracy, crowned by the iconic Acropolis'
  },
  {
    city: 'London',
    country: 'England',
    destination:"western-europe",
    image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    description: 'Historic metropolis blending tradition and modernity'
  },
];

const Destinations = () => {
  const router = useRouter()
  return (
    <Box p={{ base: 4, md: 8 }} maxW="7xl" mx="auto">
      <CustomSubHeading highlightText='Destinations'>
        Explore Top Sightseeing
      </CustomSubHeading>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)', // 1 column on mobile
          sm: 'repeat(2, 1fr)',   // 2 columns on small screens (tablet)
          lg: 'repeat(3, 1fr)',   // 3 columns on large screens (desktop)
        }}
        gap={{ base: 4, md: 8 }} // Adjust gap for mobile and larger screens
        mt={8}
      >
        {locations.map((location, index) => (
          <GridItem
            key={index}
            position="relative"
            borderRadius="xl"
            overflow="hidden"
            cursor="pointer"
            _hover={{
              transform: 'scale(1.05)',
            }}
            transition="transform 0.3s ease"
            onClick={() => router.push(`sightseeing/${location.destination}`)}
          >
            <Image
              src={location.image}
              alt={`${location.city} view`}
              h={{ base: '300px', md: '440px' }} // Adjust height for mobile and larger screens
              w="100%"
              objectFit="cover"
            />

            <Flex
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              p={{ base: 4, md: 6 }} // Adjust padding for mobile and larger screens
              bgGradient="linear(to-b, transparent, blackAlpha.600, rgba(0, 0, 0, 0.7))"
              direction="column"
              alignItems="flex-start"
            >
              <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="white">
                {location.city}
              </Text>
              <Text fontSize={{ base: 'md', md: 'md' }} color="white" opacity={0.9} mb={2}>
                {location.country}
              </Text>
              <Text fontSize={{ base: 'sm', md: 'sm' }} color="white" noOfLines={2}>
                {location.description}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Destinations;