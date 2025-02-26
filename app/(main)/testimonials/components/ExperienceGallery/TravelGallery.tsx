import { Box, Grid, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const travelData = [
  { id: 1, name: "Travel Memory #1", imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
  { id: 2, name: "Travel Memory #3", imageUrl: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
  { id: 3, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 4, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" },
  { id: 5, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 6, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 7, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 8, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 9, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 10, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 11, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 12, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1518730518541-d0843268c287?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHx0cmF2ZWx8ZW58MHwwfDB8fHwy" },
  { id: 13, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1530616858450-99ba4525057d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHx0cmF2ZWx8ZW58MHwwfDB8fHwy" },
  { id: 14, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHx0cmF2ZWx8ZW58MHwwfDB8fHwy" },
  { id: 15, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHx0cmF2ZWx8ZW58MHwwfDB8fHwy" },
  { id: 16, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFyaXN8ZW58MHwwfDB8fHwy" },
  { id: 17, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHwwfDB8fHwy" },
  { id: 18, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfDB8MHx8fDI%3D" },
  { id: 19, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1566999573217-25c859ec1450?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyaXB8ZW58MHwwfDB8fHwy" },

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
              {/* <Text
                position="absolute"
                bottom={4}
                left={4}
                color="white"
                fontWeight="bold"
                fontSize="lg"
              >
                {item.name}
              </Text> */}
            </Box>
          ))}
        </Grid>
      </Box>
    );
  };

export default TravelGallery;