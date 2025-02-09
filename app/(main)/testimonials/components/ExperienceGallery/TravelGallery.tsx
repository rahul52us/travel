import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const travelData = [
  { id: 1, name: "Travel Memory #1", imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
  { id: 2, name: "Travel Memory #2", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" },
  { id: 3, name: "Travel Memory #3", imageUrl: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
  { id: 4, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" },
  { id: 6, name: "Travel Memory #3", imageUrl: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
  { id: 7, name: "Travel Memory #1", imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
  { id: 8, name: "Travel Memory #3", imageUrl: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
  { id: 9, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" },
  // Add more as needed
];

const TravelGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Start fading out
        setOpacity(0);
  
        // After the fade-out transition is complete, update the index and fade in
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 4) % travelData.length);
          setOpacity(1); // Fade in the new images
        }, 1000); // Wait for the fade-out transition to complete (0.5s)
      }, 5000); // Change images every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <Box>
        <Heading fontSize="3xl" mb={8}>
          Travel Moments
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {travelData.slice(currentIndex, currentIndex + 4).map((item, index) => (
            <Box
              key={index}
              h="200px"
              bgImage={item.imageUrl}
              bgSize="cover"
              bgPosition="center"
              borderRadius="xl"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                inset: 0,
                bg: 'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'
              }}
              transition="all 1s ease-in-out"
              opacity={opacity}
            >
              <Text
                position="absolute"
                bottom={4}
                left={4}
                color="white"
                fontWeight="bold"
                fontSize="lg"
              >
                {item.name}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    );
  };

export default TravelGallery;